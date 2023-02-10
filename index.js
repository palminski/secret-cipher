console.log("Script Running");

let options = {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    specialCharacters: false,
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const passwordLength = $('#length').val()
    console.log(passwordLength);

    let characterString = "";
    let generatedPassword = ""
    if (options.lowerCase) {
        characterString += "qwertyuiopasdfghjklzxcvbnm"
    }
    if (options.upperCase) {
        characterString += "QWERTYUIOPASDFGHJKLZXCVBNM"
    }
    if (options.numbers) {
        characterString += "1234567890"
    }
    if (options.specialCharacters) {
        characterString += "~!@#$%^&*()_-+=`[]{}|; :<,>.?/'"+'"';
    }
    
    if (characterString){
    for (i = 0; i <= passwordLength; i++) {
        generatedPassword += characterString[Math.floor(Math.random()*(characterString.length))]
    }
    console.log(generatedPassword);
    $("#password-display").text(generatedPassword);
    }
    else
    {
        $("#password-display").text("You Must Select At Least One Character Type");
    }

}


$('#lower-case-toggle').click(()=> {
    options.lowerCase = !options.lowerCase;
    console.log(options);
    if (options.lowerCase){
        $('#lower-case-toggle').addClass('active');
    }
    else
    {
        $('#lower-case-toggle').removeClass('active');
    }

})

$('#upper-case-toggle').click(()=> {
    options.upperCase = !options.upperCase;
    console.log(options);
    if (options.upperCase){
        $('#upper-case-toggle').addClass('active');
    }
    else
    {
        $('#upper-case-toggle').removeClass('active');
    }
})

$('#numbers-toggle').click(()=> {
    options.numbers = !options.numbers;
    console.log(options);
    if (options.numbers){
        $('#numbers-toggle').addClass('active');
    }
    else
    {
        $('#numbers-toggle').removeClass('active');
    }
})

$('#special-characters-toggle').click(()=> {
    options.specialCharacters = !options.specialCharacters;
    console.log(options);
    if (options.specialCharacters){
        $('#special-characters-toggle').addClass('active');
    }
    else
    {
        $('#special-characters-toggle').removeClass('active');
    }
})

$("#password-options").submit(handleFormSubmit);