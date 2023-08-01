const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51NaDKXCkM0cENOGbFLYhgA5xvm55VO7jA7hZBv66UfKVrrYQvrLJ4BtjdsHSlveaqVwdK95JiiUpWClcEpfAUEKD00RmSXQ98J"
); // Replace with your actual Stripe secret key

app.use(express.json());

// Stripe payment endpoint
app.post("/api/checkout", async (req, res) => {
  const { token, amount, currency } = req.body;
  try {
    // Create a charge using the Stripe API
    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token.id,
      description: "Movie Purchase",
    });

    // Return a success response
    res.json({ success: true });
    alert("successfll paymeny");
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000; // Replace with your desired port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
