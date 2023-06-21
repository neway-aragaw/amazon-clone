import React,{useState,useEffect} from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Home/StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Home/reducer'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'
import { db } from '../Login/firebase'
function Payment() {

    const [{basket, user }, dispatch]= useStateValue();
      const navigate = useNavigate();

const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

  // The function uses the reduce method to iterate over the items in the basket and sum their prices. 
  // The reduce method applies a function to each element in the array, in this case, adding the price of the current item to the running total stored in the "amount" variable. 
  // The reduce method returns a single value, which is the total price of all the items in the basket.

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
// const stringClientSecret = clientSecret.toString();
//"error": The current error, if any. The initial value is null.
// "disabled": A boolean value indicating whether the component is disabled or not. The initial value is true.
// "succeeded": A boolean value indicating whether a certain operation has succeeded or not. The initial value is false.
// "processing": A string value indicating the current processing status of the component. The initial value is an empty string.
// "clientSecret": A boolean value indicating the current client secret. The initial value is true.
 
     useEffect(() => {
      const getClientSecret = async () => {
        const response = await axios({
        method: 'post',
        //stripe expects the total in a currencies subunits
        url:`/payments/create?total=${getBasketTotal(basket)*100}`
        });
        console.log(response);
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
     }, [basket]);

//      The useEffect hook also takes an array as a second argument, which is called the "dependencies array." This array is used to control when the effect function is run. In this case, the effect function is run every time the "basket" variable changes.
// The getClientSecret function is an async function that sends a POST request to the server with the total price of the items in the basket. The total price is calculated using the getBasketTotal function that you asked about earlier. The response from the server contains a "clientSecret" field, which is stored in the component's state using the setClientSecret function.

     console.log("THE SECRECT IS  >>>" , clientSecret);

const handleSubmit = async (event) => {
  event.preventDefault();
  setProcessing(true);
  
  const payload = await stripe.confirmCardPayment(clientSecret, {
    
    
    payment_method: {
      card: elements.getElement(CardElement),
      
    },

  }).then(({ paymentIntent }) => {
console.log(paymentIntent);

  db.collection("users")
    .doc(user?.uid)
    .collection( "orders")
    .doc(paymentIntent.id)
    .set({
      basket: basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created,
    });

    setSucceeded(true);
    setError(null);
    setProcessing(false);

     dispatch({
      type: 'EMPTY_BASKET',
     });

    navigate('/orders');
  })

};
  const handleChange = (event) => {
    //listen for changes in the CardElement
    //and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };


return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p> 1234 sefere</p>
            <p>Baltimore,MD</p>
          </div>
        </div>
        {/* payment section -- review address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                Product={item.Product}
              />
            ))}
          </div>
        </div>
        {/* payment section payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* stripe magic will go */}</div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => ( <h3>Order Total: {value} </h3> )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button  disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>
                    Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
