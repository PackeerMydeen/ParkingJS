let vehicle = [];
let maxSize = 0;
let availableSlot = [];

const createParkingLot = (noOfLot) => {
    try {
      maxSize = Number(noOfLot);
    } catch (e) {
      return "noOfLot is not a number!";
    }
    availableSlot=  Array(maxSize).fill().map((v,i)=>i);
    return `Created a parking lot with ${availableSlot.length} slots`;
  }

  const park =  (registratonNo, color) => {
    if (maxSize === 0) {
      return `parking lot is not created`;
    } else if (maxSize === vehicle.length) {
      return `Sorry, parking lot is full`;
    } else {
      const slot = availableSlot[0];
      vehicle.push({
        'slot': slot,
        'registratonNo': registratonNo,
        'color': color
      });
      availableSlot.shift();
      return `Allocated slot number: ${slot}`
    }
  }
  
  const leaveParking = (slot) => {
    slot = parseInt(slot);
    if (maxSize === 0) {
        return `parking lot is not created`;
    } else if (vehicle.length > 0) {
  
      if (search(slot)) {
        vehicle =remove(slot);
        availableSlot.push(slot);
        availableSlot.sort();
        return `Slot number ${slot} is free`;
  
      } else {
        return ` Slot ${slot} is already empty `;
      }       
    } else {
      return `Parking lot is empty`
    }
  }

  const getRegistrationNumbersFromColor =  (color) => {

    if (maxSize === 0) {
      return `parking lot is not created`;
    } else if (vehicle.length > 0) {
      let resultSet = []
      vehicle.forEach(function (row) {
        if (row.color === color) {
          resultSet.push(row.registratonNo);
        }
      });

      let finalResponse = '';
      if (resultSet === undefined) return `Not found`;
      for (let i = 0; i < resultSet.length; i++) {
        if (!(i == resultSet.length - 1)) {
          finalResponse += resultSet[i] + ","
        } else {
          finalResponse += resultSet[i];
        }
      }
      return finalResponse;
  
    } else {
      return `Not found`
    }
  
  }


let getSlotNumberFromRegNo =  (registratonNo) => {
    if (maxSize === 0) {
      return `parking lot is not created`;
    } else if (vehicle.length > 0) {
      let resultSet;
      vehicle.forEach(function (row) {
        if (row.registratonNo === registratonNo) {
          resultSet = row.slot;
        }
      });
      if (resultSet === undefined) return `Not found`
      return resultSet;
    } else {
      return `Not found`
    }
  }

  const getSlotNumbersFromColor = (color) => {
    if (maxSize === 0) {
      return "parking lot is not initiated";
    } else if (vehicle.length > 0) {
      let resultSet = [];
      
      vehicle.forEach(function (row) {
        if (row.color === color) {
          resultSet.push(row.slot);
        }
      });
  
      let finalResponse = '';
      if (resultSet === undefined) return `Not found`;
  
      for (let i = 0; i < resultSet.length; i++) {
        if (!(i == resultSet.length - 1)) {
          finalResponse += resultSet[i] + ","
        } else {
          finalResponse += resultSet[i];
        }
      }
      return finalResponse;
  
    } else {
      return `Not found`
    }
  }
  
  const getAvailableSlots=()=>{
      if(availableSlot.length===0){
          return `No slots available`
      }else{
          return availableSlot.sort()
      }
  }

  const search = (slot) => {
    for (var i = 0; i < vehicle.length; i++) {
      if (vehicle[i]['slot'] === slot) {
        return vehicle[i];
      }
    }
    return false;
  }
  
  const remove = (slot) => {
    var i = vehicle.length;
    while (i--) {
      if (vehicle[i]
        && vehicle[i].hasOwnProperty('slot')
        && (arguments.length > 2 && vehicle[i]['slot'] === slot)) {
        vehicle.splice(i, 1);
      }
    }
    return vehicle;
  }

  
  module.exports = {
    createParkingLot,
    park,
    leaveParking,
    getRegistrationNumbersFromColor,
    getSlotNumberFromRegNo,
    getSlotNumbersFromColor,
    getAvailableSlots
  }