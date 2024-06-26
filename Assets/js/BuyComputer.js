 let RazerDiv = document.querySelector("#list-Razer div")
 let AcerDiv = document.querySelector("#list-Acer div")
 let HPDiv = document.querySelector("#list-HP div")
 let AsusDiv = document.querySelector("#list-Asus div")
 let DellDiv = document.querySelector("#list-Dell div")
 let LenovoDiv = document.querySelector("#list-Lenovo div") 
 let LGDiv = document.querySelector("#list-LG div")
 let CasperDiv = document.querySelector("#list-Casper div")
 let FujitsuDiv = document.querySelector("#list-Fujitsu div")
 let NexusDiv = document.querySelector("#list-Nexus div")
 let SamsungDiv = document.querySelector("#list-Samsung div")
 let ToshibaDiv = document.querySelector("#list-Toshiba div")
 let SonyDiv = document.querySelector("#list-Sony div")

 let CisloSLS = Number(localStorage.getItem("Computer's"))

for(let i=1;i<=CisloSLS;i++){
    let UserAll = JSON.parse(localStorage.getItem(`Computer${i}`))

    if(UserAll != null){

let NewDiv = document.createElement("div")
NewDiv.className = "mainmini"


NewDiv.innerHTML= `
<p class="pImg"><img src="${UserAll.Image}" alt="Pc"></p>
<h3>Type: <span>${UserAll.type}</span></h3> 
<h3>Description: <span>${UserAll.Description}</span></h3> 
<h3>Price: <span>${UserAll.Price}</span></h3> 
<h3>View: <span>${UserAll.View}</span></h3>     
<h3>Phone: <span>${UserAll.usernumber}</span></h3> 
<p class="pButton"><button class="btn btn-info" data-toggle="modal" data-target="#myModalMORE" onclick="gridMORE(${UserAll.PcId})">More</button></p>
`   

if( UserAll.type == "Razer"){
    RazerDiv.appendChild(NewDiv)
}else if(UserAll.type == "Acer"){
    AcerDiv.appendChild(NewDiv)
}else if(UserAll.type == "HP"){
    HPDiv.appendChild(NewDiv)
}else if(UserAll.type == "Asus"){
    AsusDiv.appendChild(NewDiv)
}else if(UserAll.type == "Dell"){
    DellDiv.appendChild(NewDiv)
}else if(UserAll.type == "Lenovo"){
    LenovoDiv.appendChild(NewDiv)
}else if(UserAll.type == "LG"){
    LGDiv.appendChild(NewDiv)
}else if(UserAll.type == "Casper"){
    CasperDiv.appendChild(NewDiv)
}else if(UserAll.type == "Fuijitsu"){
    FujitsuDiv.appendChild(NewDiv)
}else if(UserAll.type == "Nexus"){
    NexusDiv.appendChild(NewDiv)
}else if(UserAll.type == "Samsung"){
    SamsungDiv.appendChild(NewDiv)
}else if(UserAll.type == "Toshiba"){
    ToshibaDiv.appendChild(NewDiv)
}else{
    SonyDiv.appendChild(NewDiv)
}


}}


function gridMORE(computerId) {
    let CisloSLS = Number(localStorage.getItem("Computer's"))
  
    // for (let i = 1; i < CisloSLS; i++) {
        let UserAll = JSON.parse(localStorage.getItem(`Computer${computerId}`))
    
    
        if(UserAll != null){
            let modalb = document.getElementById("Modalbody")
            modalb.innerHTML = ` 
            <img class="IMGOFMODAL" src="${UserAll.Image}" alt="Pc">
            <h3>type: <span>${UserAll.type}</span></h3>
            <h3>Name: <span>${UserAll.name}</span></h3>
            <h3>Description: <span>${UserAll.Description}</span></h3>
            <h3>Price: <span>${UserAll.Price}</span></h3>
            <h3>Number: <span>${UserAll.usernumber}</span></h3>
            <h3>New: <span>${UserAll.View}</span></h3>
            <h3>Ram: <span>${UserAll.ram}</span></h3>
            <h3>Processor: <span>${UserAll.Processor}</span></h3>
            <h3>gb of storage: <span>${UserAll.Gb}</span></h3>
            <h3>Type of storage: <span>${UserAll.Hdd}</span></h3>
            <h3>Os: <span>${UserAll.Os}</span></h3>
            <h3>VideoKart: <span>${UserAll.VideoKart}</span></h3>`
        
        }

    }
 

