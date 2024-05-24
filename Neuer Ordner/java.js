let vorname = document.getElementById("name").value; 
let nachname = document.getElementById("nachname").value;

document.cookie =  vorname + ("") + nachname;

let cookies = document.cookie;

console.log(cookies)