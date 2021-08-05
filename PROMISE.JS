let p = new Promise(function (resolve, reject) {
  resolve(console.log("do soemhting"));
});

p.then((res) => console.log("res", res)).catch((e) => e);
