var str4 = "四是四，十是十，十四是十四，四十是四十";
var position = 0;
var num = -1;
var index = 0;
while(position!=-1){
    position = str4.indexOf("四",index);
    num += 1;
    index = position + 1;
}
document.write(str4);
document.write(num); 

var arr5 = new Array(1,2,3,4,5,6,7,8);
document.write(arr5.concat(9,10));

var arr6 = new Array('a','b','c');
var arr7 = new Array('d','e','f');
document.write(arr6.concat(arr7));

var arr8 = new Array('いたろめん',1998);
var arr9 = new Array('年','生まれました');
document.write(arr8.concat(arr9));

var newDate = new Date();
document.write(newDate);
var time = new Date();
document.write(time);

var date = new Date(2015,5,20);
document.write(date);

document.write('<br>');
var date1 = new Date(2015,5,20,13,12,56);
document.write(date1);
document.write('<br>');





