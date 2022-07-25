let david = {
    surname: "Sugawara",
    from: "Brazil",
    living: "Japan"
}

/*

const s = david.surname
const f = david.from
const l = david.living

console.log(`My name is David ${s} and I'm from ${f}. Currently living in ${l}.`)
*/

const { surname, from, living } = david

console.log(`My name is David ${surname} and I'm from ${from}. Currently living in ${living}.`)