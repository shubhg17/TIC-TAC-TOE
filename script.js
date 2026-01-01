//selected all the buttons with DOM 
let boxes = document.querySelectorAll(".box");
//selected resetbutton for restarting the game 
let resetButton = document.querySelector("#resetbutton");
let newBtn = document.querySelector(".new-btn")
let messageContainer = document.querySelector(".message-container")
let msg = document.querySelector("#msg")


//in this game we need 2 players player0 and playerX if at one one player is playing then second cant play alternate they will play in tic tac toe here when turn0 is true then playerX is false and vica versa 
let turn0 = true;//player0 , playerX


//store all the winning patterns in a 2d array i.e array of array not in string of string array of array is better

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];


//looping all over the buttons 
boxes.forEach((box) => {
   box.addEventListener("click" , ()=> {
      // console.log("box was clicked")
      if(turn0) { // player0
         box.innerHTML = "0"
         turn0 = false;
      }
      else {  // playerX
        box.innerText = "X"
        turn0 = true;
      }
      //ki ek bari hi click kr paye har person ek box me isko likhne se double click nhi kr payenge box me bas ek bari toh 0 se X change nhi hoga dubara click hone pe 
      box.disabled = true;

      //jese hi button click ho rha ha hum check krenge ki winner kon ha uske liye ek function likhdiya call krke 
      checkWinner();
   })
})

//with this function u are basically disabling all the boxes/buttons as when we get a winner we dont need another win and we need to stop the game otherwise multiple winners will come 
const disabledBoxes = () => {
   for(let box of boxes) {
      box.disabled = true;
   }
}

//this function will enableboxes when a new game begins 
const enableBoxes = () => {
   for(let box of boxes) {
     box.disabled = false;
     box.innerText = ""
   }
}

const showWinner = (winner) => {
  //iss se winner print hojayega web page pe 
   msg.innerHTML = `Congratulations , Winner is ${winner}`
   //messagecontainer ki class list se hum remove krdenge apni class hide 
   //iss se message container visible ho jayega 
   messageContainer.classList.remove("hide") // as hume yaha voh container show krna ha as hume winner mil gya ha isliye remove krna padega hide wali class ko joh humne di ha div me messageContainer ke sath main
   disabledBoxes();
}

//winner ko check krne ke liye har ek winning pattern ko check krna padega 
const checkWinner = () => {
   for(let pattern of winPatterns) {
    //iss se har ek pattern tum print krva rhe ho winPatterns wali array me se
      //  console.log(pattern)
      //isme hum har ek individual pattern array me se individual index nikal rhe ha basically pattern ke indexes agye  
      // console.log(pattern[0] , pattern[1] , pattern[2])

      //boxes wale array me iss index pe jao to access each box which is button element 
      // console.log(boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]])

      //inke andar ki value print krne ke liye innerText ki uss box pe kya value ha 0 ya X ya khali voh print krne ke liye innerText ka use krliye isme 
      // console.log(
         
      //   boxes[pattern[0]].innerText,  // position one pe kya ha 0 ha ya X ha 
      //   boxes[pattern[1]].innerText,  // position two pe kya ha 0 ha ya X ha
      //   boxes[pattern[2]].innerText   // position three pe kya ha 0 ha ya X ha 
      // )

      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      //condition for winner pos1val pos2val pos3val must be equal and they all should be non empty
      if(pos1val !="" && pos2val !="" && pos3val !="") {
         if(pos1val === pos2val && pos2val === pos3val) {
            //  console.log("Winner is" , pos1val)
             //agar hume winner print karavna ha page pe toh hum function idhar banayenge as idhar winner ki condition satisfy ho rhi ha aur hume winner mil rha ha
             showWinner(pos1val);
         }
      }
   }
}

// resetButton.addEventListener("click" , ()=> {
//     turn0 = true;
//     enableBoxes();
//     //message container ko hide krna padega jabh game reset hoga 
//     messageContainer.classList.add("hide")
// })


//this function is made for restarting game
const resetButtonn = ()=> {
    turn0 = true;
    enableBoxes();
    messageContainer.classList.add("hide")
}



// newBtn.addEventListener("click" , ()=> {
//     // msg.innerHTML="" // iss ko hum joh div container ho hide kr rhe ha uss se bhi message hide krskte ha 
//     //u can loop here or directly write inside enableBoxes to change innerText of all same baat hain
//     // for(let box of boxes) {
//     //    box.innerText = ""
//     // }
//     enableBoxes()
// })

//here in this we passed the function we made above not written like arrow function 
newBtn.addEventListener("click" , resetButtonn);
resetButton.addEventListener("click" , resetButtonn)


