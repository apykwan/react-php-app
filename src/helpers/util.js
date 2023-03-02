export function generatePhoneNumber(n = 10) {
    let numbers = '';

    // first number always greater than zero
    numbers += Math.floor(Math.random() * 9) + 1;

    // generate rest 9 numbers
    let i = 1;
    while (i < n) {
        numbers += Math.floor(Math.random() * 10);
        i++;
    }
    return numbers;
}

export function formatPhoneNumber(phoneNumberString) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}