// timers
const poTimer = 25;
const sbTimer = 5;
const lbTimer = 15;
// buttons header
let pomohamo = document.getElementById("btn1");
let shortBreak = document.getElementById("btn2");
let longBreak = document.getElementById("btn3");
// timer
let timer = document.getElementById("timer");
let start = document.getElementById("btnStart");
let stop = document.getElementById("btnStop");
// Get Elements
let section = document.querySelector("section");
let body = document.querySelector("body");
let quote = document.querySelector(".quote");
let alarm = document.querySelector("audio#audio2");
let roundEl = document.querySelector(".round");
let pomos = document.querySelector(".pomos");
// round
let round = 0;
let pomosTime = 0;
// check if item exists in localStorage
if (localStorage.getItem("data")) {
  var data = localStorage.getItem("data");
  data = JSON.parse(data);

  round = data.round;
  pomosTime = data.pomosTime;

  roundEl.innerHTML = round;
  pomos.innerHTML = pomosTime;
} else {
  var data = {
    "round": round,
    "pomosTime": pomosTime
  };

  localStorage.setItem("data", JSON.stringify(data));
}
// quotes

let array = [
  "“You become what you study.”",
  "“Infinitely And Beyond.”",
  "“study well become great.”",
  "“Do one pomohamo today better than nothing.”",
  `Don't stop</br>Don't give up.`,
  "“You don’t have to be great to start, but you have to start to be great.”",
  "“Push yourself, because no one else is going to do it for you.”",
  "“Life has two rules:</br>1) Never quit.</br>2) Always remember Rule #1”",
  "“Start where you are. Use what you have. Do what you can.”"
];
let i = Math.floor(Math.random() * array.length);
quote.innerHTML = array[i];

// functions

function update_data(type, value) {

  var data = localStorage.getItem("data");
  data = JSON.parse(data);

  if (type == "round") {
    data.round = value;
    localStorage.setItem("data", JSON.stringify(data));
  } else if (type == "pomosTime") {
    data.pomosTime = value;
    localStorage.setItem("data", JSON.stringify(data));
  }
}

pomohamo.onclick = function() {

  if (pomohamo.classList.contains("active")) {
  } else {
    body.style.backgroundColor = "var(--pomohamo)";
    pomohamo.classList.add("active");
    shortBreak.classList.remove("active");
    longBreak.classList.remove("active");
    start.style.color = "var(--pomohamo)";
    stop.style.color = "var(--pomohamo)";
    section.style.backgroundColor = "var(--po)";
    clearInterval(interval);
    setTimeout(function() {
      start.style.display = "block";
    }, 500);
    setTimeout(function() {
      stop.style.display = "none";
    }, 501);
    quote.innerHTML = array[i];
    timer.innerHTML = "25:00";
  }

}

shortBreak.onclick = function() {

  if (shortBreak.classList.contains("active")) {
  } else {
    body.style.backgroundColor = "var(--short-break)";
    pomohamo.classList.remove("active");
    shortBreak.classList.add("active");
    longBreak.classList.remove("active");
    start.style.color = "var(--short-break)";
    stop.style.color = "var(--short-break)";
    section.style.backgroundColor = "var(--sb)";
    clearInterval(interval);
    setTimeout(function() {
      start.style.display = "block";
    }, 500);
    setTimeout(function() {
      stop.style.display = "none";
    }, 501);
    timer.innerHTML = "05:00";
    quote.innerHTML = "“The best therapy is taking a break from routine.”";
  }

}

longBreak.onclick = function() {

  if (longBreak.classList.contains("active")) {
  } else {
    body.style.backgroundColor = "var(--long-break)";
    pomohamo.classList.remove("active");
    shortBreak.classList.remove("active");
    longBreak.classList.add("active");
    start.style.color = "var(--long-break)";
    stop.style.color = "var(--long-break)";
    section.style.backgroundColor = "var(--lb)";
    clearInterval(interval);
    setTimeout(function() {
      start.style.display = "block";
    }, 500);
    setTimeout(function() {
      stop.style.display = "none";
    }, 501);
    timer.innerHTML = "15:00";
    quote.innerHTML = "“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”"
  }

}

var interval;

start.onclick = function startTimer() {
  
  setTimeout(function() {
    start.style.display = "none";
  }, 500);
  setTimeout(function() {
    stop.style.display = "block";
  }, 501);
  
  let audio = document.querySelector("audio");
  audio.play();
  
  if (pomohamo.classList.contains("active")) {
    let time = poTimer * 60;
    
    interval = setInterval(function() {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      
      timer.innerHTML = `${minutes}:${seconds}`;
      
      if (time > 0) {
        time -= 1;
      } else {
          pomohamo.classList.remove("active");
          clearInterval(interval);
          alarm.play();
          setTimeout(function() {
            start.style.display = "block";
          }, 500);
          setTimeout(function() {
            stop.style.display = "none";
          }, 501);
          round++;
          update_data("round", round);
          roundEl.innerHTML = round;
          pomosTime = Math.round(poTimer * round);
          update_data("pomosTime", pomosTime);
          pomos.innerHTML = pomosTime;
        if (round % 4 === 0) {
          longBreak.classList.add("active");
          body.style.backgroundColor = "var(--long-break)";
          start.style.color = "var(--long-break)";
          stop.style.color = "var(--long-break)";
          section.style.backgroundColor = "var(--lb)";
          timer.innerHTML = "15:00";
        } else {
          shortBreak.classList.add("active");
          body.style.backgroundColor = "var(--short-break)";
          start.style.color = "var(--short-break)";
          stop.style.color = "var(--short-break)";
          section.style.backgroundColor = "var(--sb)";
          timer.innerHTML = "05:00";
        }
      }
    }, 1000);
  } else if (shortBreak.classList.contains("active")) {

      let time = sbTimer * 60;
      
      interval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
        
        timer.innerHTML = `${minutes}:${seconds}`;
      
        if (time > 0) {
          time -= 1;
        } else {
            shortBreak.classList.remove("active");
            pomohamo.classList.add("active");
            body.style.backgroundColor = "var(--pomohamo)";
            start.style.color = "var(--pomohamo)";
            stop.style.color = "var(--pomohamo)";
            section.style.backgroundColor = "var(--po)";
            clearInterval(interval);
            timer.innerHTML = "25:00";
            alarm.play();
            setTimeout(function() {
              start.style.display = "block";
            }, 500);
            setTimeout(function() {
              stop.style.display = "none";
            }, 501);
        }
      }, 1000);

  } else {
      let time = lbTimer * 60;
      
      interval = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        
        timer.innerHTML = `${minutes}:${seconds}`;
      
        if (time > 0) {
          time -= 1;
        } else {
            longBreak.classList.remove("active");
            pomohamo.classList.add("active");
            body.style.backgroundColor = "var(---pomohamo)";
            start.style.color = "var(--pomohamo)";
            stop.style.color = "var(--pomohamo)";
            section.style.backgroundColor = "var(--po)";
            clearInterval(interval);
            timer.innerHTML = "25:00";
            alarm.play();
            
            setTimeout(function() {
              start.style.display = "block";
            }, 500);
              setTimeout(function() {
            stop.style.display = "none";
            }, 501);
        }
      }, 1000);
  }
}

stop.onclick = function stopTimer() {
  
  setTimeout(function() {
    start.style.display = "block";
  }, 500);
  setTimeout(function() {
    stop.style.display = "none";
  }, 501);
  
  let audio = document.querySelector("audio#audio1");
  audio.play();
  
  clearInterval(interval);
}

// pwa

/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}*/

// problems

/*
  - record pomohamos
      -- after 4 pomodors long break
  // i can do it
  - quote under timer

  // Done
  - responsive
  - reset timer
  - sound on click
*/


const modal = document.querySelector(".modal");
const rptbtn = document.querySelector(".rptbtn");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
if (event.target === modal) {
    toggleModal();
}
}

rptbtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

	


// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".pndg button");

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Task"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Task", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Task");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Task");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Task", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  let getLocalStorageData = localStorage.getItem("New Task"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    listArray = []; //create a blank array
  }
  localStorage.setItem("New Task", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}
