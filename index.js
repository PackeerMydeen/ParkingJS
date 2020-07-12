
const readline = require('readline');
const parking = require('./parking')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const init = () => {
    console.log('Enter your action')
    rl.on('line', async (input) => {
        input = input.split(" ");
        let action = input[0]
        switch (action) {
            case ('create_parking_lot'):
                {
                    const result = parking.createParkingLot(input[1]);
                    console.log(result)
                    break;
                }
            case ('park'):
                {
                    const result = parking.park(input[1].trim(), input[2].trim());
                    console.log(result);
                    break;
                }
            case ('leaveParking'):
                {
                    const result = parking.leaveParking(input[1]);
                    console.log(result);
                    break;
                }
            case ('regNums_of_cars_from_color'):
                {
                    const result = parking.getRegistrationNumbersFromColor(input[1].trim());
                    console.log(result);
                    break;
                }
            case ('slot_number_from_regNum'):
                {
                    const result = parking.getSlotNumberFromRegNo(input[1].trim());
                    console.log(result);
                    break;
                }
            case ('slot_numbers_of_cars_from_color'):
                {
                    const result = parking.getSlotNumbersFromColor(input[1].trim());
                    console.log(result);
                    break;
                }
            case ('get_available_slots'): {
                const result = parking.getAvailableSlots();
                console.log(result);
                break;
            }
            case ('exit'):
                rl.pause();
                break;
        }

    })
}

init()