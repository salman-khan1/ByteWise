var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab')
}

    // ....Script for mobile.....
    var sidemenu=document.getElementById("sidemenu");
    
    function openmenu(){
        sidemenu.style.right="0";
    }
    
    function closemenu(){
        sidemenu.style.right="-200px";
    }

    // Connecting portfolio contact from to google sheet
   
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHUdqcW4h1Bg6vLLdhRTBZaaomVPIC5O62aveM8Wcalvqtnceq2KWmKkQfwW5YikQUXQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message Sent Succesfully"
                        setTimeout(() => {
                            msg.innerHTML=""
                        }, 5000);
                        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })





  window.onload = function(){
    CreateWorkDivs()
  }

  function CreateWorkDivs(){
    const MyprojectDiv = document.getElementById('work-list')
    const ServiceListDiv = document.getElementById('service-ist') 
     fetch("./Data.json").then((res)=>{
        return res.json()
    }).then(data=>{
        const Myprojects = data.MyProjects
        const ServiceList = data.ServiceList
        for (let index = 0; index < Myprojects.length; index++) {
            const element = Myprojects[index];
            MyprojectDiv.innerHTML += `<div class="work">
            <img src=${element.img} alt="">
            <div class="layer">
                <h3>${element.heading}</h3>
                <p>${element.description}</p>
                <a href=${element.link} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>`
        }
        for (let index = 0; index < ServiceList.length; index++) {
            const element2 = ServiceList[index];
            ServiceListDiv.innerHTML += ` <div>
            <i class="${element2.icon}"></i>
            <h2>${element2.heading}</h2>
            <p>${element2.description}</p>
            <!-- <a href="#">Learn More....</a> -->
        </div>`
        }
    }
    )
  }


  