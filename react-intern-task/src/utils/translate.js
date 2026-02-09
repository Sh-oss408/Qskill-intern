export const translateTextApi = async (text, language) => {
  const response = await fetch(
    `https://text-translator2.p.rapidapi.com/translate`,
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "ac7295702dmsh1df2c3f434ae019p12a205jsn52b6e710b30b",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: "en",
        target_language: language,
        text: text,
      }),
    }
  );

  const result = await response.json();
  return result.data.translatedText;
};
