let symbol = "!@#$%^&*()_+<>?/.,';:[]\|",
random_symbol = symbol[Math.floor(Math.random() * symbol.length)],
generated_password="";


const password_contents = [
  String.fromCharCode(Math.floor(Math.random() * 26 + 65)),
    String.fromCharCode(Math.floor(Math.random() * 26 + 97)),
    String.fromCharCode(Math.floor(Math.random() * 10 + 48)),
    random_symbol
]



function generatePassword(){
    const rules_checked = document.querySelectorAll('input[type="checkbox"]');
    console.log(rules_checked);
}

console.log(password_contents);















