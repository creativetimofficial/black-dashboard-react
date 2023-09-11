function calculateGoal(initialSavings, monthlyDeposit, monthlyProfit, goalAmount) {
    if (initialSavings >= goalAmount) {
      return 0; // Already reached the goal.
    }
  
    let days = 0;
    let currentSavings = initialSavings;
  
    while (currentSavings < goalAmount) {
      // Calculate monthly growth from investments
      const monthlyGrowth = (currentSavings + monthlyDeposit) * (monthlyProfit / 100);
  
      // Update current savings
      currentSavings += monthlyDeposit + monthlyGrowth;
  
      days++;
  
      if (currentSavings >= goalAmount) {
        return days;
      }
    }
  
    return days;
  }
  
  // Example usage:
  const initialSavings = 10000; // Initial savings in dollars
  const monthlyDeposit = 1000; // Monthly deposit in dollars
  const monthlyProfit = 1.5; // Expected monthly profit from investments (as a percentage)
  const goalAmount = 50000; // Target goal amount in dollars
  
  const daysNeeded = calculateGoal(initialSavings, monthlyDeposit, monthlyProfit, goalAmount);
  console.log(`It will take ${daysNeeded} days to reach your goal of $${goalAmount}.`);
  