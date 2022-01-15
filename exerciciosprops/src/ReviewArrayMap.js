const nums = [1, 2, 3, 4, 5];
const names = ["alice", "bob", "charlie", "danielle"];
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const squares = nums.map(function(num){
    return num * num
});

const capitalized = names.map((name)=> {
    return name[0].toUpperCase() + name.slice(1)
});

const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
})

console.log(squares);
console.log(capitalized);
console.log(paragraphs);