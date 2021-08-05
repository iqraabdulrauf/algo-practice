const test = () => {
  //   document.getElementById("myBtn").addEventListener("click", function () {
  //     document.getElementById("demo").innerHTML = "Hello World";
  //   });

  document
    .getElementById("myBtn")
    .addEventListener(
      "mouseover",
      () =>
        (document.getElementById("demo").innerText = "IQRA YOU ARE AWESOME!!")
    );
  const data = ["APPLE", "MANGO", "LEMON", "BANANA"];
  const ul = document.getElementById("ct");


  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(obj));
   
    ul.appendChild(li);
  }

  document.querySelector('li:last-child').addEventListener('click', () => {
    alert("kkkkkkk")
   });
};
test();
