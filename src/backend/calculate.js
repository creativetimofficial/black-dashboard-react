const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(cors());

function calculateGoal(initialSavings, monthlyDeposit, monthlyProfit, invest, goalAmount) {
  if(invest === "No"){
    return 'You are not investing.'
  } else {

    if (initialSavings >= goalAmount) {
      return 0; // Already reached the goal.
    }
    initialSavings = parseFloat(initialSavings);
    monthlyDeposit = parseFloat(monthlyDeposit);
    monthlyProfit = parseFloat(monthlyProfit);
    goalAmount = parseFloat(goalAmount);
    let days = 0;
    let currentSavings = initialSavings;
  
    while (currentSavings < goalAmount) {
      // Calculate monthly growth from investments
   
      const monthlyGrowth = (currentSavings + monthlyDeposit) * (monthlyProfit / 100);
  
      // Update current savings
      currentSavings += monthlyDeposit + monthlyGrowth;

      days++;
  
    }
  
    return days;
  }

}
// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Calculate endpoint
app.post('/calculate', (req, res) => {
  try {
    const monthsNeeded = calculateGoal(req.body.initialSaving, req.body.monthlyDeposit, req.body.investmentProfit, req.body.invest, req.body.targetAmount);
    console.log(`It will take ${monthsNeeded} months to reach your goal of $${req.body.targetAmount}.`);
    res.json({ monthsNeeded });  // Send a JSON response
  } catch (error) {
    // Handle errors and send an error response
    res.status(400).json({ error: error.message });
  }
});

// Error handling middleware for other routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
