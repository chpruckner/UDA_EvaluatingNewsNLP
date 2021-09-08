const handleSubmit = (event) => {
  event.preventDefault();

  let userUrl = document.getElementById("url").value;

  if (Client.checkInput(userUrl)) {
    /* fetch("/evaluation", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: userUrl }),
    })
      .then((response) => response.json())
      .then((response) => {
        Client.showResult(response);
      }); */

      /* AB HIER LÖSCHEN */

      const fakeResponse = {
        agreement: "DISAGREEMENT",
        confidence: "84",
        irony: "NONIRONIC",
        model: "general_en",
        score_tag: "P",
        subjectivity: "SUBJECTIVE",
      }

      Client.showResult(fakeResponse);

      /* BIS HIER LÖSCHEN */
  } else {
    console.error(`${userUrl} is not a valid URL.`);
    alert("Please enter a valid URL starting wit 'http' or 'https'!");
  }
};

export { handleSubmit };
