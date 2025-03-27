

// // array map

let number = [1,2,3,4,5,6,7,8,9]
let result = number.map(item =>{
    return item * 2
})
console.log(result)


// // Array filter

const words = ["apple","orange","mango","chair","table","flower","rose"]

const alphabets = words.filter(word => word.length>5)
console.log(alphabets)





// // Array sorting

let students = [
    {
        id:1,
        name:"Swetha"
    },
    {
        id:2,
        name:"Dheerka"
    },
    {
        id:3,
        name:"Priya"
    },
    {
        id:4,
        name:"Malathi"
    }
]

students.sort((a,b)=>{
    if(a.name < b.name) return -1
    if(b.name < b.name) return 1
    return 0
})
console.log(students)


//  for each


const numbers = [65, 44, 12, 4];
let sum = 0;

function myFunction(item, index, arr) {
  arr[index] = item / 10;
}

numbers.forEach(myFunction);

console.log(numbers);







