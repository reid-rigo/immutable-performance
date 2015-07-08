var complaints = [];
fetch('consumer-complaints.json').then(function (response) {
  response.json().then(function (result) {
    complaints = result;
    console.log(complaints.length)
  });
});
