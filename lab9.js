function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function clickMe2(button) {
    if(button.innerHTML == 'Виктор')
        button.innerHTML = 'Брюзгин';
    else
        button.innerHTML = 'Виктор';
}
function clickMe3(button)
{ 
    if(button.innerHTML == 'Нажми меня') 
        button.innerHTML = 'Ещё раз нажми';
    else if (button.innerHTML == 'Ещё раз нажми')
        button.innerHTML = 'Ещё';
        else if (button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать сначала';
    else
        button.innerHTML = 'Нажми меня';
}