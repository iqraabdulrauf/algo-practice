const video = {
  title: "a",
  play() {
    console.log(this); //video obj
  },
};

video.stop = function () {
  console.log(this); // video obj
};

video.stop();

function nameTest() {
  console.log(this); // window or global in node
}
nameTest();

function Video(title) {
  // constructor func
  this.title = title;
  console.log(this);
}

const v = new Video("Video constructor"); // new empty obj referring to empty obj

const car = {
  title: "hello car",
  tags: ["2", "1", "5"],
  showTag() {
    console.log(this); //video obj
    this.tags.forEach(function tagFunc(tag) {
      console.log(this.title, tag); // here this will not refer to object because the func inside foreach refers to window object not the object, so to sovle this we pass this as second argument to foreach function or we can use arrow function
    }, this);
  },
};


// arrow func
// const car = {
//   title: "hello car",
//   tags: ["2", "1", "5"],
//   showTag() {
//     console.log(this); //video obj
//     this.tags.forEach(
//       (tagFunc = (tag) => {
//         console.log(this.title, tag); // here this will not refer to object because the func inside foreach refers to window object not the object, so to sovle this we pass this as second argument to foreach function or we can use arrow function
//       })
//     );
//   },
// };
car.showTag();
