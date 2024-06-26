let myForm = document.getElementById('ComputerForm')

if (localStorage.getItem("Computer's") == null) {
    localStorage.setItem("Computer's", 0)
}

document.getElementById('SaveButton').addEventListener("click", e => {
    e.preventDefault()

    let Pc_TypeOfPc = document.getElementById('TypeOfPc').value
    let Pc_Name = document.getElementById('Name').value
    let Pc_Price = document.getElementById('Price').value
    let Pc_description = document.getElementById('description').value
    let Pc_New = document.getElementById('New').value
    let Pc_Image = document.getElementById('Image').value
    let Pc_Ram = document.getElementById('Ram').value
    let Pc_Processor = document.getElementById('Processor').value
    let Pc_Gb = document.getElementById('Gb').value
    let Pc_Hdd = document.getElementById('Hdd').value
    let Pc_Os = document.getElementById('Operating').value
    let Pc_VideoKart = document.getElementById('VideoKart').value


    let kolicestvo = Number(localStorage.getItem("Computer's"))
    localStorage.setItem("Computer's", kolicestvo + 1)

    let NumberSession = sessionStorage.getItem("ActUserNum")

    const createobject = {

        PcId: kolicestvo + 1,
        usernumber: NumberSession,
        type: Pc_TypeOfPc,
        name: Pc_Name,
        Price: Pc_Price,
        Description: Pc_description,
        View: Pc_New,
        Image: Pc_Image,
        ram: Pc_Ram,
        Processor: Pc_Processor,
        Gb: Pc_Gb,
        Hdd: Pc_Hdd,
        Os: Pc_Os,
        VideoKart: Pc_VideoKart,
    }


    localStorage.setItem(`Computer${kolicestvo + 1}`, JSON.stringify(createobject))

    window.location.reload()


})

document.getElementById('delete').addEventListener("click", e => {
    e.preventDefault()

    myForm["category"].value = null
    myForm["Usname"].value = null
    myForm["Price"].value = null
    myForm["description"].value = null
    myForm["New"].value = null
    myForm["Image"].value = null
    myForm["Ram"].value = null
    myForm["Processor"].value = null
    myForm["Gb"].value = null
    myForm["Hdd"].value = null
    myForm["Os"].value = null
    myForm["VideoKart"].value = null

})

function img() {
    let Image = document.getElementById("Image").value

    document.getElementById('ImageinBottomOftheImage').src = Image
}


// =======================================ImageEnd===========================
let table = document.getElementById("TableData")
let CisloSLS = Number(localStorage.getItem("Computer's"))

for (let i = 1; i <= CisloSLS; i++) {
    let UserAll = JSON.parse(localStorage.getItem(`Computer${i}`))

    if(UserAll != null){
        let newStroka = document.createElement('tr')

    // ==============================Stolb==============        ==============
    let newStolb = document.createElement('td')
    let NewText = document.createTextNode(UserAll.PcId)
    newStolb.appendChild(NewText)
    // ==============================Stolb2============================
    let newStolb2 = document.createElement('td')
    let NewText2 = document.createTextNode(UserAll.type)
    newStolb2.appendChild(NewText2)
    // ==============================Stolb3============================
    let newStolb3 = document.createElement('td')
    newStolb3.innerHTML = `<img src="${UserAll.Image}" data-toggle="modal" data-target="#IncModal" onclick="inc(${UserAll.PcId})" height="150px" width="200px" alt="ImgOFpc">`


   
    // ==============================Stolb4============================
    let newStolb4 = document.createElement('td')
    let NewText4 = document.createTextNode(UserAll.Price)
    newStolb4.appendChild(NewText4)
    // ==============================Stolb5============================
    let newStolb5 = document.createElement('td')

    newStolb5.innerHTML = `
<button class="btn btn-danger"onclick="Delete(${UserAll.PcId})">Delete</button>
<button class="btn btn-info" data-toggle="modal" data-target="#myModalEDIT1" onclick="Edit(${UserAll.PcId})">Edit</button>
`



    newStroka.appendChild(newStolb)
    newStroka.appendChild(newStolb2)
    newStroka.appendChild(newStolb3)
    newStroka.appendChild(newStolb4)
    newStroka.appendChild(newStolb5)

    table.appendChild(newStroka)
    }

}

function Delete(computerId) {
    let CisloSLS = Number(localStorage.getItem("Computer's"))
    let ACtConfirm = confirm("Do you want to delete?")
    if(ACtConfirm == true){
    for (let i = 1; i < CisloSLS; i++) {
        let UserAll = JSON.parse(localStorage.getItem(`Computer${i}`))
   
    
        if(UserAll != null){
            
                
                localStorage.removeItem(`Computer${computerId}`)
                window.location.reload();
                break
               

            
        }

    }
    }
}

function Edit(computerId){
    let CisloSLS = Number(localStorage.getItem("Computer's"))
    for(let i=1;i<CisloSLS+1;i++){
        let compOne = JSON.parse(localStorage.getItem(`Computer${i}`))

        if(compOne !=null){
            if(compOne.PcId == computerId){
                let myForm1 = document.getElementById('myFormEDIT')
                // console.log(compOne.PcId)


                myForm1["category1"].value       = compOne.type
                myForm1["Usname1"].value         = compOne.name
                myForm1["Price1"].value          = compOne.Price
                myForm1["description1"].value    = compOne.Description
                myForm1["New1"].value            = compOne.View
                myForm1["Image1"].value          = compOne.Image
                myForm1["Ram1"].value            = compOne.ram
                myForm1["Processor1"].value      = compOne.Processor
                myForm1["Gb1"].value             = compOne.Gb
                myForm1["Hdd1"].value            = compOne.Hdd
                myForm1["Os1"].value             = compOne.Os
                myForm1["VideoKart1"].value      = compOne.VideoKart


                //-----------------------save-------------------------------------
                document.getElementById("SaveButtonEDit").onclick = (e)=>{
                    e.preventDefault()
                    let TakeVal = JSON.parse(localStorage.getItem(`Computer${computerId}`))



                    let Type_pc =        myForm1["category1"].value      
                    let Name_pc =        myForm1["Usname1"].value        
                    let Price_pc =       myForm1["Price1"].value         
                    let description_pc = myForm1["description1"].value   
                    let View_pc =        myForm1["New1"].value           
                    let Image_pc =       myForm1["Image1"].value         
                    let Ram_pc =         myForm1["Ram1"].value           
                    let Processor_pc =   myForm1["Processor1"].value     
                    let Gb_pc =          myForm1["Gb1"].value            
                    let Hdd_pc =         myForm1["Hdd1"].value           
                    let Os_pc =          myForm1["Os1"].value            
                    let Videpkart_pc =   myForm1["VideoKart1"].value     


                    // let kolicestvo = Number(localStorage.getItem("Computer's"))
                    // localStorage.setItem("Computer's", kolicestvo + 1)
                                
                    let NumberSession = sessionStorage.getItem("ActUserNum")
                                
                    const createobject = {
                    
                        PcId: computerId,
                        usernumber: NumberSession,
                        type: Type_pc,
                        name: Name_pc,
                        Price: Price_pc,
                        Description: description_pc,
                        View: View_pc,
                        Image: Image_pc,
                        ram: Ram_pc,
                        Processor: Processor_pc,
                        Gb: Gb_pc,
                        Hdd: Hdd_pc,
                        Os: Os_pc,
                        VideoKart: Videpkart_pc,
                    }
                
                
                    localStorage.setItem(`Computer${computerId}`, JSON.stringify(createobject))
                
                    window.location.reload()
                }

                //-----------------------reset-------------------------------------
               document.getElementById("Reset").onclick = (e)=>{
                e.preventDefault()
                let myForm1 = document.getElementById('myFormEDIT')
                


                myForm1["category1"].value       = null
                myForm1["Usname1"].value         = null
                myForm1["Price1"].value          = null
                myForm1["description1"].value    = null
                myForm1["New1"].value            = null
                myForm1["Image1"].value          = null
                myForm1["Ram1"].value            = null
                myForm1["Processor1"].value      = null
                myForm1["Gb1"].value             = null
                myForm1["Hdd1"].value            = null
                myForm1["Os1"].value             = null
                myForm1["VideoKart1"].value      = null

               }
                
            }
        }
    }

}

function img2() {
    let Image = document.getElementById("Image2").value

    document.getElementById('Bootomimageofedit').src = Image
}
function inc(computerId) {
  

        let UserAll = JSON.parse(localStorage.getItem(`Computer${computerId}`))
    
    
        if(UserAll != null){
            let modalb = document.getElementById("Mbody")
            modalb.innerHTML = ` 
            <p class="text-center"><img  class="WidthOfImg" src="${UserAll.Image}" alt="Pc"></p>
        `
        }

    }
    const form = document.getElementById("form123"); 
form.addEventListener("submit", (event) => { 
  event.preventDefault(); 
  window.location.href = "https://www.google.com/search?q=" + document.querySelector("input").value; 
}); 