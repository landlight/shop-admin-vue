export default {
    formatMMDDYYYY (myDate) {   
        let date = new Date(myDate);
        return (date.getMonth() + 1) + 
        "/" +  date.getDate() +
        "/" +  date.getFullYear() +
        " " + date.getHours() + 
        ":" + date.getMinutes();
    }
}