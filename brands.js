function solution(U, N) {
  let likedBrands = [];
  try {
    likedBrands = await getLikedBrands(id);
  } catch (e) {
    likedBrands = [];
  }

  let topGenderBrands = [];
  try {
    topGenderBrands = await getTopBrandsForGender(U.gender);
  } catch (e) {
    topGenderBrands = [];
  }
  if (likedBrands.length + topGenderBrands.length < N)
    return new Promise((resolve, reject) => reject("Not enough data"));

  const result = [];

  for (let i of likedBrands) {
    if (result.length == N)
      return new Promise((resolve, reject) => resolve(result));
    if (!result.includes(i.name)) result.push(i.name);
  }

  for (let i of topGenderBrands) {
    if (result.length == N)
      return new Promise((resolve, reject) => resolve(result));
    if (!result.includes(i.name)) result.push(i.name);
  }
  return new Promise((resolve, reject) => resolve(result));
}

const getLikedBrands = (id) => {
  try {
    return await getLikedBrands(id);
  } catch (e) {
    return [];
  }
};

const getTopBrandsForGender = (gender) => {
  try {
    return await getTopBrandsForGender(gender);
  } catch (e) {
    return [];
  }
};
console.log(solution({ id: 1, gender: "female" }, 3));

//   return [
//     {
//       id: 1,
//       name: "iqra",
//     },
//     {
//       id: 1,
//       name: "dua",
//     },
//   ];
