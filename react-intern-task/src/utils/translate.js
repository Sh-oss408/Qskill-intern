export async function translateTextApi(text, targetLang) {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|${targetLang}`
  );

  const data = await response.json();
  return data.responseData.translatedText;
}
