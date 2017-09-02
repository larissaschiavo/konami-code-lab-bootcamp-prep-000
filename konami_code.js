const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
let idx = 0;

//add event listener to document.body and check for 'keydown'
const main = document.querySelector('document.body')




document.body.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);

  if (key === code[idx]) {
    idx++;
    if (idx === code.length) {
      alert("congrats!")
      idx = 0;
    }
  } else {
    idx = 0;
  }
})
}
//if user presses in order alert() a congrats message

//if user puts in one key out of order, keep listening until all keys in order have been pressed

// function init() {
//
// }
