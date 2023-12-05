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