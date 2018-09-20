

var isBossHappy = true

var WillGetMoreSalary = new Promise(function (resolve, reject) {
  if (isBossHappy) {
    var situation = {
      'stock' : 'goes up',
      'Year-end bonuses' : '3 months',
      }
    resolve(situation)
  } else {
    var reason = {
        'stock' : 'goes down',
        'Year-end bonuses' : 'None',
        }
    reject(reason)
  }
})


var askBoss = function () {
    WillGetMoreSalary
    .then(function (resolve) {
        console.log(resolve)
      })
    .catch(function (reject) {
        console.log(reject)
      })
  }
  
  askBoss()
