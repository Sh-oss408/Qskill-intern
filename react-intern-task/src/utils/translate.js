export const translateTextApi = async (text, language) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", text);
  encodedParams.append("target", language);
  encodedParams.append("source", "en");

  const response = await fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "YOUR_KEY_HERE",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    }
  );

  const result = await response.json();
  return result.data.translations[0].translatedText;
};
