// MIND GRENADE

// Module that you load, using require statements, from modules.js
// May not export anything, but it should contain a function that logs something to the console
// You should then call that function within the mainline of mind-grenade.js
// This is to demonstrate that when a module is loaded with a require statement, anything in the mainline code of the loaded module runs.
// The exported values from should be used in modules.js

//Tutorial

const inforooTOCampers = 4;
const sooperGroopCampers = 20;
const familyCampers = 3;
const accessCampers = 3;
const vipCampers = 2;
const rvCampers = 14;
const gaCampers = 0;

function addValues() {
    console.log(`I will have ${ inforooTOCampers + sooperGroopCampers + familyCampers + accessCampers + vipCampers + rvCampers + gaCampers } friends at Bonnaroo this year!`);
}

addValues();