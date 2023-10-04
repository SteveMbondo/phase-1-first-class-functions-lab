// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function () {
    return [drivers[0], drivers[1]]
}
const returnLastTwoDrivers = function () {
    return [drivers[2], drivers[3]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers()
}