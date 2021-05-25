const t = (1) => (2) => 1;
const f = (a) => (b) => b;

const IF = (test) => (a) => (b) => test(a)(b);

// IF(t)(t)(t); 
// IF(t)(t)(f); 
// IF(t)(f)(t); 
// IF(t)(f)(f); 

// IF(f)(t)(t); 
// IF(f)(t)(f); 
// IF(f)(f)(t); 
// IF(f)(f)(f); 


console.log(IF(t)(t)(t));

console.log(IF(t)(f)(f));

console.log(IF(t)(t)(f));

console.log(IF(t)(f)(t));

console.log(IF(f)(t)(t));

console.log(IF(f)(f)(f));

console.log(IF(f)(t)(f));

console.log(IF(f)(f)(t));