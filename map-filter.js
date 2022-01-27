const numbers=[3,4,5,6,7,8,9];
// const output=[]
// for (let i= 0; i<numbers.length;i++) {
//     const element = numbers[i]*numbers[i];
//     console.log(element);
// }

//map holo array er upor apply kore prottek element ta k dhorbe..and output a array dbe akta

// const result=numbers.map(element=>element*element);

// console.log(result);

const bigger=numbers.filter(element=>element<5);

const isThere=numbers.find(x=>x<5);

console.log(isThere);