const http = require('http');

function buildResponse(pathname) {
  if (pathname === '/health') {
    return { status: 200, body: JSON.stringify({ ok: true, service: 'sample-api' }) };
  }

  if (pathname === '/capabilities') {
    return {
      status: 200,
      body: JSON.stringify({
        capabilities: [
          'repo-discovery',
          'file-reading',
          'code-search',
          'diff-analysis',
          'pr-review'
        ]
      })
    };
  }

  return { status: 404, body: JSON.stringify({ error: 'not_found' }) };
}

const server = http.createServer((req, res) => {
  const response = buildResponse(req.url);
  res.writeHead(response.status, { 'Content-Type': 'application/json' });
  res.end(response.body);
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`sample-api listening on ${port}`);
  });
}

module.exports = { buildResponse };
