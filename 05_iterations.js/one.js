//for
// for(let index=0;index<=10;index++){
//     const element=index;
//     console.log(element);
// }
// for(let i=0;i<=10;i++){
//         const element=i;
//         if(element==5){
//             console.log("5 is best number");
//         }
//         console.log(element);
// }
// for(let i=1;i<=10;i++){
//     console.log(`outer loop value:${i}`);
//     for (let j = 1; j <=10 ; j++) {
//         // console.log(`inner loop value:${j} and outer loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }
// let myArray=[1,2,3,4,5,6,7];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const ele = myArray[index]
//     console.log(ele);
// }
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}