
let generated_password = "",
generator_button = document.querySelector('.click-to-generate'),
password_box = document.querySelector('.display-password'),
copy_button = document.querySelector('.copy-button'),
rules_checked = document.querySelectorAll('input[type="checkbox"]'),
display_password = document.querySelector('.show-password-here');

generator_button.addEventListener('click',function(){
    let result = 0;
    rules_checked.forEach(i=>{
        if(i.checked === true){
            result++;
        }
    })
    console.log(result);
    generated_password="";
    let password_length = parseInt(document.querySelector('.length-value').value),
     final_password = "";
     if(result === 0){
        display_password.innerText = "select something";
        password_box.style.padding = "12px 0";
     }
     else{
        while(generated_password.length <= password_length){
        generatePassword();
    }
    
    if(generated_password.length > password_length){
        final_password = generated_password.slice(0,password_length);
    }else{
        final_password = generated_password;
    }
    display_password.innerText = final_password;
            password_box.style.padding = "12px 0";

     }
});

function generatePassword(){
    const symbol = "!@#$%^&*()_+<>?/.,';:[]\|",
     random_symbol = symbol[Math.floor(Math.random() * symbol.length)],
     password_contents = [
        String.fromCharCode(Math.floor(Math.random() * 26 + 65)),
          String.fromCharCode(Math.floor(Math.random() * 26 + 97)),
          String.fromCharCode(Math.floor(Math.random() * 10 + 48)),
          random_symbol
      ];
   
    rules_checked.forEach((i,index)=>{
        if(i.checked === true){
             generated_password += password_contents[index];
        }
    })
}

copy_button.addEventListener('click',()=>{
    let textarea = document.createElement('textarea');
    if(display_password.innerText === ""){
        return false;
    }else{
        textarea.value = display_password.innerText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('password copied to clipboard');
    }
})

