// 1)Use a do...while loop to console.log the numbers from 1 to 1000.
let result = "";
let number = 0;
// let i = 1;


do {
  number = number + 1;
  result = `${result + number}, `;
  // console.log(i);
  // i++;
} while (number < 1000);
console.log(result);

//Create an object (with keys and values) called person with the following data:

let person = {
  
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

//Create a function that logs out the keys of the object using Object.keys().
const objectKeysForFunction = () => {
 
  console.log(Object.keys(person)); 
};
objectKeysForFunction();

//Create a function that logs out the keys and values of the object using Object.entries().

const objectEntriesForFunction = () => {
 
  console.log(Object.entries(person)); 
};
objectEntriesForFunction(); 


//Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
  {
  
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "may 10, 2016",
    gender: "female",
  },
  {
   
    firstName: "kevin",
    lastName: "hart",
    birthDate: "july 9, 2000",
    gender: "female",
  },
  {
   
    firstName: "malcolm",
    lastName: "x",
    birthDate: "march 24,1929",
    gender: "male",
  },
  {
   
    firstName: "beyonce",
    lastName: "knowles",
    birthDate: "august 25, 1969",
    gender: "female",
  },
];

//Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.

const forOfFunction = () => {
 
    for (let person of arrayOfPersons) {       
     let birthYear = person.birthDate.split(" ")[2]   
     if (birthYear % 2 == 1)  {
        console.log(birthYear)
     }                            
    }
  };
  forOfFunction()

//Use .map() to map over the arrayOfPersons and console.log() their information.

arrayOfPersons.map((person, i, array)=>{
    console.log(person, i, array)
}) 
 


  let malesArray = arrayOfPersons.filter((person)=>{

    return person.gender === "male"
})
console.log("List of Males:",malesArray)


//Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const functionForBirthYear = () => {
    for (let person of arrayOfPersons) {
        let birthYear = person.birthDate.split(" ")[2] 
        if (birthYear <= 1990) {
            console.log(birthYear, "true")
        }
    }
}
functionForBirthYear();

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let arrayOfPeople = arrayOfPersons.filter((person)=>{
    let birthYear = person.birthDate.split(" ")[2] 
    return birthYear <= 1990   
})
console.log("List of people born before jan 1, 1990:", arrayOfPeople)