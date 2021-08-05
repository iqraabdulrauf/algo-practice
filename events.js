document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grand parent clicked !!");
    e.stopPropagation(); // if this is here then 2 other will not executed
  },
  true // if true trickle down from grand parent to child and if false vice versa
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked !!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child clicked !!");
    
  },
  true
);

// if sequence is :

// true -- capturing
//false -- bubbling
// true -- capturing
