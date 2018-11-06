const request = new XMLHttpRequest();

request.open('POST', 'https://private-622c6-tookanapi.apiary-mock.com/v2/create_task');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};
console.log(request);


