var express = require('express');
const Customer = require('../models/user');
var router = express.Router();

router.get('/all', async function (req, res, next) {
  try {
    const query = Customer.find()

    query.select('firstName lastName mobileNumber')

    query.exec(function (err, customers) {
      if (err) return res.status(300).json(err);
      res.json(customers)
    });
  } catch (error) {
    return res.status(300).json(error)
  }

});
router.post('/add', async function (req, res, next) {
  try {
    const { firstName, lastName, mobileNumber } = req.fields
    console.debug({ firstName, lastName, mobileNumber })
    const newCustomer = new Customer({ firstName, lastName, mobileNumber })
    await newCustomer.save();
    res.status(200).json({
      success: true,
      message: 'Customer created successfully!',
      user: newCustomer
    })
  } catch (error) {
    res.status(503).send(error.message)
  }
});
router.delete('/delete', async function (req, res, next) {
  try {
    const { id } = req.fields
    await Customer.deleteOne({
      _id: id
    })
    res.status(200).json({
      success: true,
      message: 'Customer deleted successfully!',
    })
  } catch (error) {
    res.status(503).send(error.message)
  }
});
router.post('/update', async function (req, res, next) {
  try {
    const { firstName, lastName, mobileNumber, id } = req.fields
    await Customer.findByIdAndUpdate(id,{
      firstName, lastName, mobileNumber
    })
    res.status(200).json({
      success: true,
      message: 'Customer updated successfully!',
    })
  } catch (error) {
    res.status(503).send(error.message)
  }
});

module.exports = router;
