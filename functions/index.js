
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51MO89mHSRKApEv9GOOr9ylp8Lt7opvGoArmdqK3IdKyA8D3vQjqnc5ZXvVbENRZbkXH66PVWDYdIfSb2IDrIk1wr00qIl0BDG7"
);

const app = express();


app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
// console.log(request.query);

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);
