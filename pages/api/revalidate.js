export default async function handler(req, res) {
  console.log("[Next.js Revalidating...");
  try {
    await res.revalidate("/render_example/ISR");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
