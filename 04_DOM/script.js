// var box = document.querySelector("#box");
// var btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;


// })

// var arr = ['aman','raj','rahul','shri','harsh','masum','om']
// // console.log(arr.length-1);
// var a = Math.floor(Math.random()*arr.length);
// console.log(arr[a]);

var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        teamCaptain: 'MS Dhoni',
        fullName: 'Chennai Super Kings',
        trophies: '5'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        teamCaptain: 'Hardik Pandya',
        fullName: 'Mumbai Indians',
        trophies: '5'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        teamCaptain: 'Shreyas Iyer',
        fullName: 'Kolkata Knight Riders',
        trophies: '2'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        teamCaptain: 'FAf du plessis',
        fullName: 'Royal Challengers Bengaluru',
        trophies: '0'
    },
    {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        teamCaptain: 'Rishabh Pant',
        fullName: 'Delhi Capitals',
        trophies: '0'
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'blue',
        teamCaptain: 'Sanju Samson',
        fullName: 'Rajasthan Royals',
        trophies: '1'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        teamCaptain: 'Pat Cummins',
        fullName: 'Sunrisers Hyderabad',
        trophies: '1'
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'silver',
        teamCaptain: 'Shikhar Dhawan',
        fullName: 'Punjab Kings',
        trophies: '0'
    },
    {
        team: 'GT',
        primary: 'Dark blue ',
        secondary: 'gold',
        teamCaptain: 'Shubham Gill',
        fullName: 'Gujarat Titans ',
        trophies: '1'
    },
    {
        team: 'LSG',
        primary: 'green',
        secondary: 'orange',
        teamCaptain: 'KL Rahul',
        fullName: 'Lucknow Super Giants',
        trophies: '0'
    },

]

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var main = document.querySelector('main');

btn.addEventListener("click",function(){

    var winner =  arr[(Math.floor(Math.random()*arr.length))];
    
    h1.innerHTML = `
  <span>Team: ${winner.team}</span>
  <span>Captain: ${winner.teamCaptain}</span>
  <span>Full Name: ${winner.fullName}</span>
  <span>Trophies: ${winner.trophies}</span>
`;

    h1.style.backgroundColor = winner.secondary;
    main.style.backgroundColor = winner.primary;
})


