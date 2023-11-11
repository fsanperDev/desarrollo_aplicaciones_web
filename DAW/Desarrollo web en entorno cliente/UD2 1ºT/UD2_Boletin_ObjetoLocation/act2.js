// Se ha creado un elemento <a> y se ha usado la propiedad href para el propósito de este ejemplo.
// Una alternativa mas correcta es navegar a la URL y usar document.location o window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?';

// 1)
 location.assign("https://www.w3schools.com");

// 2)
//location.reload();

// 3)
//location.replace("https://www.w3schools.com");

q='URL#search-results-close-container';
console.log(url.href);
console.log(url.protocol);
console.log(url.host);
console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);
console.log(url.origin); 