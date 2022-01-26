//2.16
// let milesPerGallonTotalSum = 0;
// let  milesPerGallonCount = 0;
// let gallons;
// let miles;
// while (gallons !== -1) {
//     gallons = +prompt("Enter consumed gasoline in gallons or  press -1 if you want see average consumption");
//     if(gallons !== -1) {
//         miles  = +prompt("Enter distance traveled in miles ");
//         milesPerGallonCount++;
//         milesPerGallonTotalSum += miles/gallons;
//         alert(`miles/gallon ${miles/gallons}`);
//     }
// }
// console.log(milesPerGallonTotalSum / milesPerGallonCount)


//2.17
// let bankAccountNumber ;
// let startBalance;
// let expenses;
// let income;
// let limitOfCredit;
// while(bankAccountNumber !== -1) {
//     bankAccountNumber = +prompt("Enter your Bank account number or Enter -1 for exit")
//     if(bankAccountNumber !== -1) {
//         startBalance = +prompt("Enter start balance")
//         expenses = +prompt("Enter expenses");
//         income = +prompt("Enter income")
//         limitOfCredit = +prompt("Enter limit of credits")
//         let endBalance = startBalance + expenses - income;
//         if(endBalance > limitOfCredit) {
//             alert("Limit loan excess")
//         }
//     }
// }




















//2.18
// const fixedSalaryWeakly = 200;
// const salaryFromSalesbyPercentage = 9;
// let sales ;
// while(sales !== -1) {
//     sales = +prompt("Enter sales of or press -1 for  break input")
//     if(sales !== -1) {
//         alert(fixedSalaryWeakly + sales * salaryFromSalesbyPercentage/100 )
//     }
// }


//2.19
// let workedTime;

// while(workedTime !== -1) {
//     workedTime = +prompt("Enter worked time or press -1 break input ")
//     if(workedTime !== -1) {
//         let hourlySalary = +prompt("Enter hourly salary");
//         if(workedTime <= 40) {
//             alert(hourlySalary * workedTime)
//         } else {
//            alert(hourlySalary * 40 + hourlySalary * 1.5 * (workedTime - 40))
//         }
//     }
// }

//2.20
// let counter = 0;
// let maxNumber = 0;
// let currentNumber;
// while (counter < 10) {
//     currentNumber = +prompt();
//     if(maxNumber < currentNumber) {
//         maxNumber = currentNumber;
//     }
//     counter++;
// }
// alert(maxNumber)
//2.21
// for(let i = 0; i <= 5; i++) {
//    for(let j = 1; j<= 1000; j *= 10) {
//        if(i === 0) {
//         document.write(`${j}*N\t`)
//        } else {
//         document.write(`${i*j} \t`)
//        }
//    }
//    document.write("<br>")
// }


//2.22

// let max1, max2;
// let counter = 0;
// const arr = [];
// while(counter < 10) {
//     let inputValue = +prompt("Enter number");
//     arr.push(inputValue)
//   if(counter === 0) {
//       max1 = inputValue;
//   }
//   if(counter === 1) {
//       max2 = inputValue;
//   }
//   if(max2 > max1) {
//       let tmp = max1;
//       max1 = max2;
//       max2 = tmp;
//   }
//   if(inputValue > max1) {
//     max2 = max1;
//     max1 = inputValue;
//     }
//   if( max2 < inputValue && inputValue < max1) {
//       max2 = inputValue;
//   }
 
//   counter++;
// }
// console.log(max1, max2)


//2.28 this I
// let i, j;
// let str = "";
// for (i = 1; i <= 5; i++)
// {
//   for (j = 1; j <= 5; j++)
//   {
//     if (i == 1 || i == 5 || j == 1 || j == 5)
//    str += "*";
//     else
//     str += " ";
//   }
//   str += "\n";

// }
// console.log(str)

//2.29
// function reverseNumber(num) {
//     let digit, result = 0

//     while( num ){
//         digit = num % 10  
//         result = (result * 10) + digit 
//         num = parseInt(num / 10)  
        
//     }  
  
//    return result;
// }
// let inputNumber = +prompt("Enter number")
// let reversedNumber = reverseNumber(inputNumber);
// if(inputNumber === reversedNumber && inputNumber > 9) {
//     alert("number is Palindrome");
// } else {
//     alert("number is not Palindrome");
// }

//2.30 
// function binaryToDecimal(num) {
//     let sum = 0;
//     counter = 0;
//     while(num) {
//         if(num % 10 !== 0) {
//             sum += 2**counter;
            
//         }
//         counter++;
//         num = parseInt(num / 10)
//     }
//     console.log(sum);
// }

// binaryToDecimal(1010)

//2.31
// let str = "";
// for(let i = 1; i < 9; i++) {
//     if(i % 2 === 0) {
//         str += " ";
//     }
//     for(let j = 1; j < 9 ; j++) {
//         str += "*";
    
//     }
//     str += "\n";
// }
// console.log(str);
//2.33
// function calculateCircleDiameterLengthArea(radius) {
//     const PI = 3.14159;
//     console.log("Circle diameter", 2 * radius);
//     console.log("Circle length", 2 * PI * radius);
//     console.log("Circle Area", PI**2 * radius);
// }
// calculateCircleDiameterLengthArea(10);

//2.35
// function isTriangle(side1, side2, side3) {
//     let isTraingleBoolean = true;
//     if(side1 + side2 <= side3) {
//         isTraingleBoolean = false;
//         return isTraingleBoolean;
//     }
//     if(side1 + side3 <= side2) {
//         isTraingleBoolean = false;
//         return isTraingleBoolean;
//     }
//     if(side3 + side2 <= side1) {
//         isTraingleBoolean = false;
//         return isTraingleBoolean;
//     }
//     return isTraingleBoolean;
// }
// console.log(isTriangle(4, 2, 2))

//2.36
// function isRightTriangle(side1, side2, side3) {
//     if(side1*side1 + side2*side2 === side3*side3) {
        
//         return true;
//     }
//     if(side3*side3 + side2*side2 === side1*side1) {
        
//         return true;
//     }
//     if(side1*side1 + side3*side3 === side2*side2) {
        
//         return true;
//     }
//     return false;
// }
// console.log(isRightTriangle(3, 4, 5))


// 2.38 a)
// function factorial (num) {
//     if(num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1)
// }
// console.log(factorial(6))
//2.40
// let lengthOfProgression = +prompt("Enter length of progression");
// let sum = 0;
// let inputValue;
// for(let i = 0; i < lengthOfProgression; i++) {
//     inputValue = +prompt("Enter number of progression");
//     sum += inputValue;
// }
// alert(`Total sum of progression ${sum}`)
//2.43
// let counter = +prompt("Enter quantity of numbers");
// let min;
// for(let i = 0; i < counter; i++) {
//     let inputNumber = +prompt("Enter number");
//     if(i === 0) {
//         min = inputNumber;
//     }
//     if(min > inputNumber) {
//         min = inputNumber;
//     }
// }
// document.write(`Minimum number ${min}`);
//2.44
// for(let i = 1; i <= 15; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
// }
//2.46

// function compoundInterest(initialValue, percent, year) {
//     let rate = percent / 100;
//     let amount ;
    
//     for(let i = 1; i <= year; i++) {
//         amount = initialValue * Math.pow( 1.0 + rate, i ) ;
//         console.log(`year:${i} percent:${percent}  amount ${amount} `)
//     }

// }
// for(let j = 5; j <= 10; j++) {
//     compoundInterest(1000, j, 10)
// }














//2.47  a)
// let str = "";
// for(let i = 1; i <=10; i++ ) {
//     for(let j = 1; j <= i; j++) {
//         str +="*"
//     }
//     str += "\n";
// }
// console.log(str)
//b)
// let str = ""
// for(let i = 10; i>= 1; i--) {
//     for(let j = i; j >= 1; j--) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str)
//c)
// let str ="";
// for(let i = 10; i>= 1; i--) {
//     for(let j = 1; j <= 11 - i; j++) {
//         str += " ";
//     }
//     for(let j = i; j >= 1; j--) {
//         str +="*";
//     }
    
   
//    str += "\n";
// }
// console.log(str)
//d)
// let string = "";
// for(let i = 1; i <= 10; i++ ) {
//         for(let j = 1; j <= 10 - i; j++) {
//             string += " "
//     }
//     for(let j = 1; j <= i; j++) {
//        string += "*";
//     }
//     string +="\n";
// }
// console.log(string)
//2.48

// let inputValue = +prompt("Enter number 1 to 30");
// let string = "";
// if(inputValue > 1 && inputValue < 30) {
//     for(let i = 0; i < inputValue; i++) {
//         string += "*";
//     }
//     document.write(string)
// } else {
//     document.write("Please write from 1 to 30 number")
// }

//2.55
// for(let i = 2; i < 500; i++) {
//     for(let j = 2; j < 500; j++) {
//         for(let k = 2; k < 500; k++) {
//             if((i**2 + j**2) === k**2 ) {
//                 console.log(`${i} ${j} ${k}`)
//             }
//         }
//     }
// }
//2.56

// let inputCode = +prompt("Enter Code");
// switch(inputCode) {
//     case 1:
//         console.log(`code: ${inputCode} Position: Manager Salary: fixed weakly`);
//         break;
//     case 2:
//         console.log(`code: ${inputCode} Position: Hourly worker Salary: fixed hourly * 40 hours and if more 40 hours (1.5 * fixed hourly *(hours - 40))  `);
//         break;
//     case 3:
//         console.log(`code: ${inputCode} Position: Commission worker Salary: fixed 250$ and 5.7% of weakly sales`)
//     break;
//     case 4:
//         console.log(`code: ${inputCode} Position: Pieceworker  Salary : fixed income from product`);
//         break; 
//         default:
//             console.log(`Invalid code.`);

// }

//2.57
//a)
// if(!(( x < 5 ) || ( y >= 7 )) ) {
    
// }

//b)
// if(!((a == b) && (g != 5) )) {

// }

//c)
// if(!((x <= 8) || (y > 4)  )) {}
//d)
// if(!((i > 4) && (j <= 6) )) {}







//2.58
// let str ="";
//  for(let i = 1; i <= 9; i+=2) {
//      for(let x = 9; x > i; x-=2) {
//         str +=" ";
//     }
//     for(let j = 1; j <= i; j++) {
//         str +="*";
//         }
//         str +="\n";
                
//  }
// for(let j = 9 -2; j >= 1; j-=2) {
//     for(let f = 1; f < 9 - j; f+=2) {
//         str +=" ";
//         }
//     for(let x = j; x >= 1; x-- ) {
//         str +="*";
//         }
//         str += "\n";
// }
// console.log(str)
//2.59
// function isPrimeNumber(num) {
//     let isPrimeBool = true;
//     let halfNum = parseInt(num / 2);
//     for(let i = halfNum; i > 2; i --) {
//         if( num % i === 0) {
//            return false
            
//         } 
        
//     }
//     return isPrimeBool;
// }
// function createRombByRow(row) { 
//     if(isPrimeNumber(row) && (row >= 1 && row <= 19))
//     { 
//         let str ="";
//         for(let i = 1; i <= row; i+=2) {
//             for(let x = row; x > i; x-=2) {
//                 str +=" ";
//             }
//             for(let j = 1; j <= i; j++) {
//                 str +="*";
//             }
//             str +="\n";
            
//         }
//         for(let j = row -2; j >= 1; j-=2) {
//             for(let f = 1; f < row - j; f+=2) {
//                 str +=" ";
//             }
//             for(let x = j; x >= 1; x-- ) {
//                 str +="*";
//             }
//             str += "\n";
//         }
//         return str;
//     } else {
//         return "Invalid value";
//     }
// }

// console.log(createRombByRow(19))




//3.20 
// function multiple(arg1, arg2MultiipleForArg1) {
// if (arg2MultiipleForArg1 % arg1 === 0) {
//     return true;
// }
// return false;
// }
// console.log(multiple(5, 10))

//3.21
// function isEven(num) {
//     if(num % 2 === 0) {
//         return true;
//     }
//     return false;
// }
// let inputValue = +prompt("Enter number check if number is even");
// console.log(isEven(inputValue))



//3.22
// function drawSquare(side) {
//     for(let i = 0; i < side; i++) {
//         for(let j =0; j < side; j++) {
//             document.write("*")
//         }
//         document.write("<br>")
//     }
// }
// drawSquare(+prompt())

//3.25
//a)
// function divideAtoBIntegerType(a, b) {
//     return parseInt(a / b);
// }
// //b)
// function getRemainderAToBIntegerType(a, b) {
//     return parseInt(a % b);
// }
// //c)
// let str = "";
// let inputValue = +prompt("Enter Number from 1 to 32767");
// // if(inputValue > 32767  || inputValue < 1) {
// //      console.log("invalid number");
// //      return;
// // }
// while(inputValue) {
//     let num = getRemainderAToBIntegerType(inputValue, 10);
//     str += num;
//     str += "  ";
//     inputValue = divideAtoBIntegerType(inputValue, 10)


// }

// function reverse(s) {
//     let i = s.length,
//         o = '';
//     while (i > 0) {
//       o += s.substring(i - 1, i);
//       i--;
//     }
//     return o;
//   }
// str = reverse(str)
// console.log(str)

//3.26
// function timeReturnSecondsfromlast12clock(hours, minutes, seconds ) {
//     if(hours < 12) {
//         return hours * 3600 + minutes * 60 + seconds;
//     }
//     return (hours - 12) * 3600 + minutes * 60 + seconds;
// }

// console.log(timeReturnSecondsfromlast12clock(24, 0, 0 ) - timeReturnSecondsfromlast12clock(12, 0, 0 ))


//3.27
// function Celsius(tempreatureByFarenhait) {
//     return (tempreatureByFarenhait - 32) * 5/9;
// }
// //console.log(Celsius(32))

// function Fahrenheit(tempreatureByCelsius) {
//     return tempreatureByCelsius  * 9/5 + 32;
// }

// for(let i = 0; i <= 100; i++) {
//     let tempreature = Fahrenheit(i);
//     console.log(`${i} C   ${tempreature} F`);
// }
// for(let i = 32; i <= 212; i++) {
//     let tempreature = Celsius(i);
//     console.log(`${i} F   ${tempreature} C`);
// }

//3.30
// function isPrimeNumber(num) {
//     let isPrimeBool = true;
//     let halfNum = parseInt(num / 2);
//     for(let i = halfNum; i > 2; i --) {
//         if( num % i === 0) {
//            return false
            
//         } 
        
//     }
//     return isPrimeBool;
// }
// console.log(isPrimeNumber(8))
// for(let i= 1; i < 10000; i++) {
//     if(isPrimeNumber(i)) {
//         console.log(i)
//     }
// }

//3.31

// function reverseNumber(num) {
//     let digit, result = 0

//     while( num ){
//         digit = num % 10  
//         result = (result * 10) + digit 
//         num = parseInt(num / 10)  
        
//     }  
  
//    return(result)
// }
// console.log(reverseNumber(7631))


//3.32

// function gcd(arg1, arg2) {
//  while(arg1 !== arg2) {
//      if(arg1 > arg2) {
//          arg1 = arg1 - arg2;
//      }
//      if(arg2 > arg1) {
//          arg2 = arg2 - arg1;
//      }
//  }
//  return arg1;
// }
// console.log(gcd(36, 12))
//3.33
// function qualityPoints(num) {
//     if(num < 60) {
//         return 0;
//     }
//     if(num >= 60 && num <= 69) {
//         return 1;
//     }
//     if(num >= 70 && num <= 79) {
//         return 2;
//     }

//     if(num >= 80 && num <= 89) {
//         return 3;
//     }
//     if( num >= 90 && num <= 100) {
//         return 4;
//     }
    

// }
// console.log(qualityPoints(78))


//3.35
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   }
// function multiplyLesson() {
//     let firstNumber = getRandomInt(9, 1);
//     let secondNumber = getRandomInt(9, 1);
//     let correctAnswer = firstNumber * secondNumber;
//     let inputValue = +prompt(`${firstNumber} * ${secondNumber} = `)
//     if(correctAnswer === inputValue) {
//             return true;
//     } else {
       
//          return false;   
//     }
// }
// multiplyLesson()

//3.37 is connected with 3.35
// let counter = 0;
// let studentCorrectAnswer = 0;
// while(counter < 10) {
//     let isCorrect = multiplyLesson()
//     if(isCorrect) {
//         studentCorrectAnswer++;
//     }
//     counter++;
// }
// if(studentCorrectAnswer < 7.5) {
//     document.write("Please ask your teacher for help");
// } else {
//     document.write("You pass exams")
// }
//3.44
// function recursion(num) {
//     if(num === 0 || num  === 1) {
//         return 1;
//     }
//     console.log(num)
//     if(num !== 2) {
//     console.log("*")
//     } else {
//         console.log('=')
//     }
//     return num * recursion(num - 1);
// }
// console.log(recursion(5))