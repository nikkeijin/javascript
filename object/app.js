let david = {
    gender: "male",
    name: "sugawara david",
    age: 30
}

/* see all property */
console.log(david)

/* add a new property */
david.color = "red"

/* add array */
david.tech = ["HTML5", "CSS3", "JavaScript"]

/* add object */
david.sns = {
    instagram: "@nikkeijin",
    linkedin: "linkedin.com/in/nikkeijin",
    github: "https://github.com/nikkeijin/"
}

/* add object with array */
david.learning = {
    front: ["ReactJS", "VueJS", "AngularJS"],
    back: ["NodeJS", "PHP"]
}

/* select a property to see */
// console.log(david.name)

/* delete a property */
// delete david.age
// console.log(david)

/* var inside object */
const brand = "ferrari"

let car = {
    year: 2022,
    brand //const above
}

console.log(car)