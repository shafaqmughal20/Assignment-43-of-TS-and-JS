//43Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



//function to show magician name
function show_magicians(magicians : string[]){
    magicians.forEach(name =>console.log(name))
}

//function to make magicians great through.map()it will modify array
function make_great(magicians:string[]){
    return magicians .map(name=>`The Great ${name}`);
    
}

//define array of magician names
let magicians_names = ["ali", "usama", "hamza"]


//making a copy of original array through  .slice() function
let copy_magician_names = magicians_names.slice()

//Modify the copied array to include "The Great" wiyh their names
let  copy_great_magicians = make_great(copy_magician_names)

//show both arrays original and copy 

//original
console.log("original array\n")
show_magicians(magicians_names)

//copied
console.log("\ncopied array\n")
show_magicians(copy_great_magicians)
