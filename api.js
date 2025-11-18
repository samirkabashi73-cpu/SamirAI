import fetch from "node-fetch";

export default async function handler(req, res) {
  const data = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify(req.body)
  });

  const json = await data.json();
  res.json(json);
}
