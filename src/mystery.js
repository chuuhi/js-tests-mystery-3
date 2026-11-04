export const mystery3 = (string1, string2) => {
  if (string1 === string2) return 0;
  if (string1.length !== string2.length) return 0;

  let differences = 0;

  const zipped = [...string1].map((element, index) => [element, string2[index]]);
  for (const letterPair of zipped) {
    if (letterPair[0] !== letterPair[1]) {
      differences += 1;
    }
  } return differences;
};

