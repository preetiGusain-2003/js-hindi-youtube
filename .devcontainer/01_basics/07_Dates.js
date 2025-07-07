//date
let myDate = new Date();
//If called as a function (without new), returns the current date and time as a string.If called with new (i.e., new Date()), creates a new Date object representing the current date and time.
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(myDate.toTimeString());
//Mon Jul 07 2025 17:31:06 GMT+0000 (Coordinated Universal Time)
//7/7/2025, 5:31:06 PM
//2025-07-07T17:31:06.228Z
//17:31:06 GMT+0000 (Coordinated Universal Time)
//when you create a date object, it is set to the current date and time
let myCreatedDate = new Date(2025,7,18);
//console.log(myCreatedDate.toDateString())
//when you want specific date, you can use the Date constructor with year, month, and day like dd/yy/mm
//let myCreatedDate2=new Date("2025-06-07");
//console.log(myCreatedDate2.toLocaleString());
let myTimeStamp = Date.now();//Returns the current timestamp (number of milliseconds since January 1, 1970, UTC).
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//Returns the timestamp of the date object (number of milliseconds since January 1, 1970, UTC).
console.log(Date.now() /1000);//when we want time in seconds but it gives output but in decimal 
console.log(Math.floor(Date.now() / 1000));//when we want time in seconds but it gives output but in integer.