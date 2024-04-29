let userFirstName = 'Muhammmad ';
let userLastName = 'Ahmed';
console.log(`Welcome ${userFirstName} ${userLastName}`);


let userMobilePhone = 'Samsung A10s'
console.log(`Your Mobile Phone : ${userMobilePhone}`);
console.log(`Lenght Of String: ${userMobilePhone.length}`);


let userCountry = 'Pakistani';
let userCountrySearch = 't'
console.log(`String: ${userCountry}`);
console.log(`Index of n: ${userCountry.indexOf(userCountrySearch)}`);


let userString = 'Hello World';
let userStringSearch = 'l';
console.log(`String: ${userString}`);
console.log(`Last Index Of: ${userString.lastIndexOf(userStringSearch)}`);

userCountry = 'Pakistani';
console.log(`String: ${userCountry}`);
let characterIndexSearch = 3;
console.log(`Character at index ${characterIndexSearch}: ${userCountry.charAt(characterIndexSearch)}`);


console.log("Welcome " + userFirstName.concat(userLastName));


let cityName = 'Hyderabad'
let replaceCityName = 'Islam'
console.log(`Original City Name: ${cityName}`);
console.log(cityName.replace('Hyder' ,'Islam'));


var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replaceAll(/and/g ,"&")
console.log(message);


let value = "472"
console.log(`Value: ${value}`);
console.log(`Type: ${typeof value}`);
console.log(`Value: ${value}`);
value = parseInt(value)
console.log(`Type: ${typeof value}`);


let userInput = 'peanuts'
console.log(`User Inputs: ${userInput}`);
console.log(`Uppercase: ${userInput.toUpperCase()}`);



userInput = 'javascript';
console.log(`User Input: ${userInput}`);
userInput =  userInput[0].toUpperCase() + userInput.slice(1);
console.log(`Title Case: ${userInput}`);


// let num = "35.36";
// let stringToNum = parseInt(num)

// console.log(`${stringToNum}${num.slice()}`);


var num = 35.36;
var numAsString = num.toString(); 
var numWithoutDot = numAsString.replace('.', ''); 
console.log(numWithoutDot);



let userName = 'Ahmed';
for (let i = 0; i < userName.length; i++) {
    if(userName[i] == '@' || userName[i] == '!' || userName[i] == ',' || userName[i] == '.'){
            console.log(`You cannot use special character like @ , . !`);
    }
    
}
console.log(`Your Name: ${userName}`);



let BakeryItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let userSearchBakeryItems = 'cHIps'.toLowerCase();
for (let i = 0; i < BakeryItems.length; i++) {
        if(BakeryItems[i].toLowerCase() == userSearchBakeryItems){
            console.log(`Your Search item ${userSearchBakeryItems} is available`);
            console.log(`${userSearchBakeryItems} is available at index ${i} at our bakery`);
            break
        }else{
            console.log(`${userSearchBakeryItems} is not available at our bakery`);
            break
        }
    
}


var passwordFromUser = "Password123";
console.log(`Entered Password from user ${passwordFromUser}`);
var containsNumber = false;
for(let i = 0 ; i < passwordFromUser.length; i++){
    if(isNaN(passwordFromUser[0])){
        
    }else{
        console.log(`Dont use number at starting of a password`);
        break
    }
}
for (var i = 0; i < passwordFromUser.length; i++) {
   
    if (!isNaN(parseInt(passwordFromUser[i]))) {
        containsNumber = true;
        break; 
    }
}

if (!containsNumber) {
    console.log("Use a number in your password.");
} else {
    console.log("Password is valid!");
}

if (passwordFromUser.length >= 6) {
    // console.log(`Password is Valid`);
}else{
    console.log(`The lenght of password must be greater than 6`);
}



userString = 'Karachi University Student';
console.log(userString);
userString = userString.split('');
for (let i = 0; i < userString.length; i++) {
    console.log(userString[i]);
    
}


userCountry = 'Pakistani';
console.log(`This is the string ${userCountry}`);
console.log(`Last Character of input ${userCountry.charAt(userCountry.length-1)}`);



let input = 'The quick brown fox jumps over the lazy dog';
let userSearch = 'the'
let count = 0
for (let i = 0; i < input.length; i++) {
    if (input.slice(i,i+userSearch.length).toLowerCase() == userSearch.toLowerCase()) {
        count++
    }
    
}
console.log(`The word you search ${userSearch} is avialble ${count} times`);



