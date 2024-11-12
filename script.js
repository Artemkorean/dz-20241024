// 1

// const students = [
//     {
//         name: "Сидоров",
//         score: 12,
//     },
//     {
//         name: "Иванов",
//         score: 4,
//     },
//     {
//         name: "Андреев",
//         score: 9,
//     },
//     {
//         name: "Комаров",
//         score: 5,
//     },
//     {
//         name: "Соловьев",
//         score: 2,
//     },
//     {
//         name: "Петров",
//         score: 5,
//     }
// ];

// function getAboveAvgScore(students){
//     const avgScore = students.reduce((sum,student) => sum + student.score,0)/students.length
//     const aboveAvgScore = students.filter(student => student.score > avgScore)
//     return aboveAvgScore.map(student => student.name)
// }
// const result = getAboveAvgScore(students)
// console.log(result)


// 2


// const numbers = [2,5,12,65,4,8,23,5,12,66,67,8,8,3,3,95]

// function getUniqueSortedNumbers(arr){
//     return arr
//         .filter((value,index,self) => self.indexOf(value) === index)
//         .sort((a,b) => a - b)
// }

// const result = getUniqueSortedNumbers(numbers)
// console.log(result)


// 4


// let strings = ["hi","how","are","you","today"]

// function justFunction(arr){
//     return arr
//         .filter(str => str.length >= 3 )
//         .map(str => str.trim())
//         .join('  ')
// }

// let result = justFunction(strings)
// console.log(result)


// 5



// function getVowel(str){
//     let vowels = "аяоуюиыеэ";
//     let result = {
//         count : 0,
//         indexes : []
//     };
    
//     str.split(' ').forEach((char,index) => {
//         if(vowels.indexOf(char) !== -1) {
//             result.count++;
//             result.indexes.push(index);
//         }
//     });
    
//     return result;
// }

// let string = "домоуправительница";
// let result = getVowel(string);
// console.log(result)


// 6

// let people = [
// {   
//     name : "SpiderMan",
//     age : 22
// },
// {   
//     name : "WonderGirl",
//     age : 27
// },
// {   
//     name : "BlackPanther",
//     age : 40
// },
// {   
//     name : "ScoobyDoo",
//     age : 16
// }
// ];

// function sortedNames(arr){
//     return arr
//         .sort((a,b) => a.age - b.age)
//         .map(person => person.name)
//         .join(',')
// }

// let result = sortedNames(people);
// console.log(result)