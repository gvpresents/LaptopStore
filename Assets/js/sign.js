let myForm = document.getElementById('FormReg')

if(localStorage.getItem("User's")==null) {
    localStorage.setItem("User's", 0)
}

document.getElementById('Registrate').addEventListener("click",e=>{
    e.preventDefault()

    let r_name = document.getElementById('uname').value
    let r_number = document.getElementById('Phne').value
    let r_uname = document.getElementById('Usrnme').value
    let r_password = document.getElementById('pwd').value


    let kolicestvo = Number(localStorage.getItem("User's"))
    localStorage.setItem("User's", kolicestvo+1)


    const createobject = {
        userid: kolicestvo+1,
        name: r_name,
        number: r_number,
        username: r_uname,
        password: r_password,   
    }


    localStorage.setItem(`user${kolicestvo+1}`, JSON.stringify(createobject))

    let AlertMessage = document.getElementById("AceeptSighn");

    AlertMessage.innerHTML = `<div class="alert alert-success">   
          <strong>Success!</strong> Your Account Has Been Created Enjoy!</div>
          `;


  
      setTimeout(()=>{
          window.location.href = "login.html"
      },1000)

})



