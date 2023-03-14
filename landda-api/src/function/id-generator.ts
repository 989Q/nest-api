export function generateUniqueId(): string {
  const epoch = new Date('2023-01-01').getTime(); // set a start date for the epoch
  const now = new Date().getTime();
  const timestamp = now - epoch;
  const random = Math.floor(Math.random() * 100000);
  const id = `${timestamp}${random}`.padStart(11, '0');

  // Use a dictionary of letters and numbers to convert digits to characters
  // Excludes the numbers 0 and the letter O.
  const dictionary = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < id.length; i += 2) {
    const digit1 = parseInt(id.charAt(i), 10);
    const digit2 = parseInt(id.charAt(i + 1), 10);
    const value = digit1 * 10 + digit2;
    const character = dictionary.charAt(value % dictionary.length);
    result += character;
  }

  // Add any missing characters to ensure the result has length 12
  if (result.length < 12) {
    const missingChars = 12 - result.length;
    const randomChars = Array.from({ length: missingChars }, () => {
      const index = Math.floor(Math.random() * dictionary.length);
      return dictionary.charAt(index);
    });
    result += randomChars.join('');
  }

  return `${result.slice(0, 4)}-${result.slice(4, 8)}-${result.slice(8, 12)}`;
}
