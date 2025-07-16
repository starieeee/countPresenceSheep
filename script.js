function countPresenceSheep(sheep){
    return sheep.filter(Boolean).length;
}
console.log(countPresenceSheep([true, false, false]));
