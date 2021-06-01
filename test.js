window.onload = () => {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

// const token = 'EAAfXKphrykcBACSiOT3bEYDA3YB6mKM0HztaLxVc0SipXBAkt4jzeeUVA2IDmymN8ye1EesUOhdkFVUR0sdl3EhCp2y2TIjODVgiHHs3ZA71efnDN8drNZBi4ZB0tnfj5xWhwVnkY5LnurSiYSxBIu6SzPmCOMZCjU5ZBZC6gx1vQr5cR3qYvBs51Quysw5C5iiTcew9pdl02EzXkZBmz1f3F9c3xHHQcTAzZBaVTNZBd1X6qlOUTjYbn'

// const objectId = '4156723854340680'

// window.onload = () => {
//   axios.get(`https://graph.facebook.com/${objectId}/?fields=likes.summary(true)&access_token=${token}`)
// }