
let empBtn = document.querySelector(".btn2");
let jobSekBtn = document.querySelector(".btn1");

let regBtn = document.querySelector(".reg");

function myFun() {
    if(empBtn.checked) {
        window.open("create-resume.html");
    } 
    else if(jobSekBtn.checked) {
        window.open("post-a-job.html");
    } 
}

// regBtn.addEventListener("click", function() {
    
// })