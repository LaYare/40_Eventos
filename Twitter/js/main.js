var lista = document.getElementById('lista');
var li = document.createElement('li');
    li.className = 'gris';
    li.addEventListener('click',eliminar);
var textarea = document.getElementById('textarea');
var boton = document.getElementById('boton');
    boton.addEventListener('click',agregar);
var scroll = document.getElementById('scroll');
var label = document.createElement('label');
var check = document.createElement('input');
    check.type = 'checkbox';
var span = document.createElement('span');
    span.className = 'fa fa-trash close';

//Creacion de li
function agregar(){
    if (textarea.value.length > 0){
        lista.appendChild(li);
        li.appendChild(label);
        label.appendChild(check);
        label.appendChild(document.createTextNode(textarea.value));
        li.appendChild(span);
        textarea.value = '';
    }else{
      alert('No se pueden enlistar tareas en blanco');  
    };
};
//Tachado de tarea
check.onclick = function(tach){
    tach.target.parentNode.classList.toggle('tashe');
};
//Borrado de tarea
function eliminar(){
    this.parentNode.removeChild(this);
}