const handleSubmit = (event) => {
  event.preventDefault();

  let userUrl = document.getElementById("url").value;

  if (Client.checkInput(userUrl)) {
    fetch("http://localhost:3000/evaluation", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: userUrl }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log({ response });
      });
  } else {
    console.error(`${userUrl} is not a valid URL.`);
    alert("Please enter a valid URL starting wit 'http' or 'https'!");
  }

  /* const analysePost = async (url = "") => {
    const response = await fetch('/evaluation', {
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

  analysePost(userUrl); */

  /* fetch('/add', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({url: url}),
  })

  .then(res => res.json())
  .then(function(res) {
    console.log(res);
  }) */

  /* fetch('http://localhost:3000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }) */
};

export { handleSubmit };
