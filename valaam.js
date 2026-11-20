function showHidden() {
    document.getElementById("hidden-block").style.display = "block";
}

function hideHidden() {
    document.getElementById("hidden-block").style.display = "none";
}

function check()
{
    var answer = calc.answer.value.trim().toLowerCase();

    if ( answer == 'сортавала' )
        alert('Правильно!');
    else
        alert('Неправильно!');
}