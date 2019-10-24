const router = require('express').Router();
const Expenses = require('./expensesModel');


router.get('/', async (req, res) => {
  try {
    const expenses = await Expenses.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Uh-oh! There was an error retrieving your expenses'})
  }
});

// add new expense
router.post('/', async (req, res) => {
  try {
    const expense = await Expenses.add(req.body);
    res.status(200).json(expense);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Bummer. Error adding the expense',
    });
  }
})

module.exports = router; 