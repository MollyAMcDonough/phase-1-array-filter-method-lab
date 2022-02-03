// Code your solution here
function findMatching(driversNames,name) {
    const nameUpper = name.toUpperCase();
    return driversNames.filter(driver => driver.toUpperCase() === nameUpper);
}

function fuzzyMatch(names,letters) {
    return names.filter(name=>name.slice(0,letters.length)===letters);
}

function matchName(drivers,string) {
    return drivers.filter(driver=>driver.name===string);
}