const router = require('express').Router();
const Payments = require('./paymentsModel');

const db = require('../data/dbConfig');

router.get('/expense/:id', async (req, res) => {
  try {
    const payments = await Payments.findBy({
      expense_id: req.params.id
    });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error + 'Uh-oh! There was an error retrieving your payments'})
  }
});

router.get("/:id", async (req, res) => {
  try {
    const payment = await Payments.findBy({ id: req.params.id });

    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// add new payment
router.post('/', async (req, res) => {
  try {
    const payment = await Payments.add(req.body);
    res.status(200).json(payment);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error + 'Bummer. Error adding the payment',
    });
  }
})

module.exports = router; 