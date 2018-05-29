function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();

    return day%6==0? "Weekend":"weekday";
}