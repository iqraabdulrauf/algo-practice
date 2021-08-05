// OVERLOADING
// -- STATIC,COMPILE TIME BINDING,FAST IN PERFORMANCE
// DIFF SIGANTURE AND SAME CLASS
class Sum {
  add(n1, n2) {
    return n1 + n2;
  }
  add(n1, n2, n3) {
    return n1 + n2 + n3;
  }
}

//    ---------------------------------
// OVERRIDING

// DYANMIC,RUNTIME,INHERITANCE
// SAME SIGNATURE AND INHERITANCE
class CarSpeed {
  speed() {
    return 100;
  }
}

class TotalSum extends CarSpeed {
  speed() {
    return 150;
  }
}
