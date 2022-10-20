import fetch from 'node-fetch';

const apiKey = 'EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// One way of doing this is:
petition
  .then(response => {
    response.json()
      .then(data => {
        console.log(data);
      });
  })
  .catch(console.warn)

// Second way of doing this is:
// petition
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(console.warn)

// Third way of doing this with destructuring:
petition
  .then(response => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
    // const img = document.createElement('img');
    // img.src = url;

    // document.body.append(img)
  })
  .catch(console.warn)