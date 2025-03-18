const jsonArr = {
    users: [
        {
           id: 1, 
           name: 'swetha', 
           age: 22,
           gender: "female",
           city: "salem",
           state: "Tamilnadu"
        },
        {
            id: 2, 
            name: 'dd', 
            age: 21,
            gender: "female",
            city: "tiruppur",
            state: "Tamilnadu"
        },
        {
            id: 3, 
            name: 'mowrish', 
            age: 10,
            gender: "Male",
            city: "bangalore",
            state: "Karnataka"
        },
    ]
};

// Corrected Filtering
const filteredData = jsonArr.users.filter(item => item.age === 22 && item.name === 'swetha');

console.log(filteredData); 

