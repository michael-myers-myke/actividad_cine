
//Funcion para mostrar el catalogo de peliculas de comedia al dar click al boton
function comedia(){
    let edad = document.getElementById("edad").value;
    let r1 = document.getElementById("respuesta1");
    let r2 = document.getElementById("respuesta2");
    let r3 = document.getElementById("respuesta3");

    if(edad > 0 && edad < 13){
        r1.textContent = "Back to the future";
    }else{
        if(edad >= 13 && edad < 16){
            r2.textContent = "The truman show";
        }else{
            if(edad >= 16){
                r3.textContent = "Thw wolf of wall street";
            }
        }
    }
}

//Funcion para mostrar el catalogo de peliculas de crimen al dar click al boton
function crimen(){
    let edad = document.getElementById("edad").value;
    let r1 = document.getElementById("respuesta1");
    let r2 = document.getElementById("respuesta2");
    let r3 = document.getElementById("respuesta3");

    if (edad > 0 && edad < 13){
        r1.textContent = "No hay peliculas disponibles para esta edad";
    }else{
        if(edad >= 13 && edad < 16){
            r2.textContent = "El secreto de sus ojos";
        }else{
            if(edad >= 16){
                r3.textContent = "The godfather";
            }
        }
    }
}

//Funcion para mostrar el catalogo de peliculas de drama al dar click al boton
function drama(){
    let edad = document.getElementById("edad").value;
    let r1 = document.getElementById("respuesta1");
    let r2 = document.getElementById("respuesta2");
    let r3 = document.getElementById("respuesta3");

    if(edad > 0 && edad < 13){
        r1.textContent = "Casablanca";
    }else{
        if(edad >= 13 && edad < 16){
            r2.textContent = "The shawshank Redemption";
        }else{
            if(edad >= 16){
                r3.textContent = "Taxi Driver";
            }
        }
    }
}

//Funcion para mostrar el catalogo de peliculas de musicales al dar click al boton
function musical(){
    let edad = document.getElementById("edad").value;
    let r1 = document.getElementById("respuesta1");
    let r2 = document.getElementById("respuesta2");
    let r3 = document.getElementById("respuesta3");

    if(edad > 0 && edad < 13){
        r1.textContent = "La La Land";
    }else{
        if(edad >= 13 && edad < 16){
            r2.textContent = "Los Miserables";
        }else{
            if(edad >= 16){
                r3.textContent = "The Rocky horror picture show";
            }
        }
    }
}