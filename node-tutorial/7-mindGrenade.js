// if there is function and function call is used, can use require without export and it would perfom function call
// when you import module, you invoke it

const num1 = 5
const num2 = 10

const addValues = () => {
    console.log(`the sum is: ${num1 + num2}`)
}

addValues()