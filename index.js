console.log("Script Running");

let options = {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    specialCharacters: false,
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