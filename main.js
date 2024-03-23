// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  [4, 5, 5, 6, 2, 5, 9, 7, 8, 1, 3, 6, 1, 6, 5, 6],
  [4, 0, 2, 4, 0, 0, 7, 1, 6, 7, 7, 8, 7, 8, 4, 4],
  [4, 5, 3, 9, 8, 0, 6, 3, 8, 5, 2, 4, 3, 2, 2, 6, 5, 0, 7],
  [2, 2, 2, 1, 0, 0, 8, 6, 3, 8, 7, 0, 5, 9, 3, 1],
  [2, 2, 2, 1, 0, 0, 7, 5, 6, 5, 8, 3, 6, 4, 0, 4],
  [5, 4, 3, 2, 8, 2, 4, 7, 3, 4, 9, 4, 6, 9, 2, 4],
  [3, 7, 1, 1, 2, 1, 9, 1, 4, 4, 7, 3, 1, 6, 5],
  [3, 7, 0, 9, 8, 9, 0, 4, 2, 2, 5, 9, 2, 1, 4],
  [3, 4, 8, 2, 3, 2, 8, 6, 5, 9, 3, 8, 5, 1, 8],
  [6, 0, 1, 1, 0, 3, 0, 6, 1, 2, 8, 4, 7, 5, 2, 6],
  [6, 0, 1, 1, 4, 8, 7, 9, 0, 1, 0, 0, 6, 4, 4, 8],
  [6, 0, 1, 1, 1, 0, 8, 8, 2, 2, 3, 9, 8, 9, 3, 4, 0, 2, 5],
  [3, 5, 2, 8, 6, 9, 1, 4, 5, 0, 3, 3, 3, 5, 9, 9],
  [3, 5, 3, 8, 3, 5, 1, 1, 0, 3, 6, 4, 2, 6, 7, 6],
  [3, 5, 3, 0, 9, 5, 1, 1, 1, 6, 7, 6, 5, 0, 4, 0, 5, 7, 7],
  [5, 4, 5, 0, 3, 6, 7, 8, 0, 5, 4, 2, 1, 7, 7, 0],
  [5, 5, 8, 9, 8, 2, 3, 9, 1, 9, 5, 2, 6, 3, 1, 2],
  [3, 0, 5, 7, 4, 6, 5, 9, 2, 8, 4, 3, 7, 4],
  [3, 0, 1, 2, 0, 1, 4, 5, 0, 7, 0, 3, 8, 9],
  [3, 0, 1, 5, 8, 3, 9, 1, 4, 2, 3, 5, 0, 6],
  [3, 6, 2, 8, 3, 8, 3, 4, 2, 8, 8, 9, 9, 5],
  [3, 6, 2, 2, 0, 7, 5, 6, 6, 7, 3, 0, 7, 7],
  [3, 6, 4, 7, 3, 5, 8, 6, 8, 9, 5, 9, 5, 2],
  [5, 0, 3, 8, 8, 3, 2, 0, 0, 1, 5, 9, 4, 3, 3, 3],
  [6, 7, 6, 1, 2, 2, 2, 0, 5, 3, 7, 4, 8, 2, 9, 5],
  [6, 7, 6, 3, 9, 8, 8, 2, 0, 9, 4, 0, 6, 4, 6, 1],
  [4, 1, 7, 5, 0, 0, 0, 6, 1, 4, 8, 8, 7, 4, 0, 5],
  [4, 1, 7, 5, 0, 0, 0, 6, 7, 1, 3, 0, 2, 3, 6, 3],
  [4, 0, 2, 6, 6, 9, 2, 0, 8, 9, 4, 9, 7, 4, 0, 4],
  [5, 0, 1, 8, 0, 0, 0, 0, 0],
];

// Add your functions below:

const validateCred = (cardNumberArray) => {
  const arraySum = cardNumberArray.reduce((prev, curr, index) => {
    //using reduce to add each element of the array
    if (cardNumberArray.length % 2 == 0) {
      //determining whether the array length is even, which determines the indices whose values need doubling
      if (index % 2 == 0) {
        return 2 * curr > 9 ? prev + 2 * curr - 9 : prev + 2 * curr; //return value for doubling indices
      } else {
        return prev + curr; //return value for non-doubling indicies
      }
    } else {
      if (index % 2 == 1) {
        return 2 * curr > 9 ? prev + 2 * curr - 9 : prev + 2 * curr; //return value for doubling indices
      } else {
        return prev + curr; //return value for non-doubling indicies
      }
    }
  }, 0);

  return arraySum % 10 == 0 ? false : true; //returns false if not invalid and true if invalid for pass-thru to idInvalidCardCompanies
};

findInvalidCards = (creditCards) => {
  //applies result of validateCred to a filter iterator to return an array of invalid cc#s
  return creditCards.filter((creditCard) => validateCred(creditCard));
};

const idInvalidCardCompanies = (creditCards) => {
  let invalidCardCompanies = creditCards.map((creditCard) => {
    //determines which cc companies to include
    switch (creditCard[0]) {
      case 3:
        return "American Express (AMEX)";
      case 6:
        return "Discover";
      case 4:
        return "Visa";
      case 5:
        return "Mastercard";
    }
  });

  return invalidCardCompanies.filter((v, i, self) => i == self.indexOf(v)); //returns an array of only unique values
};

console.log(idInvalidCardCompanies(findInvalidCards([invalid2])));
