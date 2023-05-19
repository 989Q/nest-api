// function generateUniqueId() {
//   const epoch = new Date('2023-01-01').getTime(); // set a start date for the epoch
//   const now = new Date().getTime();
//   const timestamp = now - epoch;
//   const random = Math.floor(Math.random() * 1000000);
//   const id = `${timestamp}${random}`.padStart(12, '0');
//   return `${id.slice(0, 4)}-${id.slice(4, 8)}-${id.slice(8)}`;
// }

// 6194-2626-88429086

// ____________________________________

// function generateUniqueId() {
//   const epoch = new Date('2023-01-01').getTime(); // set a start date for the epoch
//   const now = new Date().getTime();
//   const timestamp = now - epoch;
//   const random = Math.floor(Math.random() * 10000);
//   const id = `${timestamp}${random}`.padStart(8, '0');
//   return `${id.slice(0, 4)}-${id.slice(4, 8)}-${id.slice(8, 12)}`;
// }

// 6194-7048-1915

// ____________________________________

// function generateUniqueId() {
//   const epoch = new Date('2023-01-01').getTime(); // set a start date for the epoch
//   const now = new Date().getTime();
//   const timestamp = now - epoch;
//   const random = Math.floor(Math.random() * 100000);
//   const id = `${timestamp}${random}`.padStart(11, '0');

//   // Use a dictionary of letters and numbers to convert digits to characters
//   const dictionary = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let result = '';
//   for (let i = 0; i < id.length; i += 2) {
//     const digit1 = parseInt(id.charAt(i), 10);
//     const digit2 = parseInt(id.charAt(i + 1), 10);
//     const value = digit1 * 10 + digit2;
//     const character = dictionary.charAt(value % dictionary.length);
//     result += character;
//   }

//   return `${result.slice(0, 4)}-${result.slice(4, 8)}-${result.slice(8, 12)}`;
// }

// PM3B-IH30-

// ____________________________________

// let counter = 0;

// function generateUniqueId() {
//   const timestamp = Date.now().toString(16).padStart(12, '0');
//   const random = Math.floor(Math.random() * 65536).toString(16).padStart(4, '0');
//   const counter1 = Math.floor(counter / 65536).toString(16).padStart(4, '0');
//   const counter2 = (counter % 65536).toString(16).padStart(4, '0');
//   const id = `${timestamp}-${random}-${counter1}-${counter2}`;
//   counter = (counter + 1) % 0x100000000;
//   return id;
// }

// 0186dbddcc44-9e83-0000-0000

// ____________________________________

// function generateUniqueId() {
//   const epoch = new Date('2023-01-01').getTime(); // set a start date for the epoch
//   const now = new Date().getTime();
//   const timestamp = now - epoch;
//   const random = Math.floor(Math.random() * 100000);
//   const id = `${timestamp}${random}`.padStart(11, '0');

//   // Use a dictionary of letters and numbers to convert digits to characters
//   // Excludes the numbers 0 and the letter O.

//   // const dictionary = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
//   const dictionary = 'abcdefghijklmnopqrstuvwxyz123456789';
//   let result = '';
//   for (let i = 0; i < id.length; i += 2) {
//     const digit1 = parseInt(id.charAt(i), 10);
//     const digit2 = parseInt(id.charAt(i + 1), 10);
//     const value = digit1 * 10 + digit2;
//     const character = dictionary.charAt(value % dictionary.length);
//     result += character;
//   }

//   // Add any missing characters to ensure the result has length 12
//   if (result.length < 12) {
//     const missingChars = 12 - result.length;
//     const randomChars = Array.from({ length: missingChars }, () => {
//       const index = Math.floor(Math.random() * dictionary.length);
//       return dictionary.charAt(index);
//     });
//     result += randomChars.join('');
//   }

//   return `th-${result.slice(0, 4)}-${result.slice(4, 8)}-${result.slice(8, 12)}`;
// }

// th-lbvj-s76x-1sn9

// ____________________________________

// function generateUniqueId() {
//   const chars = 'abcdefghijklmnopqrstuvwxyz00000111112222233333444445555566666777778888899999';
//   const sections = [];
//   for (let i = 0; i < 12; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     sections.push(chars[randomIndex]);
//     if (i % 4 === 3 && i !== 11) {
//       sections.push('-');
//     }
//   }
//   return `th-${sections.join('')}`;
// }

// th-p011-4432-9w38

// ____________________________________

function generateUniqueId() {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz01234567890123456789012345678901234567890123456789";
  const segmentLengths = [6, 4, 4];
  
  for (let i = 0; i < segmentLengths.length; i++) {
    for (let j = 0; j < segmentLengths[i]; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    if (i < segmentLengths.length - 1) {
      result += "-";
    }
  }
  
  return result;
}

// 9nr3f2-8261-83k6

console.log(generateUniqueId());

// ____________________________________

function generateUniqueUserId() {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz01234567890123456789012345678901234567890123456789";
  const segmentLengths = [4, 4, 4];
  
  for (let i = 0; i < segmentLengths.length; i++) {
    for (let j = 0; j < segmentLengths[i]; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    if (i < segmentLengths.length - 1) {
      result += "-";
    }
  }
  
  return result;
}

// 9nr3f2-8261-83k6

console.log(generateUniqueId());