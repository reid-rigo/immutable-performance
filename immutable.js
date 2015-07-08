var Immutable = require('immutable');

var complaints = Immutable.List();
fetch('consumer-complaints.json').then(function (response) {
  response.json().then(function (result) {
    complaints = Immutable.fromJS(result);
    console.log(complaints.size)
  });
});
