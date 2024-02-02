const slider = document.querySelector("#password_length");
const button = document.querySelector("#generate");
const options = document.querySelectorAll(".option input");
const generated_password = document.querySelector("#generated_password");
const copy = document.querySelector("#add_to_clipboard")

let character_object = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "`~!@#$%^&*()_-+=[]{}|:;/.<>"
}

function validate(){
    let valid = false;
    
    if(document.querySelector("#lowercase").checked){
        valid = true;
    }
    else if(document.querySelector("#uppercase").checked){
        valid = true;
    }
    else if(document.querySelector("#number").checked){
        valid = true;
    }
    else if(document.querySelector("#symbol").checked){
        valid = true;
    }
    if(valid){
        generate_password()
    }else{
        generated_password.value = "Please check at least one setting"
        generated_password.style.color = "red";
    }
}


function generate_password(){
    let password = ""
    let random_password = ""
    let slider_value = slider.value

    options.forEach(i =>{
        if(i.checked){
            password += character_object[i.id];
        }})
    
        for(let i = 0; i < slider_value; i++){
            random_password += password[Math.floor(Math.random() * password.length)];
        }
        generated_password.value = random_password;
        generated_password.style.color = "#1a2f40";
}
function update_slider(){
    document.querySelector("#length_value").innerHTML = slider.value
}

function add_to_clipboard(){
    navigator.clipboard.writeText(generated_password.value);
}

copy.addEventListener("click", add_to_clipboard)
slider.addEventListener("input", update_slider);
button.addEventListener("click", validate);


