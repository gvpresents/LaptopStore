let qwerty = document.getElementById('allBtn')  

let ActiveUser = sessionStorage.getItem("ActiveUser")

document.getElementById("spanActiveUser").innerHTML = ActiveUser

let btn = document.getElementById('allBtn')


if(ActiveUser) {

    qwerty.innerHTML =   `<a href="MyComputers.html"><button type="button" class="btn btn-info">My Computers</button></a>
    <a href="BuyComputers.html"><button type="button" class="btn btn-warning">Buynew computer</button></a>
    <button type="button" onclick="logout()"  class="btn btn-danger">Exit Accaunt</button>`
} else {
 
    qwerty.innerHTML = ` <a href="login.html"> <button type="button" class="btn btn-info">Login</button></a>
    <a href="BuyComputers.html"><button type="button" class="btn btn-warning">Buynew computer</button></a>`
}



function logout() {

    if (confirm("Are You Sure That You Want To Log Out?") == true){
     
        sessionStorage.removeItem("ActiveUser")
        sessionStorage.removeItem("ActUserNum")
      
        qwerty.innerHTML = ` <a href="login.html"> <button type="button" class="btn btn-info">Login</button></a>
        <a href="BuyComputer.html"><button type="button" class="btn btn-warning">Buynew computer</button></a>`

        window.location.href = "main.html"
        
        alert("You Logged Off Succesfull")
    } else {
        alert("You Cancel!")
    }

}































// if(confirm("napisi svoy vozrast??????????????")){
//     console.log("daaaaaaaaaaaa")
// }else{
//     console.log("nnnnnnnnneeeeeeeee")
// }
