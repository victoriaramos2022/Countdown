let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( function (btn){
    btn.addEventListener(`click`, function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
    }
    else if (styles.contains('increase')){
        count++;
    }
    else {
        count = 0;
    }

    if (count > 0){
        value.style.color = `blue`;
    }
    else if (count < 0){
        value.style.color = `red`;
    }
    else if (count == 0) {
        value.style.color = `black`;
    }

    value.textContent= count;

    })
});

/*
Este código crea un contador en la página que se puede incrementar, decrementar o resetear a cero. Aquí está lo que hace cada línea:

Crea una variable count e inicializa su valor en 0.

Selecciona el elemento HTML con la ID value y lo guarda en la variable value.

Selecciona todos los elementos HTML con la clase btn y los guarda en la variable btns.

Itera sobre cada botón en btns utilizando el método forEach y crea un "escucha" para cada botón que se activará cuando se haga clic en él.
Cuando se hace clic en un botón, el evento de clic e se pasa a la función que se ejecutará.

La variable styles se inicializa con las clases CSS del botón que se acaba de hacer clic.
Si el botón tiene la clase CSS decrease, el contador se decrementa en 1.
Si el botón tiene la clase CSS increase, el contador se incrementa en 1.
Si el botón tiene una clase CSS diferente de decrease o increase, el contador se restablece a 0.

Dependiendo del valor actual de count, se cambia el color del texto en el elemento value para que sea rojo si el número es negativo, azul si el número es positivo, o negro si el número es cero.
El valor actual de count se muestra en el elemento value. */