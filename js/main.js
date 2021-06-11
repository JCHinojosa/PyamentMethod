const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year'),
      ccv = document.querySelector('#tarjeta .ccv');



const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
};

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});


btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});


//select generado dinamicamente
for(var i = 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    formulario.selectMes.appendChild(option);

};

// select year generado dinamicamente
const yearActual = new Date().getFullYear();
for ( var i = yearActual; i <= yearActual + 8; i ++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    formulario.selectYear.appendChild(option);
};

//input numero de tarjeta 
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //elimina espacios en blanco
    .replace(/\s/g, '')
    //elimina las letras
    .replace(/\D/g, '')
    //espacio cada 4 numero
    .replace(/([0-9]{4})/g, '$1 ')
    .trim(); //trim quita el ultimo espaciado de texto si lo tiene

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    };

    if ( valorInput[0]==4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/visa.png';
        logoMarca.appendChild(imagen);
    }else{
        if(valorInput[0] == 5){
            logoMarca.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = 'img/mastercard.png';
            logoMarca.appendChild(imagen);
        }
    }
    //esta funcion voltea la tarjeta
mostrarFrente();

});


//input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;
    if(valorInput == ''){
        nombreTarjeta.textContent = 'Jhon Doe';
    }
    mostrarFrente();
});

//input expiracion

formulario.selectMes.addEventListener('change', (e) => {

    mesExpiracion.textContent = e.target.value;
});

formulario.selectYear.addEventListener('change', (e) => {

    yearExpiracion.textContent = e.target.value.slice(2);
});

// CCV

formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');

    }
    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;

});