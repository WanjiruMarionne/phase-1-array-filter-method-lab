// Code your solution here
const driversNames = ['aria','bella','colin','alfa'];

const driverObjects = [
    {
        name:'aria',
        hometown: 'delta1',
    },
    {
        name:'bella',
        hometown: 'delta2',
    },
    {
        name: 'colin',
        hometown: 'delta3',
    },
    {
        name: 'alfa',
        hometown: 'delta4',
    },
];

function findMatching(drivers,searchQuery) {
    return drivers.filter(driver=>driver.toLowerCase()===searchQuery.toLowerCase());
}

function fuzzyMatch(drivers,searchQuery) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchQuery.toLowerCase()));
}

function matchName(drivers,searchQuery) {
    return drivers.filter(driver => driver.name.toLowerCase() === searchQuery.toLowerCase());
}

console.log(findMatching(driversNames, "aria")); 
console.log(fuzzyMatch(driversNames, "a")); 
console.log(matchName(driverObjects, "alfa")); 