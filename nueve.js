//array o arreglos

const number = [
    10,
    20,
    30,
    40,
    50
];

//acceder a los valores de un array
//console.log(number[0]);

// recorrido en mi array 
   // number.forEach(function(number){
        //console.log(number);
    //});
//agregar nuevos elementos al array
   // number.push(60, 70, 80, 90, 100);
    //number.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //console.table(number);

    const months = ["Enero", "Febreeo", "Marzo"];

   // months.pop(); // borrar element
    //months.shift(); primer elemento 

    //agregar nuevos elementos
    const newElemet = ["mayo", ... months];


    console.table(newElemet);