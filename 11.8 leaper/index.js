var year = prompt("what is the year and ill tell you if it leaper!");

function check(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                alert(year + " is leaper");
            } else {
                alert(year + " is not leaper");
            }
        } else {
            alert(year + " is not leaper");
        }
    } else {
        alert(year + " is not leaper");
    }
}