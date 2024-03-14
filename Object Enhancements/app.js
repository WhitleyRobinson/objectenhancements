// Same keys and values ES2015 Version

//function createInstructor(firstName, lastName) {
    //return {
        //firstName,
        //lastName
    //}
//}

//const result = createInstructor
//console.log(result)

// Computed Property Names Write an ES2015 Version

//let favoriteNumber = 42;

//const instructor = {
    //firstName: "Colt",
    //[favoriteNumber]: "That is my favorite!"
//}

//const result = favoriteNumber
//console.log(result)


// Object Methods Write an ES2015 Version

//const instructor = {
    //firstName: "Colt",
    //sayHi() {
        //return "Hi!"
    //},
    //sayBye() {
       // return this.firstName + "says bye!";
    //}
//}

//const result = instructor
//console.log(result)

// createAnimal function 

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

//const d = createAnimal("dog", "bark", "Woooof!")
//console.log(d) 
//console.log(d.bark)

//const s = createAnimal("sheep", "bleet", "BAAAaaa")
//console.log(s)
//console.log(s.bleet)



