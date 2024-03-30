export default function chargeController(req, res) {
  const { rentalDuration, carRate, discount, additionalCharges } = req.body;

  // Validate input data (example)
  if (!rentalDuration || !carRate || discount < 0 || additionalCharges < 0) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  // Calculate hourly rate
  const hourlyRate = carRate.hourly;

  // Calculate daily rate (assuming daily rate is same as weekly)
  const dailyRate = carRate.daily;

  // Calculate total charges based on hourly rate
  const totalHourlyCharges = rentalDuration * hourlyRate;

  // Calculate total charges based on daily rate (assuming weekly is same)
  const totalDailyCharges = Math.ceil(rentalDuration / 24) * dailyRate;

  // Apply discount
  const discountedAmount =
    totalHourlyCharges > totalDailyCharges
      ? totalDailyCharges * (discount / 100)
      : totalHourlyCharges * (discount / 100);

  // Calculate final rental charges (considering smallest amount)
  const finalCharges =
    Math.min(
      totalHourlyCharges - discountedAmount,
      totalDailyCharges - discountedAmount
    ) + additionalCharges;

  res.status(200).json({ finalCharges });
}
