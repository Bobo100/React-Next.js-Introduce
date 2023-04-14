// pages/api/[id].js
export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  res.end(`Post: ${id}`);
}
