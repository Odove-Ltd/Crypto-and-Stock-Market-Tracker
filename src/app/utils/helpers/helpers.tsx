export const formatTime = (epochTime: number)=>{
    let date = new Date(epochTime * 1000);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let timeString = hours + ':' + minutes;
    return(
        timeString
    )
};

