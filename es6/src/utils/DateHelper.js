
//  formats date to yyyy-mm-dd
export function formatStandartDate(date) {
  return new Date(date).toLocaleDateString('lt-LT');
}

// adding days to today date
export function getDateAfterDays(days) {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return today;
}
