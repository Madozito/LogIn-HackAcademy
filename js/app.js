
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


document.querySelector("input").addEventListener("input",function () {
    var email = document.querySelector("input").value;

    if (validateEmail(email) === true) {
        document.querySelector("input").classList.add("is-valid")
        document.querySelector("input").classList.remove("is-invalid")
        
    } else{
        document.querySelector("input").classList.remove("is-valid")
        document.querySelector("input").classList.add("is-invalid")
        
    }

    

})




document.querySelector("#btn-log").addEventListener("click",function (){

    checkPasswordLength();


    
})


function checkPasswordLength (){

    var password = document.getElementById("pass1").value;

    if (password.length < 8 ) {
        document.getElementById("pass1").classList.add("is-invalid")
        document.getElementById("pass1").classList.remove("is-valid")
        document.getElementById("message").style.display = "block";
        
  
    }else{
        document.getElementById("pass1").classList.remove("is-invalid")
        document.getElementById("pass1").classList.add("is-valid")
    }
}

function checkPasswordLowercase() {
    var password = document.getElementById("pass1").value;
    if ( password.match(/[a-z]/) ) {
        document.getElementById("pass1").classList.remove("is-invalid")
        document.getElementById("pass1").classList.add("is-valid")
    }else{
        document.getElementById("pass1").classList.remove("is-valid")
        document.getElementById("pass1").classList.add("is-invalid")
        document.getElementById("message").style.display = "block";
    }

}

function checkPasswordCapital() {
    var password = document.getElementById("pass1").value;
    if (password.match(/[A-Z]/) ) {
        document.getElementById("pass1").classList.remove("is-invalid")
        document.getElementById("pass1").classList.add("is-valid")
    }else {
        document.getElementById("pass1").classList.remove("is-invalid")
        document.getElementById("pass1").classList.add("is-invalid");
        document.getElementById("message").style.display = "block";
    }

}

function checkPasswordNumber() {
    if (password.match(/\d/) ) {
        document.getElementById("pass1").classList.remove("is-invalid")
        document.getElementById("pass1").classList.add("is-valid")
    }else {
        document.getElementById("pass1").classList.remove("is-valid")
        document.getElementById("pass1").classList.add("is-invalid")
        document.getElementById("message").style.display = "block";
    }

    
}


    