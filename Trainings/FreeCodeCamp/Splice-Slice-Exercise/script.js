let arr = [1,2,3,4]

// Slice is just for take those values and do not touch the existing array
console.log(arr.slice(0,2))
console.log(arr)
// Be carefull using splice beacuse it changes the original array trims it
console.log(arr.splice(0,2))
console.log(arr)