function countLetterInString(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
          count++;
      }
  }
  return count;
}

function getRow(firstRow, secondRow, letter) {
  const countFirst = countLetterInString(firstRow, letter);
  const countSecond = countLetterInString(secondRow, letter);

  if (countFirst > countSecond) {
      return firstRow;
  } else if (countSecond > countFirst) {
      return secondRow;
  } else {
      return `Both strings have the same number of letters "${letter}"`;
  }
}

// Основні рядки для підрахунку
const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

// Отримання літери для підрахунку від користувача
const letter = prompt('Enter the letter you want to count:', 'a');

// Виклик функції та виведення результату
const result = getRow(firstRow, secondRow, letter);
alert(result);
console.log(result);
