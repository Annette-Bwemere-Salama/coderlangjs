export const getBMICategory = (bmi) => {
 if (bmi <= 18.5) {
  return "Underweight"
 }if (bmi < 25) {
  return "Normal weight"
 }if (bmi >=  25 && bmi < 30) {
  return "Overweight"
 }if (bmi >= 30) {
  return "Obesity"
 }

}