let symbol = "!@#$%^&*()_+<>?/.,';:[]\|",
random_symbol = symbol[Math.floor(Math.random() * symbol.length)],
generated_password = "",
generator_button = document.querySelector('.click-to-generate'),
display_password = document.querySelector('.display-password');


const password_contents = [
  String.fromCharCode(Math.floor(Math.random() * 26 + 65)),
    String.fromCharCode(Math.floor(Math.random() * 26 + 97)),
    String.fromCharCode(Math.floor(Math.random() * 10 + 48)),
    random_symbol
];

generator_button.addEventListener('click',generatePassword);

function generatePassword(){
    const rules_checked = document.querySelectorAll('input[type="checkbox"]');
    rules_checked.forEach((i,index)=>{
        if(i.checked == true){
            generated_password += password_contents[index];
            display_password.innerText = generated_password;
        }
       
    })
}

















