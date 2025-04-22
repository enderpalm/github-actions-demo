const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getMonth()];
}

const monthOfTheYear = (date = new Date()) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
} 

try {
    document.getElementById('day').innerHTML = dayOfTheWeek();
    document.getElementById('month').innerHTML = monthOfTheYear();
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;
exports.monthOfTheYear = monthOfTheYear;