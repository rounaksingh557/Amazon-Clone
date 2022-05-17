const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Kzz3JSFbSpGKBBssCkkao0T2a6U9d4HynvONfOfzg4NiwrK6MneF34rmpGXrlmYNFVb698YBLA8P7PpgyEQQPLP00pGLa3CYn"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Amazon Clone API")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "Amazon Clone Payment",
    shipping: {
      name: "Rounak Singh",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
    payment_method_types: ["card"],
  });

  const customer = await stripe.customers.create({
    name: "Rounak Singh",
    address: {
      line1: "510 Townsend St",
      postal_code: "98140",
      city: "San Francisco",
      state: "CA",
      country: "US",
    },
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// Api Url : http://localhost:5001/e-clone-faf85/us-central1/api
