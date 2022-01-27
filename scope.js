
let bonus=20;//global scope...it can be accesed from anywhere

function sum(first,second){
    let result=first+second+bonus; //function scope cz function er vitore variable declare hoise..function er bahir theke call hobe na
    console.log(result);
    if (result>9){
        const mood="happy";
        console.log(mood); 
    }
    
    return result;
}

const output=sum(3,7);

console.log(output);


r=9
if(r==9){                 //{} er vitore const r let die die thakle seta block scope........var die if block a call korle seta automatically hoist hoye upore uthe jay
    var l="djksj";
    console.log(l);
}
console.log(l);


console.log(f);
var f="jdn";   //let,const dile error asbe