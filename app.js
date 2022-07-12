/*
//fucntion 1
const foods = [pizza, burger, fingerChips, donuts, springRoll];
let modifiedFood = foods.slice(1,4)
console.log(modifiedFood);

//function 2 
let modifiedFood = foods.splice(2,0,noodles, icecream)
console.log(modifiedFood);

//function 3
const numberArray = [12,324,213,4,2,3,45,4234];

let isEven=numberArray.filter(element =>element%2===0)
console.log(isEven)

const isPrime = num =>{
    for(let x=2;x<num;x++){
        if(num%x===0)
            return false;
        
    }
    return num>1;

}
console.log(numberArray.filter(element=>isPrime(element)));

//funtion 4
const nonPrime = num =>{
    for(let x=2;x<num;x++){
        if(num%x===0)
            return true;
        
    }
    return num;

}
console.log(numberArray.filter(element=> nonPrime(element)));

//funtion 5
let isEven = numberArray => {
    return numberArray.filter(ele => ele%2===0)
}
console.log(isEven);

//funtion 6 
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(element => element*element)
console.log(findSquareOfNumbers);

//funtion 7
const myArray = [2, 3, 5, 10];
let multiply = myArray.reduce(mul,element)=>mul*element,1
console.log(multiply)
*/