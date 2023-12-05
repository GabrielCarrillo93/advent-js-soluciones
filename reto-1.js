function findFirstRepeated(gifts) {
    let repetido = -1;
    let repetidos = [];
  
    function esta(array, elem, hastaDonde){
      let i = 0;
      while (i < hastaDonde && array[i] != elem){
          i++
      }  
      return i < hastaDonde;      
    }
  
    for (let i = 0; i < gifts.length; i++){
        let verificador = gifts[i];
        if (esta(gifts, verificador, i)){
            repetidos.push(verificador)
        } 
    }
    if (repetidos.length > 0){
        repetido = repetidos[0]
    }
  
    return repetido;
  }