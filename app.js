function generatesome(){
    let quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the midst of chaos, there is also opportunity. - Sun Tzu",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to predict the future is to invent it. - Alan Kay",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
        "Life is what happens when you're busy making other plans. - John Lennon"
      ];
      
      let replace = Math.random()*quotes.length;
      let round = Math.floor(replace);
      let gen = quotes[round];
      
      let some = document.querySelector("#para");
      some.innerText = `" ${gen} "`;

    }