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