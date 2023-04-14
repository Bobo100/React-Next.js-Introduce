export default async function handler(req, res) {
  const { name, message } = req.body;
  console.log({ name, message });
  try {
    res.redirect(200, "/");
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
