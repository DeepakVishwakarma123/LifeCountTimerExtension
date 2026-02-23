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
//without leap year
let monthsTotalDays=[31,28,31,30,31,30,31,31,30,31,30,31]


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


//let,s work on life span timer first of all
/*
imagine the average life a person can leave
expecing a person can leave 80years  
*/



function printCurrentChosedDate()
{
    let currentDateobject=new Date()
   
    let currentHour=currentDateobject.getHours()
    let currentMinutes=currentDateobject.getMinutes()
    let currentSeconds=currentDateobject.getSeconds()
    let currentMilliseconds=currentDateobject.getMilliseconds()
    let userDateOfbirth=dateinput.value
    let dobDateobject=new Date(`${userDateOfbirth}`)
    dobDateobject.setHours(currentHour)
    dobDateobject.setMinutes(currentMinutes)
    dobDateobject.setSeconds(currentSeconds)
    dobDateobject.setMilliseconds(currentMilliseconds)

    //calulate the year from current year after 80 years 
    let estimateYear=dobDateobject.getFullYear()+80
    let estimatedDateObject=new Date(`${estimateYear}`)
     console.log(estimateYear)
    //2106-1-1-5.30am milliseonds
    //remainng things after minusing these numbers
    calculateRemainingTimes(dobDateobject,estimatedDateObject,currentDateobject)


}

function calculateRemainingTimes(startDate,endDate,currentDateObject)
{
    //finding the passedTime First of userbased on data
    let passedYears=currentDateObject.getFullYear()-startDate.getFullYear()
}

function checkWhetherLeapYear()
{
    
}
//edge cases
//same year
//past times
//same day to day
//fixing things
//-1 years if the month is not reached in current years

startButton.addEventListener('click',printCurrentChosedDate,false)

//calulation parts comes here which is matters a lot and this is hardest part of this things