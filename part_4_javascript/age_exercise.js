function drinking_age(age) {
    if (age < 0) {
        console.log("Error: please input a non-negative age.")
    }
    else if (age === 21) {
        console.log("Happy 21st birthday!")
    }
    else if (age % 2 !== 0) {
        console.log("Your age is an odd number")
    }
    else if (Math.sqrt(age)%2 === 0) {
        console.log("perfect square!")
    }
}

drinking_age(-1)
drinking_age(21)
drinking_age(13)
drinking_age(16)
