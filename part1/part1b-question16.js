let statstics = {
    redCars: 21,
    blucCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (car in statstics){

    if(car.startsWith('r') || statstics[car]%2 == 1){
        console.log(statstics[car]);
    } 

}