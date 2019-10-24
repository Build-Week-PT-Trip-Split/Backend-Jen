const router = require('express').Router();
const Payments = require('./paymentsModel');


router.get('/', async (req, res) => {
  try {
    const payments = await Payments.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error + 'Uh-oh! There was an error retrieving your payments'})
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