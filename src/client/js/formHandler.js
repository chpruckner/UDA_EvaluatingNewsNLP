const handleSubmit = (event) => {
  event.preventDefault();

  let userUrl = document.getElementById("url").value;

  //const analysis = Client.handleApiCall(url);
  const analysePost = async (url = "") => {
    const response = await fetch("/add", {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url: url}),
    })

    try {
      const result = await response.json();
      console.log(result);
      await Client.showResult(result);
    } catch (err) {
      console.error(err);
    }
  }

  analysePost(userUrl);

  /* fetch('http://localhost:3000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }) */
};

export { handleSubmit };
