export default function handler(req, res) {
  const { slug } = req.query;
  // res.end(`Post: ${slug.join(", ")}`);
  res.end(`Post：${slug}`);
}
