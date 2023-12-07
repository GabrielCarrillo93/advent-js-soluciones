/*En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo. */

function manufacture(gifts, materials) {
    const hayMateriales = (valorActual) =>{ 
      return materials.toLowerCase().includes(valorActual);
    }
    const regalos = [];
    
    for (let i = 0; i < gifts.length; i++){
      let juguete = gifts[i].toLowerCase().split('');
      if (juguete.every(hayMateriales)){
        regalos.push(gifts[i])
      }
    }
    
    return regalos
  }