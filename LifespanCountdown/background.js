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

let currentDateobject=new Date()

let currentHour=currentDateobject.getHours()
let currentMinutes=currentDateobject.getMinutes()
let currentSeconds=currentDateobject.getSeconds()
let currentMilliseconds=currentDateobject.getMilliseconds()
let currentDate=currentDateobject.getDate()
let currentMonthCount=currentDateobject.getMonth()
let currentFullYear=currentDateobject.getFullYear()

function printCurrentChosedDate()
{
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
    let passedYears=currentFullYear-startDate.getFullYear()
    if(currentDate===startDate.getDate() && currentMonthCount===startDate.getMonth())
    {
        /*
        don,t minus the years by one 
        it's mean the year and start date and month both are same mean user has nothing extra days till current to check
        scenario here suppose he borns on 18 july 2005 and he searching on 18 july 2026 nothing extra he has 21 years old

        in another scenario such as like 26february today then we need to count for these remaning days and months till from
        18july 2025 because its their last birthday has been counted now we are finding exact number how much year he grows so we also
        count further numbers lie extra month after 18july 2025 and days
        */
    
        // we write here code after soon!
    }
    else{
        passedYears-=1
        let monthDayCountObject=countMonthsAndRemaningDays()
        //now call the countMonthAndRemaingDays

    }

}

// let sepearateMonthDayCount=monthsTotalDays.slice(0)
// let AnotherMonthDayCount=monthsTotalDays.slice(0)
// let isDobLeapYearTrack=false
// let isCurrentYearTrack=false


let countMonthsAndRemaningDays=(startDate) => {

    // local  function variable for tracking days number count in case of leapYear
    let monthDayCountObject
    let anotherMonthDayObject
    // check for leap year for both years
    let isleapyearDob=checkWhetherLeapYear(startDate.getFullYear())
    let isCurrentYearLeapYear=checkWhetherLeapYear(currentFullYear)
    if(isleapyearDob)
    {
        let sepearateMonthsTotalDays=monthsTotalDays.slice(0)
        sepearateMonthsTotalDays[1]=sepearateMonthsTotalDays[1]+1
        monthDayCountObject=loopThroughMonthDayCountArray(sepearateMonthsTotalDays)
        //using different arrays for a in the case of leapYear to the preventing things get collapse
    }


    /*{
       monthcount:7,
       dayCount:2
      }
    */
    if(isCurrentYearLeapYear)
    {   
        let AnothermonthsTotalDays=monthsTotalDays.slice(0)
        AnothermonthsTotalDays[1]=AnothermonthsTotalDays[1]+1
        anotherMonthDayObject=loopThroughMonthDayCountArray(AnothermonthsTotalDays)
    }
    
    //in the case of both years are leap years
    if(typeof(monthDayCountObject)==="object" && typeof(anotherMonthDayObject)==="object")
    {
        //calculat the final total days
        

        //return that object from here
    }
    //single one leap Year another not 
    else if(typeof(monthDayCountObject)==="object" || typeof(anotherMonthDayObject)==="object")
    {  
        //check in which has dayCountObject
        // call the function first of all
        
        //return that object from here
    }
    // only neither first leap Yer not second
    else{
        let finalMonthDayCount=loopThroughMonthDayCountArray(monthsTotalDays)
        return finalMonthDayCount
    }

    //this function checks extra times which is not added into months
}


function loopThroughMonthDayCountArray(monthsTotalDays)
{

}


function checkWhetherLeapYear(year)
{
    //the leap year logic is goes here 
    //the leap year is a such year in whihc we add +1 in february month so total days becomes 29
    if(year%4===0)
    {
        if(year%100===0)
        {
            if(year%400===0)
                {
                  return true
                }
                else{
                    return false
                }
            }
            return true   
    }
    else{
        return false
    }
}
//edge cases
//same year
//past times
//same day to day
//fixing things
//-1 years if the month is not reached in current years

startButton.addEventListener('click',printCurrentChosedDate,false)

//calulation parts comes here which is matters a lot and this is hardest part of this things