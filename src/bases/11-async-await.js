import fetch from 'node-fetch';

const getImage = async () => { // async returns the value by default in a promise

  try {

    const apiKey = 'EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // if you hover over the petition you will see it´s a response type of variable. So it will wait for the fetch to be done, before passing to the next argument, function, variable etc.
    const { data } = await response.json(); // wait for the response to be completed

    const { url } = data.images.original;
    console.log(url);
    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img)

  } catch (error) {
    console.error(error);
  }
}

getImage();