/* 
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]

*/



const numbers = [12, 98, 5, 41, 23, 78, 46];

const numbers2=[];

for(let i=0;i<=numbers.length-1;i++){

    if(numbers[i] % 2 ===0){
        numbers2.push(numbers[i])
    }
}console.log(numbers2);