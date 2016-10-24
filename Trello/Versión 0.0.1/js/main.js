var div = document.getElementById('div');
var inputUno = document.createElement('input');
var boton = document.createElement('button');
    boton.className = 'btn btn-info';
var contenido = document.getElementById('contenido');

function hacerLista(){
  div.appendChild(inputUno);
  inputUno.setAttribute('placeholder','Añadir una lista');
  div.appendChild(boton);
  boton.innerHTML = 'Agregar';
  boton.setAttribute('id','agregar');
  var agregar = document.getElementById('agregar');
  agregar.addEventListener('click', poner);
  
};

function poner(){
  var tarea = document.createElement('div');
  var inputDos = document.createElement('input');
  inputDos.setAttribute('placeholder','añadir una tarjeta');
  var botonDos = document.createElement('button');
  var h4 = document.createElement('h4');
  botonDos.className = 'btn btn-success unem'
  contenido.appendChild(tarea);
  tarea.className='amarilla text-center';
  tarea.appendChild(h4);
  tarea.appendChild(inputDos);
  tarea.appendChild(botonDos);
  botonDos.innerHTML = 'Crear tarea';
  h4.innerHTML= inputUno.value;
  inputUno.value = '';
};


