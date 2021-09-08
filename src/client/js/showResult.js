const showResult = (data) => {
  console.log(data);
  document.getElementById("results").classList.add("show");
  document.querySelector(".char-agree-content").innerHTML = data.agreement;
  document.querySelector(".char-sub-content").innerHTML = data.subjectivity;
  document.querySelector(".char-confi-content").innerHTML = data.confidence;
  document.querySelector(".char-irony-content").innerHTML = data.irony;
  document.querySelector(".char-score-content").innerHTML = data.score_tag;

  
};

export { showResult };
