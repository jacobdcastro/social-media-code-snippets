const catAndDogCombiner = (catArr, dogArr) => {
  let catCount = 0;
  let dogCount = 0;
  const catsAndDogsList = [];

  return {
    addCat: () => {
      if (catCount < catArr.length) {
        catsAndDogsList.push(catArr[catCount]);
        catCount++;
      }
    },
    addDog: () => {
      if (dogCount < dogArr.length) {
        catsAndDogsList.push(dogArr[dogCount]);
        dogCount++;
      }
    },
    catsAndDogsList,
  };
};
