/**
 * 오랜만에 자바스크립트 공부 다시 한 번 해보겠습니다. 하기싫지만, 어느정도 기억을 복구하기 위해서,
 *
 * 1. 데이터 타입
 * 원시타입 vs 오브젝트 타입
 *
 * 1. Boolean
 * 2. Null
 * 3. Undefined
 * 4. Number
 * 5. BigInt
 * 6. String
 * 7. Symbol
 *
 */

// console.log(typeof 11)
// console.log(null === undefined)
//
// var x = function() {
//   //return null
// }
//
// console.log(x())
//
// console.log(typeof function() {
// })
//
//
// var y = {}
// y['foo'] = 'bar'
// console.log(y)
//
// /**
//  * Object
//  */
//
//
//
// var foo = Boolean(false)
// var foo2 = String('hello')
// var foo3 = 'hello'
//
// console.log(foo2 === foo3)
//
// var truthy
//
// if (truthy) {
//
// } else if (truthy == null) {
//
// } else {
//
// }
//
// console.log('===================')
//
// console.log(true)
// console.log(!!{})
// console.log(!![])
// console.log(!!'')
// console.log(!!'hi')
// console.log(!!0)
// console.log(!!-1)
//
//
// var x2 = !!!!!!!!!true
//
// //console.log("x2", x2)
//
//
// var g = 'global'


function thisIsFun() {
  console.log('this!!', this) //window or global
}

thisIsFun()

console.log(this)

const jeff = {

  face: 'oh!!',

  whoAmI: function() {
    console.log('this2', this.face)

    setTimeout(() => {
      console.log('this4', this.name)
    }, 100)

    setTimeout(function ff() {
      console.log('this5', this.name)
    }, 100)

  },

  butWhoAmI: () => {

    console.log('this3', this)
  },

  whatTheHack() {


  },

}



//호출한놈이 this

jeff.whoAmI()
jeff.butWhoAmI()
jeff.whatTheHack()


for (let i = 0; i < 3; i++) {

  console.log('i', i)

  // const log = () => {
  //   console.log(i)
  // }

  setTimeout(() => {
    console.log(i)
  }, 100)
  //log()
}


console.table()

/**
 * ㅓ
 */



