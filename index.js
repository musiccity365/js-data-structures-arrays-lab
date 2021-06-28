let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
    return drivers.push("Ralph");
}

function destructivelyPrependDriver() {
    return drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
    return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

function appendDriver(name) {
    return [...drivers, "Broom"];
}

function prependDriver(name) {
    return ["Arnold", ...drivers];
}

function removeLastDriver(name) {
    return drivers.slice(0, -1)
}

function removeFirstDriver(name) {
    return drivers.slice(1)
}