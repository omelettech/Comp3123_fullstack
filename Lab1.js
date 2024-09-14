//Exercise 1

let given_string = "the quick brown fox"

const capitalize_first_letters = (string) => {
    string = string.trim()
    let new_str = string[0].toUpperCase();
    for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === " ") {
            new_str += string[i].toUpperCase()
        } else {
            new_str += string[i]
        }
    }
    return new_str
}

console.log(capitalize_first_letters(given_string))

//Exercise 2

const find_max = (arr) => {
    let highest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i]
        }

    }
    return highest
}
console.log(find_max([1, 2, 3, 4, 5, 6, 10, 20, 1, 2, 3, 4]))

const right = (string) => {
    if (string.length < 3) {
        return string
    }
    return string.substring(string.length, string.length - 3) + string.substring(0, string.length - 3)
}

console.log(right("JavaScript"))

const angle_type = (angle) => {
    if (angle > 180 || angle <= 0) {
        return "Must be between 0 to 180"
    }
    if (angle === 90) {
        return "Right angle"
    }
    if (angle < 90) {
        return "Acute angle"
    }
    if (angle === 180) {
        return "Straight angle"
    }
    return "Obstuse angle"
}
console.log(angle_type(60),
    angle_type(120),
    angle_type(90),
    angle_type(180))

const array_max_sum = (arr, k) => {
    let highest_sum = 0
    let sum_buff = 0
    for (let index = 0; index <= arr.length - k; index++) {
        for (let num = index; num < index + k; num++) {
            sum_buff += arr[num]
        }
        if (sum_buff > highest_sum) {
            highest_sum = sum_buff

        }
        sum_buff = 0
    }
    return highest_sum
}
console.log(array_max_sum([1,2,3,14,5,6],2))
