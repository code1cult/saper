let line = 'X O O X X X O O O O O O X O X X X X O X X O O O O X O O O X X X O O X X X X O X X O X X X O X O O O O X O X O X X O X X O X O X'

let getRandomInt = (min, max)  => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mapFunction = (mapSaper) => {
let arr = mapSaper.split(' ')
let mapSort = arr.map(function(item, i, arr) {

return (item == 'X') ? ' '+item+' ' : ' '+getRandomInt(1,6)+' ';

});

console.log(mapSort.join(' '))



}

mapFunction(line)
