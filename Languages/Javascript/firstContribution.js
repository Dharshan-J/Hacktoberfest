console.log("Hi Kunal this is my first open source contibution hope this will kick start my career")

// Remove duplicates

let first_arr = [1, 3, 4, 5, 6]
let second_arr = [3, 5, 7, 9]

console.log(...new Set([...first_arr, ...second_arr]))


// filter method

let filtered_arr = first_arr.filter(arr => second_arr.includes(arr))

console.log(filtered_arr)

// map method

let data = [
    {
        name: "Dharshan J",
        age: 21,
    },
    {
        name: "Kunal",
        age: 22,
    },
    {
        name: "Charan",
        age: 21,
    }

]
let mapedData = data.map(item => item.name)
console.log(mapedData)
