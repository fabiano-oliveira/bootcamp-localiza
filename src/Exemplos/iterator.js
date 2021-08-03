
// iterator
var o = {
    values: [1, 2, 3],
    [Symbol.iterator]() {
        var i = -1;
        
        return { 
            next: () => {
                i++;
                return {
                    value: this.values[i]
                    , done: i >= this.values.length
                }
            }
        }
    }
}


for(let x of o){
    console.log(x);
}

console.log(o[Symbol.iterator]().next());


// generators
function* fiboSequence(n){
    var previous = 0;
    var current = 1;

    if(n > 0) {
        yield 1;
        n--;
    }

    while(n > 0){
        var next = previous + current;
        yield next;
        previous = current;
        current = next;
        n--;
    }

}

console.log(...fiboSequence(10));

// generators & iterators
var g = {
    values: [1, 2, 3],
    *[Symbol.iterator]() {
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
}
console.log(...g);