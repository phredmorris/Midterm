export default function handler(req, res) {
  const { identifier = 'guest' } = req.query || {};
  const message = `Hello, ${Array.isArray(identifier) ? identifier[0] : identifier}! Welcome to your Vercel function.`;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ message, timestamp: Date.now() }));
}
