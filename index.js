// ABOUT BUTTON
// Storing the about me button's into aboutbtn
var aboutBtn = document.getElementById("aboutMeBtn");
// addEvenListener method interacts with type, then function
aboutBtn.addEventListener("click", AboutBtnClick);

function AboutBtnClick()
{
    var x = $("#about").position();
    window.scroll({top: x.top, left: x.left, behavior: 'smooth'});
}
// SKILLS BUTTON
var skillsBtn = document.getElementById("skillsBtn");
skillsBtn.addEventListener("click", SkillsBtnClick);

function SkillsBtnClick()
{
    var x = $("#skill").position();
    window.scroll({top: x.top, left: x.left, behavior: 'smooth'});
}
// WORK BUTTON
var workBtn = document.getElementById("workBtn");
workBtn.addEventListener("click", WorkBtnClick);

function WorkBtnClick()
{
    var x = $("#work").position();
    window.scroll({top: x.top, left: x.left, behavior: 'smooth'});
}
// EDUCATION BUTTON
var educationBtn = document.getElementById("educationBtn");
educationBtn.addEventListener("click", EducationBtnClick);

function EducationBtnClick()
{
    var x = $("#education").position();
    window.scroll({top: x.top, left: x.left, behavior: 'smooth'});
}
// CONTACT BUTTON
var contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", ContactBtnClick);

function ContactBtnClick()
{
    var x = $("#contact").position();
    window.scroll({top: x.top, left: x.left, behavior: 'smooth'});
}

// SCROLL BACK TO TOP BUTTON
var backToTopBtn = document.createElement("BUTTON");
backToTopBtn.innerText = "Back to Top";
backToTopBtn.style.position="fixed";
backToTopBtn.style.left=(window.innerWidth-400)+"px";
backToTopBtn.style.top="0px";
backToTopBtn.classList.add("button");
document.body.appendChild(backToTopBtn);
backToTopBtn.addEventListener("click", BackToTop);

function BackToTop()
{
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

window.addEventListener("resize", UpdateButtonPosition);

function UpdateButtonPosition()
{
    backToTopBtn.style.left=(window.innerWidth-400)+"px";
}

// Button submit/clear + Error/Success Message
var btnContact = document.getElementById("btnContact")
btnContact.addEventListener("click", PageUpdate)

function PageUpdate(event)
{
    event.preventDefault()

    let inputs = document.getElementsByClassName("text-box");
    let inputs2 = document.getElementById("messageBox");

    let sent = document.getElementsByClassName("notifSent")[0]
    let error = document.getElementsByClassName("notifError")[0]
    let emailVal = new RegExp("\\S+@\\S+\\.\\S+");

    if(emailVal.test(inputs[1].value) && inputs[0].value != "" && inputs2.value.length > 0)
    {
        for(input of inputs)
        {
           input.value = ""
        }
        inputs2.value = "";
        sent.style.visibility = "visible"
        setTimeout(()=>{sent.style.visibility = "hidden"}, 3000);
    }
    else
    {
        error.style.visibility = "visible"
        setTimeout(()=>{error.style.visibility = "hidden"}, 3000);
    }
}
