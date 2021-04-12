/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfTwo = function (n1,n2){
    if (n1 === n2) {
        return (n1+n2) *3}
        else { return n1+n2 }
    }


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
 function ifIs50 (n1,n2) {
      return (n1===50 || n2===50 || (n1+n2) === 50 )        
}

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removeChar (str,i) {
    return str.slice(0,i-1)+str.slice(i,str.length)
}
// console.log(removeChar("123456789",5)) // logs 12346789

/*

4)
 Create a function to find the largest of three given integers.
*/
const largerOfThree = function (n1,n2,n3) {
   return Math.max(n1,n2,n3)
}
    // console.log(largerOfThree(3,200,3))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const areInRange = function (n1,n2) {
    if (n1 > 40 && n2 >40 && n2 < 60 && n1 <60) {
        console.log( " they are inside the range a")
    } else if (n1 > 70 && n2 >70 && n2 <= 100 && n1 <=100) {
        console.log ("they are inside the range b") }
        else { console.log("they are not in any range")}   
}
//  areInRange(71,90)
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const multiString = function (str,n1) {
    let newstr = str
    for (i=2;i<=n1;i++) {
         newstr = newstr +" "+str
    }
    return newstr
}
// console.log(multiString("Test",2))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const showCityName = function (str) {
    if ( str.slice(0,3)==="Los" || str.slice(0,3)==="New") {
        console.log( str )
    } else { console.log( " ")}

    
}
// showCityName("Los Angeles")
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const calculateSumOfThreeOfAnArray = function (arr) {
    return arr[0] + arr[1] +arr[2]  
}
// console.log(calculateSumOfThreeOfAnArray([2,4,2]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const testIfArrayHasOneOrThree = function (arr) {
    return (arr[0] ===1 || arr[0] ===3 || arr[0]===1 || arr[1]===3)
}
// console.log(testIfArrayHasOneOrThree([10,3]))


// 10)

// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
const testIfArrayHasNotOneOrThree = function (arr) {
    return (arr[0] !==1 && arr[0] !==3 && arr[0]!==1 && arr[1]!==3)
}
// console.log(testIfArrayHasNotOneOrThree([2,4]))

// 11)

// Create a function to find the longest string from a given array of strings.
const biggestArrayOfStrings = function (arr) {
    let biggestStr = ""
    for (i=0;i<arr.length;i++) {        
        if ( arr[i].length> biggestStr.length) {
            biggestStr=arr[i]
        }
    }
    return biggestStr
}
// console.log(biggestArrayOfStrings(["Auto","einai","to","megalutero","string","pou","exei","ginei","pote","!!!!!"]))
// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
const typeOfAngles = function (n1) {
    if ( n1 >=0 && n1<90) {
        console.log("This is an acute angle")    }
         else if (n1 === 90 ) {
        console.log ("This is a right angle")}
        else if (n1 >90 && n1 <180) {
            console.log("This is a btuse angle")}
            else if (n1===180) {
                console.log("This is a straight angle")
            }else {console.log("This is a reflex angle!")}
        }
    typeOfAngles(280)
// 13)

// Create a function to find the index of the greatest element of a given array of integers

// 14)

// Create a function to get the largest even number from an array of integers.

// 15)

// Create a function to check from two given integers, whether one is positive and another one is negative.

// 16)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

// 17)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

