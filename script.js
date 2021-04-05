// Information to reach API
const apiKey = '2dcb2496104547fda1b633b4536b43aa';
const url = 'https://api.rebrandly.com/v1/links';
const shortBtn = document.getElementById('shorten');
const inputField = document.getElementById('input');
const response = document.getElementById('responseField');



// page elements

const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
          }
          
    }
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data)

}

shortBtn.addEventListener('click', displayShortUrl)




