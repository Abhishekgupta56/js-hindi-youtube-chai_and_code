const marvel_heros = ["thor", "ironman", "doctoe strnage","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
// basically the motive behind was to illustrate that array thats any data 
// array ke ander arrays 

console.log(marvel_heros[3]);
console.log(marvel_heros[3][3]);

// concat and spread operaters --> gives the same output

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_herors = [...marvel_heros, ...dc_heros]
console.log(all_herors);

const new_array = [1,3,3,[3,4,5,[1,2,3,4],45,56,67],56,6,4,7,]
new_array2 = new_array.flat(Infinity)
console.log(new_array2);
// convert the multiarray into the single array 

console.log(Array.isArray("abhishek")); //o/p is false becoz it is string
console.log(Array.from("abhishek"));
// console.log(Array.from({name: "abhi"},{name: "abhishek"},{name: "abhigupta"}));

console.log(Array.from({name: "abhi"}));
