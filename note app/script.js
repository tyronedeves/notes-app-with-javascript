'use strict';
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updatesTorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p")
    let img = document.createElement("img");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images 2/delete.png" ;
    notesContainer.appendChild(inputBox).appendChild(img);
})


notesContainer.addEventListener("click", e=>{
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updatesTorage();
    }
    else if (e.target.tagName === 'p'){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onKeyup = function() {
                updatesTorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "return"){
        document.execCommand("insertLinezBreak");
        event.preventDefault();
    }
})