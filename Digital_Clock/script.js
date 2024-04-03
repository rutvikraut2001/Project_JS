const clock = document.getElementById('clock');
const date = document.getElementById('date');


setInterval(function () {
  let d = new Date();
  // console.log(date.toLocaleTimeString());
//   console.log(date.toLocaleTimeString());
  clock.innerHTML = d.toLocaleTimeString();
  date.innerHTML = d.toLocaleDateString();
}, 1000);

// let d  = new Date();
// console.log(d.toLocaleDateString())