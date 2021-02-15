function outherFunc(outherValue) {
    return function innerFunction(innerVariable) {
        console.log('Outher: ' + outherValue)
        console.log('Inner Variable: ' + innerVariable)
        return 1;
    }
    
}

const newFunction = outherFunc('outside')('yes')
console.log(typeof(newFunction))
// newFunction('inside')
// Version 2
function outherFunc2(outherValue2) {
    return function innerFunction2(innerVariable2) {
        console.log('Outher: ' + outherValue2)
        console.log('Inner Variable: ' + innerVariable2)
    }
    
}
const newFunction2 = outherFunc2('outside')
console.log(typeof(newFunction2))
newFunction2('inside')
console.log(typeof(newFunction2))

