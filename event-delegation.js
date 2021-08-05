document.querySelector("categories").addEventListener("click", (e) => {
  console.log(e, "working for all 3 items in list", e.target.id);
});

/// pros:

// 1- memory - we dont need to assign click handler for all items in ul, we attached to parent and handling if on basis of li id
// writing less code, easier to manage
// DOM manipulation


// limitations:


// use this delegation when same functionality for all lists items or child items i.e for reusability
// all the events(detailed events) are not bubbled up the heirarchy
