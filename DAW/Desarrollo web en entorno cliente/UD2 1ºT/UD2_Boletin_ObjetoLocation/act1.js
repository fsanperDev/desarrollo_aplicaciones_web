// Se ha creado un elemento <a> y se ha usado la propiedad href para el propósito de este ejemplo.
// Una alternativa mas correcta es navegar a la URL y usar document.location o window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?';
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