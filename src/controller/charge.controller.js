export default function chargeController(req, res,) {
    function calculateRentalCharges(rentalDuration, hourlyRate, dailyRate, weeklyRate, discounts, additionalCharges) {
        let totalAmount;
      
        if (rentalDuration >= 7) {
          totalAmount = weeklyRate * Math.ceil(rentalDuration / 7);
        } else if (rentalDuration >= 1) {
          totalAmount = dailyRate * rentalDuration;
        } else {
          totalAmount = hourlyRate * rentalDuration;
        }
      
        // Apply discounts
        totalAmount -= discounts;
      
        // Add additional charges
        totalAmount += additionalCharges;
      
        return totalAmount;
      }
      
      // Example usage
      const rentalDuration = 5; // in days or hours
      const hourlyRate = 10;
      const dailyRate = 50;
      const weeklyRate = 300;
      const discounts = 20;
      const additionalCharges = 30;
      
      const totalRentalCharges = calculateRentalCharges(rentalDuration, hourlyRate, dailyRate, weeklyRate, discounts, additionalCharges);
      console.log("Total rental charges: $" + totalRentalCharges);

      
    res.status(200).json({
        message: "Hello World",
        data: totalRentalCharges
    })
}