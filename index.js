// Your code here
// document.addEventListener("keydown", function (event){
//     if(event.key === "ArrowLeft") {
//         const leftnumbers = dodger.style.left.replace("px", "");
//         const left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left - 1}`;
//     }
// })


function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var left = parseInt(dodger.style.left) || 0;
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var left = parseInt(dodger.style.left) || 0;
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  