var userList = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];


function avg(userlist) {
    var sum = 0;
    for (var i = 0; i < userList.length; i++) {
        sum = sum + userlist[i];
    }


    return sum / userlist.length;

}

function variance(userList) {
    var avg1 = avg(userList);
    var squarelist = [];
    for (var i = 0; i < userList.length; i++) {
        squarelist.push((userList[i] - avg1) ** 2)
    }
    return avg(squarelist);

}

function std(userList) {

    return Math.sqrt(variance(userList));
}

console.log(avg(userList));
console.log(variance(userList));
console.log(std(userlist));