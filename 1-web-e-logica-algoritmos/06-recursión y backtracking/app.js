function findLongestWord(text) {
  
    const words = text.split(' ');
    let longestWord = ''; 
  
    
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i]; 
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    }
  
    return longestWord;
  }
  
  // Ejemplo de uso
  const text = "JavaScript es un lenguaje de programación increíble para aprender.";
  const longest = findLongestWord(text);
  console.log(longest); // Esto mostrará en la consola: "programación"