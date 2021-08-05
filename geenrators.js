//generators are functions that can be paused and resume 
// at many times and each time they return value through yeld

function *g1(params) {
    console.log('hello');
    yield 'Yield 1 ran..';
    console.log('World');
    yield 'Yeild 2 ran..';
    return 'returned...'
}

const g = g1();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


for(let gen of g){
 console.log(gen);
}