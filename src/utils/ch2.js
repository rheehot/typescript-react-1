/**
 * javascript tip
 * @type {{defense: number, attack: number, hp: number}}
 */


const pikachu = {name: "pickachu"}

const status = {
  hp: 40,
  attack: 60,
  defense: 45,
}

const {hp, attack} = status

function printStatus({ hp, attack} ){
  console.log(hp, attack)
}

// printStatus(status)
//
// const goodObjectAssignCode = {...pikachu, ...status}
//
// console.log(goodObjectAssignCode)
//

/**
 * 해ㅐㄹ
 */


console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));

// document.all instanceof Object; // -> true
// typeof document.all; // -> 'undefined'