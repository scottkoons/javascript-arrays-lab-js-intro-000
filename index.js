var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
// function destructivelyAppendKitten(kittens) {
//     kittens.push('Ralph')
//     return kittens;
// }
// destructivelyAppendKitten(kittens);
function destructivelyAppendKitten(kittenNames){
    return kittens.push(kittenNames);
}

function destructivelyPrependKitten(kittenNames){
    return kittens.unshift(kittenNames);
}

function destructivelyRemoveLastKitten(kittenNames){
    return kittens.pop(kittenNames);
}

function destructivelyRemoveFirstKitten(kittenNames){
    return kittens.shift(kittenNames);
}

function appendKitten(kittenNames){
    return kittens.concat(kittenNames);
}

function prependKitten(kittenNames){
    return [kittenNames ...kittens];
}
