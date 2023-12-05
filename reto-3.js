function findNaughtyStep(original, modified) {
    let extra;
    
    if (original.length < modified.length){
      let count = 0
      extra = modified[0]
      while (original[count] === modified[count]){
        count++
        extra = modified[count]
      }
    } else if (original.length > modified.length){
      let count = 0
      extra = original[0]
      while (original[count] === modified[count]){
        count++
        extra = original[count]
      }
    } else {
      extra = ''
    }
    
    return extra
  }