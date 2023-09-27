const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

function calculateGoal(initialSavings, monthlyDeposit, monthlyProfit, invest, goalAmount) {
  if (initialSavings >= goalAmount) {
    return {
      months: 0,
      weeks: 0,
      days: 0,
    }; // Already reached the goal.
  }

  initialSavings = parseFloat(initialSavings);
  monthlyDeposit = parseFloat(monthlyDeposit);
  monthlyProfit = parseFloat(monthlyProfit);
  goalAmount = parseFloat(goalAmount);

  let months = 0;
  let weeks = 0;
  let days = 0;
  let currentSavings = initialSavings;

  while (currentSavings < goalAmount) {
    const monthlyGrowth = (currentSavings + monthlyDeposit) * (monthlyProfit / 100);

    currentSavings += monthlyDeposit + monthlyGrowth;
    months++;

    if (months % 4 === 0) {
      weeks++;
    }
  }

  days = months * 30; // Assuming an average of 30 days per month

  return {
    months,
    weeks,
    days,
  };
}

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  try {
    const { months, weeks, days } = calculateGoal(
      req.body.initialSaving,
      req.body.monthlyDeposit,
      req.body.investmentProfit,
      req.body.invest,
      req.body.targetAmount
    );

    console.log(`It will take ${months} months, ${weeks} weeks, and ${days} days to reach your goal of $${req.body.targetAmount}.`);
    res.json({ months, weeks, days });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
