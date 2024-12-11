async function sendToTelegram(message) {
  const config = {
    token: "7820898638:AAFWG0ty14YMQ-91246BLsZXWDkqocNR2-o",
    chatId: "7820898638",
  };

  const url = `https://api.telegram.org/bot${config.token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.chatId,
      text: message,
    }),
  });

  return response.ok;
}
