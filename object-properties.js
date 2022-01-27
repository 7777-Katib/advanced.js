const students=[
    {id:21,name:"bingo"},
    {id:31,name:"manna"},
    {id:41,name:"hay"},
    {id:51,name:"khela"}
];
// output=[]
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     console.log(element.name);
//     output.push(element.name);
//     console.log(output);
// }

const result=students.map(x=>x.name);
const result1=students.map(x=>x.id);
console.log(result);
console.log(result1);

const fil=students.filter(x=>x.id>40);
const fil1=students.find(x=>x.id>40);
console.log(fil);
console.log(fil1);