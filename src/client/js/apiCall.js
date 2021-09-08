require("dotenv").config();
const handleApiCall = async (url) => {
  // general configuration
  const key = process.env.API_KEY;
  const inputLang = "auto"; // detects input language
  const outputLang = "en";
  const verbose = "y";

  const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=${inputLang}&ilang=${outputLang}&verbose=${verbose}&url=${url}`)

  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export { handleApiCall }