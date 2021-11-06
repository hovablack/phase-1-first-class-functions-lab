// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
}

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int1) {
  return function(int2) {
    return (int2 * int1);
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, selectingDrivers) {
  return selectingDrivers(arr)
}

