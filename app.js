function showtimes(){
    let date = new Date();
    let houre = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let season = "AM";
    
    if (houre == 0){
        houre = 12;
    }
    if (houre > 12){
        houre = houre - 12;
        season = "PM";
    }

    houre = (houre < 10) ? "0" + houre : houre;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    let theTime = houre + ":" + minute + ":" + second + " " + season;
    document.querySelector("#time").innerHTML = theTime;
    
    
    
    
    setTimeout(showtimes, 1000);
}



showtimes();