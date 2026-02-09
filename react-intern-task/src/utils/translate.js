export const translateTextApi = async (text, language) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", text);
  encodedParams.append("target", language);
  encodedParams.append("source", "en");

  const response = await fetch(
    "https://google-translate112.p.rapidapi.com/lang-detect?text=%E5%9B%BD%E8%AF%AD%2F%E5%9C%8B%E8%AA%9E",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "ac7295702dmsh1df2c3f434ae019p12a205jsn52b6e710b30b",
        "X-RapidAPI-Host": "google-translate112.p.rapidapi.com",
      },
      body: encodedParams,
    }
  );

  const result = await response.json();
  return result.data.translations[0].translatedText;
};
