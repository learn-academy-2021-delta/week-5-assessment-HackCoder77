// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('coded', () => {
    it('converts a to 4 e to 3 i to 1 and o to 0', () => {
        expect(coded(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(coded(secretCodeWord2)).toEqual("G0bbl3dyg00k")        
        expect(coded(secretCodeWord3)).toEqual("3cc3ntr1c")        
    })
})

//take in a string
//create for loop
//set vowels to equal rules
// look for vowels in string
//replace vowels using rules provided
//found out i did not need to do all that and could complete in one line using replaceall
//also had to bring in regexp command of /gi to get rid of upper or lower case issues


// b) Create the function that makes the test pass.
function coded(string){
    let coded1 = string.replaceAll(/a/gi, 4).replaceAll(/i/gi, 1).replaceAll(/o/gi, 0).replaceAll(/e/gi, 3);
    
    return coded1
    }

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('gotIt', () => {
    it('returns all words containing a specific letter', () => {
        expect(gotIt(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(gotIt(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])            
    })
})

//take in an array
//create new empty array
//split array by words using split
//loop thru letters of word
//if letter is present in word
//push that word to new array

// b) Create the function that makes the test pass.

function gotIt(array, letter){
    let newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i].toLowerCase().includes(letter)) {
            newArray.push(array[i])
        }
    }
    return newArray
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe('fullHouse', () => {
    it('returns if you have a full house or not', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)            
        expect(fullHouse(hand3)).toEqual(false)            
    })
})

// b) Create the function that makes the test pass.

//take in an array
//iterate thru the array
//write function that says if there is not 3 of the same number it is false
//if it is 3 identical numbers then are there 2 identical numbers remaining
//if so, return true else return false

const fullHouse = (array) => {
    let count = [0,0]
    let secondNum = 0
    for (i=0; i<5; i++){
        if (array[0] == array[i]){
            count[0]++
        }
        else {
            secondNum = array[i]
        }
    }
    if ((count[0] !== 2) && (count[0] !== 3)){
        return false
    }
    for (i=0; i<5; i++){
        if (array[i] === secondNum){
            count[1]++
        }
    }
    if ((count[1] !==2) && (count[1] !==3)){
        return false
    }
    return true
}

fullHouse(hand1)
fullHouse(hand2)
fullHouse(hand3) 







