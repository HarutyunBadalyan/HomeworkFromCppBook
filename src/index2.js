//4.10
// let totalSales ;
// const arrayOfEmployeesBySalaries = [];
// let count = 0;
// for(let i = 0; i <= 8; i++) {

//     arrayOfEmployeesBySalaries.push( count);

// }
// console.log(arrayOfEmployeesBySalaries);
// while (totalSales !== -1) {
//     totalSales = +prompt("Enter weakly sales or if you want to exit enter -1 ");
//     if(totalSales === -1) {
//         break;
//     }
//     let totalSalary = 200 + (totalSales * 0.09);
//     if(totalSales >= 1000) {
        
//         arrayOfEmployeesBySalaries[8]++;
//     }
//     if( totalSales >= 900 && totalSales < 1000) {
        
//         arrayOfEmployeesBySalaries[7]++;
//     }
//     if( totalSales >= 800 && totalSales < 900) {
        
//         arrayOfEmployeesBySalaries[6]++;
//     }
//     if( totalSales >= 700 && totalSales < 800) {
        
//         arrayOfEmployeesBySalaries[5]++;
//     }
//     if( totalSales >= 600 && totalSales < 700) {
        
//         arrayOfEmployeesBySalaries[4]++;
//     }
//     if( totalSales >= 500 && totalSales < 600) {
        
//         arrayOfEmployeesBySalaries[3]++;
//     }
//     if( totalSales >= 400 && totalSales < 500) {
        
//         arrayOfEmployeesBySalaries[2]++;
//     }
//     if( totalSales >= 300 && totalSales < 400) {
        
//         arrayOfEmployeesBySalaries[1]++;
//     }
//     if( totalSales >= 200 && totalSales < 300) {
        
//         arrayOfEmployeesBySalaries[0]++;
//     }
   
// }
// let salaryRange = 200;
// for(let i = 0; i < 9; i++) {
//     if(i === 8) {
//         arrayOfEmployeesBySalaries[i] = `$1000- or more ${arrayOfEmployeesBySalaries[i]}`;
//         break;
//     }
//     arrayOfEmployeesBySalaries[i] = `$${salaryRange}-$${salaryRange + 99}: employees: ${arrayOfEmployeesBySalaries[i]}`
// }
// document.write(arrayOfEmployeesBySalaries)


//4.11
//a)
 //let arr = [1000,3000,6,3,7,5];

// simple bubbel sort
//  let arraySize = arr.length - 1;
// console.log(arr)
// for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//         if(arr[j] < arr[i] ) {
//             let tmp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = tmp;
//         }
       
//     }
  
    
    
// }

//modified
// let max;
// let lastElement = arr.length - 1;

// for ( let i = 0; i < arr.length; i++ )
// {
//     max = 0;

//     for ( let j = 0; j <= lastElement; j++ ) {
//         if ( arr[ j ] > arr[ max ] )
//         {
//             max = j;
//         }
//      [arr[ max ], arr[ lastElement ]] = [arr[ lastElement ], arr[ max ]]
//      count++;
//     }
//     lastElement--;
// }
//console.log("sorted",arr)














//4.12
//a)
// let counts = [];
// for(let i = 0; i < 10; i++) {
//     counts.push(0);
// }
// console.log(counts);
//b)
// let bonus = [];
// for(let i = 0; i < 15; i++) {
//     bonus.push(0);
// }
// for(let i = 0; i < 15; i++) {
//     bonus[i]++;
// }
// console.log(bonus)
//d)
// let bestScores = [1,456,32423,5676567,666];
// console.table(bestScores);

//4.14


//4.15
// let arr = [];
// let counter = 0;

// while(counter < 20) {
//     let inputValue = +prompt("Enter number from 10 to 100");
//     if(inputValue >= 10 && inputValue <= 100) {
        
        
//         if(arr.indexOf(inputValue) === -1) {
//         alert(inputValue);
//         }
//         arr.push(inputValue);
            
//     }
//     counter++;
// }
// console.log(arr)
//4.17
// let str ="";
// function getRandomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
//   }
// let arr = [0,0,0,0,0,0,0,0,0,0,0];
// for(let i = 0; i < 36000; i++) {
//     let firstDie = getRandomNumber(1,7);
//     let secondDie = getRandomNumber(1,7);
//     let sum = firstDie+secondDie;
//     //console.log("Sum", sum);
//     switch(sum) {
//         case 2: {
//             arr[0]++;
//             break;
//         }
//         case 3: {
//             arr[1]++;
//             break;
//         }
//         case 4: {
//             arr[2]++;
//             break;
//         }
//         case 5: {
//             arr[3]++;
//             break;
//         }

//         case 6: {
//             arr[4]++;
//             break;
//         }
//         case 7: {
//             arr[5]++;
//             break;
//         }
//         case 8: {
//             arr[6]++;
//             break;
//         }
//         case 9: {
//             arr[7]++;
//             break;
//         }
//         case 10: {
//             arr[8]++;
//             break;
//         }
//         case 11: {
//             arr[9]++;
//             break;
//         }
//         case 12: {
//             arr[10]++;
//             break;
//         }
//     }
// }
// arr.forEach((item, index) => {
//     str+= `combination sum: ${index+2}\t\t count: ${item}\n`
// })
// console.log(str)








//4.19 a) b)
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
//   }
//   let games = 1000;
//   let wins = 0;
//   let loses = 0;
//   let round = 1;
//   while(games > 0) {
//       let oldWins = wins;
//       let oldloses = loses;
//     for(let i = 0; i < games; i++) {
//         let point = getRandomInt(2, 12);
//         console.log(point)
//         if(point === 11 || point === 7) {
//             wins++;
//             games--;
//         }
//         if(point === 2 || point === 3 ||point === 12 ) {
//             loses++;
//             games--;
//         }
//     } 
  
//     if(games <= 0 ) {
//         console.log("rounds",round,"wins",wins - oldWins,"loses", loses - oldloses)
//         break;
//     }
//     //if(oldWins < wins) {
//     console.log("rounds",round,"wins",wins - oldWins,"loses", loses - oldloses )
//     //}
//     round++;
// }
// console.log("all wins and loses in 1000 games",wins,loses)









//4.20
// let inputTypeOfchairs = 0;
// let locationOfchairs = [];
// for(let i = 0; i < 10; i++) {
//     locationOfchairs.push(0);
// }

// while(inputTypeOfchairs !== -1) {
//     inputTypeOfchairs = +prompt("Enter 1 if you want to sit for nonsmoker chair or Enter 2 for smoker chairs or if you want exit enter -1 ");
//     if(inputTypeOfchairs !== -1) {
//         if(locationOfchairs.indexOf(0) === -1) {
//             alert("all places are full next flight will be in 3 hours");
//             inputTypeOfchairs = -1;
//             break;
//         }
//         if(inputTypeOfchairs === 1) {
//             for(let i = 0; i < 5; i++) {
//                 if(locationOfchairs[i] === 0){
//                     let tmp = i;
//                     ++locationOfchairs[i];
//                     alert(`your place of chair is ${++tmp}`)
//                     break;
//                 }
//             }
//         }
//         if(inputTypeOfchairs === 2) {
//             for(let i = 5; i < 10; i++) {
//                 if(locationOfchairs[i] === 0){
//                     let tmp = i;
//                     ++locationOfchairs[i];
//                     alert(`your place of chair is ${++tmp}`)
//                     break;
//                 }
//                 if(locationOfchairs[9] === 1) {
//                    let askIfplacesAreFull = prompt("placec are full would you like to sit chair for nonsmokers: please answer yes or no ");
//                    if(askIfplacesAreFull === "no") {
//                        alert("next flight will be in 3 hours");
//                        break;
//                    } if(askIfplacesAreFull === "yes") {
//                         for(let j = 0; j < 5; j++) {
//                             if(locationOfchairs[j] === 0){
//                                 let tmp = j;
//                                 ++locationOfchairs[j];
//                                 alert(`your place of chair is ${++tmp}`)
//                                 break;
//                             }
//                         }
//                         break;
//                    }
//                 }
//             }
//         }
//     }
// }
// console.log(locationOfchairs)


//4.22
// let str = "";
// let sales = [
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0]
// ]
// let bigSum = 0;
// let inputNumberOfSeller ;
// while(inputNumberOfSeller !== -1) {
//     inputNumberOfSeller = +prompt("Enter number of seller 1 - 4 or for exit enter -1");
//     if(inputNumberOfSeller === -1) {
//         break;
//     }
//     inputNumberOfProduct = +prompt("Enter number of product 1 - 5");
//     inputDailySalesOfProduct = +prompt("Enter daily sales of product")
//     --inputNumberOfSeller;
//     --inputNumberOfProduct;

//     if(inputNumberOfSeller !== -1) {
//         sales[inputNumberOfSeller][inputNumberOfProduct] += inputDailySalesOfProduct;
//     }
// }
// sales.forEach( (item,index) => {
//     let sum = 0;
//     str += `sellers${++index}\t\t`;
//     //console.log(item)
//     item.forEach((item2, index2) => {
//         str += `productNO.:${++index2}\t productsales${item2}\t`;
//         sum += item2;
//     })
//     //console.log(sum);
//     str += `seller total sales${sum}`
//     str +="\n"
//     bigSum += sum;
// })
// console.log(str)
// console.log(`all sellers sales${bigSum}`);


//4.23
// let arr = [[]];
// const position = [0, 0];
// let isWriting = true;
// let firstMove = true;
// for (let i = 0; i < 20; i++) {
//     arr[i] = [];
//     for(let j = 0; j < 20; j++) {
//         arr[i].push(0)
//     }
// }
// console.log(arr)
// arr[0][0] = 1;
// let str = "";
// arr.forEach((item, index) => {
//     item.forEach((item2, index2) => {
//         if(item2 === 1) {
//             str +="*";
//         } else {
//            str += "^"
//         }
//     })
//     str += "<br>";
// })
//  document.body.innerHTML = str;
// document.addEventListener("keydown", (e) => {
//     let str1 = "";
//     if(e.key === " " ) {
//         isWriting = !isWriting;
//         console.log(isWriting)
//     }
    
//     console.log(position)
    
//         if(e.key === "d" && position[1] < 19) {
            
            
//             position[1]++;
//         }
//         if(e.key === "a" && position[1] > 0 ) {
            
//             position[1]--;
//         }
//         if(e.key === "s" &&  position[0] < 19) {
           
//             position[0]++;
            
//         }
//         if(e.key === "w" && position[0] > 0 ) {
            
//             position[0]--;
//         }
//         if( isWriting) {
//             arr[position[0]][position[1]] = 1;
//         }
    
   
    
    
    
//     if(isWriting) {
//         arr.forEach((item, index) => {
//             item.forEach((item2, index2) => {
//                 if(item2 === 1 && isWriting) {
//                     str1 +="*";
//                 } else {
//                 str1 += "^"
//                 }
//             })
//             str1 += "<br>";
//         })
//         document.body.innerHTML = "";
//         document.body.innerHTML = str1;
//     } else {
//         arr.forEach((item, index) => {
//             item.forEach((item2, index2) => {
//                 if(item2 === 1) {
//                     str +="*";
//                 } else {
//                 str += "^"
//                 }
//             })
//             str += "<br>";
//         })
//     }
// })

//4.26
// const chessBoard = [
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
// ];
// let sum = 0;
// queensPositionList = []; //first element represnet row second element represent column 
// let checkingarray = [[0,5],[1,3],[2,6],[3,0],[4,7],[5,1],[6,4], [7,2]];

// for(let w = 0; w < 8; w++) {
//     const queenPosition = checkingarray[w] 

//     if(chessBoard[queenPosition[0]][queenPosition[1]] === 1) {
//         continue;
//     }
      
//    queensPositionList.push(queenPosition)
    
//         for(let i = 0; i < chessBoard.length; i++) {
            
//             //console.log(queenPosition)
//             for(let j = 0; j < chessBoard[i].length; j++) {

//                 if(i === queenPosition[0]) {
//                     chessBoard[i][j] = 1;
                    
//                 }
//                 if(j === queenPosition[1]) {
//                     chessBoard[i][j] = 1;
                
//                 }
//                 if(i - queenPosition[0] === j - queenPosition[1] || Math.abs(i - queenPosition[0]) === Math.abs(j - queenPosition[1]) ) {
//                     chessBoard[i][j] = 1;
//                 }
            
//             }
//         }
//     }
    


// chessBoard.forEach(item => {
//     item.forEach(item2 => {
//         if(item2 === 1) {
//             process.stdout.write("*")
//         }
//         else {
//             process.stdout.write(" ")
//         }
//     })
//     process.stdout.write("\n");
// })
// chessBoard.forEach(item => {
//     item.forEach(item2 => {
//         sum+=item2;
//     })
// })
// console.log("sum",sum)
// console.log(queensPositionList,queensPositionList.length)
// console.table(chessBoard)
















//4.29


// let arr = [];
// let primeNumberArray = [];
// for(let i = 1; i < 1000; i++ ) {
//     arr.push(i);
// }
// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] === 0) {
//         continue;
//     }
//     for(let j = arr[i] - 1 ; j < arr.length; j+=arr[i]  ) {
      
//       if( arr[i] !== 0 &&  arr[j] !== 0 && arr[i] !== arr[j] && arr[j] % arr[i] == 0) {
//           arr[j] = 0;
//       }
        
//     }
// }
// for(let i = 1; i < arr.length; i++ ) {
//     if(arr[i] !== 0) {
//         primeNumberArray.push(arr[i])
//     }
// }
// console.log(primeNumberArray)


//4.30
//1)
// let arr = [23,45,55,32,54,56,456,553,10,3,24, 100]
// let bucketArray = [[],[],[],[],[],[],[],[],[],[]];
// for(let i = 0; i < bucketArray.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(arr[j] % 10 === i) {
//             bucketArray[i].push(arr[j])
//         }
//     }
// }
//2)
// arr = [];
// for(let i = 0; i < bucketArray.length; i++) {
//     for(let j = 0; j < bucketArray[i].length; j++) {
//         arr.push(bucketArray[i][j])
//     }
// }
// console.log("first phase",arr)
// not finished all

// bucketArray = [[],[],[],[],[],[],[],[],[],[]];
// for(let i = 0; i < bucketArray.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(i === 0 && arr[j] < 10) {
//             bucketArray[0].push(arr[j])
//         }
//         if(parseInt(arr[j]/10) % 10 === i && arr[j] >= 10) {
//             bucketArray[i].push(arr[j])
//         }
//     }
// }
// arr = []
// for(let i = 0; i < bucketArray.length; i++) {
//     for(let j = 0; j < bucketArray[i].length; j++) {
//         arr.push(bucketArray[i][j])
//     }
// }
// console.log("second phase",arr)








//4.31
// let array = [32,45,23423,657,4,0,-1]
// function findSmallestElementIndex(argArray) {
//     let minNumber = argArray[0];
//     let minIndex = 0;
   
//     for(let i = 0; i < argArray.length; i++) {
//         if(minNumber >argArray[i] ) {
//             minNumber = argArray[i];
//             minIndex = i;
//         }
//     }
//     return minIndex;
// }
// function selectionSort(arr) {
//     if(!arr.length ) {
//         return [];
//     }
//     let tempArray = [];
//     let tmp;
//     smallIndex = findSmallestElementIndex(arr);
//      tmp = arr[smallIndex];
//      arr[smallIndex] = arr[arr.length - 1];
//      arr[arr.length - 1] = tmp
//     tempArray[0]=arr[arr.length - 1];
//     return tempArray.concat(selectionSort(arr.slice(0, arr.length - 1)))
// }


// console.log(selectionSort(array))





//4.32

// function testPalindrome(inputString) {
    
//     if(inputString[0] !== inputString[inputString.length - 1]) {
//         return 0;
//     }
    
//     if(inputString.length < 2) {
//         return 1;
//     }
//     return testPalindrome(inputString.slice(1, inputString.length - 1))
// }

// console.log(testPalindrome("10"))


//4.33
// let arr = [6,4,3,2,23,64]
// function linearSearch(array, searchingValue, start, end) {
//     if(start > end) {
//         return -1;
//     }
//  if(array[start] === searchingValue) {
//      return start;
//  }
//  if(array[start] !== searchingValue) {
//      return linearSearch(array, searchingValue, start+1, end)
//  }
// }
// console.log(linearSearch(arr, 6, 0, arr.length - 1))


//4.34
// let arr = [1, 2, 5, 7, 9];
// function binarySearch(array,searchingValue, start, end) {
//     if(start > end) {
//         return -1;
//     }
//     console.log("Start",start)
//     let mid = Math.floor((start+end)/2);
//     if(array[mid] === searchingValue) {
//         return mid;
//     }
//     if(array[mid] > searchingValue) {
//       return   binarySearch(array, searchingValue, start, mid -1)
//     }
//     if(array[mid] < searchingValue) {
//        return binarySearch(array, searchingValue, mid + 1 , end)
//     }
// }
// console.log(binarySearch(arr,12, 0, arr.length-1))


//4.38
// let arr = [23,5,6,1,4,2]
// function recursiveMinimum(array, length) {
//     if(array.length === 1) {
//         return array[0];
//     }
//     if (length == 1) {
//     return array[0];
//     }
     
//     return Math.min(array[length - 1], recursiveMinimum(array, length - 1));
// }
// console.log(recursiveMinimum(arr, arr.length))

//4.36
// let arr = [23,4,45,65,7]
// function printArray(array) {
//     if(array.length === 0 ){
//         return console.log(array)
//     }
//     console.log(array[0]);
//     printArray(array.slice(1,arr.length));

// }
// printArray(arr )
//4.37
// let arr = ["d","r","a","m"];
// let str ="";
// function reverseString(array, ) {
//     if(array.length === 0) {
       
//         return arr;
//     }
//     console.log(array[array.length - 1])
//     str += array[array.length - 1];
//     reverseString(array.slice(0, array.length - 1))
// }
// reverseString(arr)
// console.log(str)