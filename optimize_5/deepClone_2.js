// Случайно наткнулся на structuredClone() пока читал про JSON.stringify() , так что это здание тоже не в зачет. Передо мной первый раз встала задача о необходимости глубокого клонирования

// function deepClone(obj) {
//   return structuredClone(obj);
// }

// function deepClone2(obj) {
//     return JSON.parse(JSON.stringify(obj));
//   }
// const original = {
//   name: 'John',
//   address: {
//     city: 'New York',
//     country: 'USA',
//   },
// };
// const copy = deepClone(original);
// console.log(copy);

// copy.address.city = 'Los Angeles';
// console.log(original.address.city);
// console.log(copy.address.city);
