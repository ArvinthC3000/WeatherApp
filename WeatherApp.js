const array = [
    {city:'Bangalore',
    state:'Karnataka',
    degree :26,
    weather:'Partly Cloudy ☁️',
    image:'images/cloudy.svg'},
    {city:'Chennai',
    state:'TamilNadu',
    degree :34,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Coimbatore',
    state:'TamilNadu',
    degree :26,
    weather:'Partly Cloudy ☁️',
    image:'images/cloudy.svg'},
    {city:'Noida',
    state:'Delhi',
    degree :23,
    weather:'Thunder 🌩️',
    image:'images/thunder.svg'},
    {city:'Patna',
    state:'Bihar',
    degree :30,
    weather:'Humidity',
    image:'image/humid.svg'},
    {city:'Gurugram',
    state:'Haryana',
    degree :34,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Mumbai',
    state:'Maharashtra',
    degree :20,
    weather:'Rainy 🌧️',
    image:'images/rainy.svg'},
    {city:'Amaravati',
    state:'Andra Pradesh',
    degree :23,
    weather:'Humidity',
    image:'image/humid.svg'},
    {city:'Jaipur',
    state:'Rajasthan',
    degree :32,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Panaji',
    state:'Goa',
    degree :22,
    weather:'Rainy 🌧️',
    image:'images/rainy.svg'},
    {city:'Mysore',
    state:'Karnataka',
    degree :24,
    weather:'Partly Cloudy ☁️',
    image:'images/cloudy.svg'},
    {city:'Madurai',
    state:'TamilNadu',
    degree :35,
    weather:'Sunny ☀️',
    image:'images/sunny.svg'},
    {city:'Alleppey',
    state:'Kerala',
    degree :20,
    weather:'Rainy 🌧️',
    image:'images/rainy.svg'}   
];

// let input = document.getElementById("in");
// input.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("button1").click();
//   }
// });
// function myPointer(){
//     document.getElementById("myCursor").style.cursor = pointer
// }

function date(){
    console.log('here')
let date1= new Date();
    let dayInNum = date1.getDay();
    let dayArray =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayInStr = dayArray[dayInNum];
    let h = date1.getHours();
    
    let meridiem = 'am'
    if(h >= 13)
        {
            h -= 12;
            meridiem = 'pm';
        }
    let m = date1.getMinutes();
    let s = date1.getSeconds();
    m = digit(m);
    s = digit(s);
    function digit(i){

    if (i < 10) {i = "0" + i };
    return i;
    }    

    // console.log(dayInStr +" "+h+":"+m+" "+meridiem)
    document.getElementsByClassName('date1')[0].innerHTML = dayInStr +" "+h+":"+m+":"+s+" "+meridiem;

    var t = setTimeout(date , 1000);
}


let arr = array;
function process(value){
    // console.log(value);
    // document.getElementsByClassName("celsius").style.color = "#1890f0";
    // document.getElementsByClassName("fahrenheit").style.color = "#000000";
    arr = array.filter((i)=> {
        array[i]
        return i.city===value;})
    
        //console.log(arr);
        document.getElementsByClassName("city")[0].innerHTML = "<b>"+arr[0].city +", "+ arr[0].state+"</b>";
        document.getElementsByClassName("degree")[0].innerHTML = "<b>"+arr[0].degree+"</b>";
        document.getElementsByClassName("weather")[0].innerHTML = arr[0].weather;

}
arr = process();
alert(arr);

function inFahrenheit(){
    // console.log(arr);
    // console.log(array[0].degree);
    const celsius = arr[0].degree||array[0].degree;
    document.getElementsByClassName("celsius")[0].style.color = "#000000";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#1890f0";
    
    const fahrenheit= Math.floor(celsius*1.8+32)
    console.log(fahrenheit); 
    document.getElementsByClassName("degree")[0].innerHTML = "<b>"+fahrenheit+"</b>";
    
}
function inCelsius(){
    document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
    document.getElementsByClassName("fahrenheit")[0].style.color = "#000000";
    document.getElementsByClassName("degree")[0].innerHTML = "<b>"+arr[0].degree+"</b>";
    // console.log(arr[0].degree);
}