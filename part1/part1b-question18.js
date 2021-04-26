function doDate(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}


setInterval(doDate, 1000);