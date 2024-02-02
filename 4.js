/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

*/

const statement = 'I am a hard working person';
const statement2=[]

const word=statement.split(' ');

for(let w of word){
     statement2.unshift(w)
}
const join=statement2.join(' ');
console.log(join)