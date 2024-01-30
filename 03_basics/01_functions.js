function sayMyName(){
    console.log('N');
    console.log('E');
    console.log('E');
    console.log('L');
    console.log('A');
    console.log('M');
}
//sayMyName()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);......method-1
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,'4')
// addTwoNumbers(3,'a')
// addTwoNumbers(3,null)

function addTwoNumbers(num1,num2){
    // let result=num1+num2;
    // return result;..........method-2
    //console.log('neelam'); it will not execute after return function no code will be executed


    //return num1+num2...method-3
}
// const result=addTwoNumbers(3,5)
// console.log("Result:" ,result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Neelam"));


function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));