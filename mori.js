var mori = require('mori');

var complaints = mori.vector();
fetch('consumer-complaints.json').then(function (response) {
  response.json().then(function (result) {
    complaints = mori.toClj(result);
    console.log(mori.count(complaints));
  });
});
