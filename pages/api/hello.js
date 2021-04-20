export default function handler(req, res) {
  // status200 is success message like 404
  res.status(200).json({ text: "Hello" });
}
