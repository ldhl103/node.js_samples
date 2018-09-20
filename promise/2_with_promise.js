function delay() {   
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('success!');
    }, 1000);
  });
}

delay().then(function (value) {
  console.log(value);    // 'success'
}).catch(function (error) {
  console.log(error);
});