document.getElementById('Login').addEventListener("click",e=>{
    e.preventDefault()

    let username_input = document.getElementById("uname1").value
    let pass_input     = document.getElementById("pwd1").value

    // console.log(username_input)


    let scet = Number(localStorage.getItem("User's"))

    for(let i=1; i<=scet; i++){
        let user_s_LS = JSON.parse(localStorage.getItem(`user${i}`))

        console.log(user_s_LS.username)
        if(user_s_LS.username == username_input  && user_s_LS.password == pass_input){

            sessionStorage.setItem("ActiveUser", user_s_LS.username)
            sessionStorage.setItem("ActUserNum", user_s_LS.number)

            let paramida = document.getElementById("succcestype");

          paramida.innerHTML = `<div class="alert alert-success">   
                <strong>Success!</strong> Your Account Has Been Created Enjoy!</div>
                `;
    

        
            setTimeout(()=>{
                window.location.href = "main.html"
            },1000)

            


        }else{

            
            
        }


    }
       
   
})


