//all dom element and their references

let togglemenu=document.querySelector(".togglemenu")
let bggridcontainer =document.querySelector(".grids")
let lifecountButton=document.querySelector(".lifebtn")
let eventButton=document.querySelector(".eventbtn")
let dateinput=document.querySelector(".dateinput")
let startButton=document.querySelector(".startbtn")
let titletext=document.querySelector(".titlebtn")
let yearBox=document.querySelector(".year")
let month=document.querySelector(".month")
let day=document.querySelector(".day")
let hour=document.querySelector(".hour")
let minute=document.querySelector(".minute")
let second=document.querySelector(".second")
let millisecond=document.querySelector(".mill")
let hiddemenu=document.querySelector(".dataget")
let customeventbox=document.querySelector(".customevent")
let inputArea=document.querySelector(".inputarea")
let ismenuhiddenactive;
let isClickedinsideBox;


togglemenu.addEventListener('click',() => {
    body.style="rgba(32, 27, 27, 1)"
    hiddemenu.style="display:flex;"
ismenuhiddenactive=true
})


document.querySelector(".dataget").addEventListener('click',() => {
     console.log("i just clicked")
     isClickedinsideBox=true
}
    )

document.body.addEventListener('click',(e) => {
    if(e.target.id==="tgbtn" && ismenuhiddenactive===true)
    {
        hiddemenu.style="display:flex"
    }
    else if(isClickedinsideBox)
    {   
        console.log("clicked insidethe box may be")
        hiddemenu.style="display:flex;"
        isClickedinsideBox=false
    }
    else{
        hiddemenu.style="none"
        body.style="background-color:black;"
    }
})

eventButton.addEventListener('click',() => {
    customeventbox.style="display:flex;"
    inputArea.style="display:none;"
})

lifecountButton.addEventListener('click',() => {
    customeventbox.style="display:none;"
    inputArea.style="display:flex;"
})


