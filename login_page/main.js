var validEmail = "sumit@gmail.com";
var validpassword = "1234";

// let validEmail = false;
// let validpassword = false;
// let vaild = validEmail && validpassword
// const email = document.querySelector("#email");
const email=document.getElementById("email")

email.addEventListener('keyup' , function(){
    if(email){
    var currentEmail = document.querySelector("#email").value
    var emailErr = document.querySelector('.emailErr');
    
    if(currentEmail !== validEmail){
        emailErr.style.display='block';
    }else{
        emailErr.style.display='none';
    }
    // validEmail = true;
}
});


let password = document.querySelector("#password");

password.addEventListener('keyup' , function(){
    
    var currentPassword = document.querySelector("#password").value;
    var passwordErr = document.querySelector('.passwordErr')
    
    
    if(currentPassword !== validpassword){
        passwordErr.style.display='block';
        
    }else{
        passwordErr.style.display='none';
    }
    // validpassword = true;
    // console.log(validpassword);
});


function toWelcomePage(){
        var currentEmail = document.querySelector("#email").value;
        var currentPassword = document.querySelector("#password").value;

console.log("currentEmail",document.querySelector("#email"))

        if(currentEmail == validEmail && currentPassword == validpassword){
            // window.location.href = "C:\Users\Admin\Desktop\login_page\window.html"
            window.location.assign("welcome.html")
        }
        else{
            console.log("wrong")
            var emailErr = document.querySelector('.emailErr');
            emailErr.innerHTML = " Enter valid Details";
            emailErr.style.display = 'block'

        }
}
    
            