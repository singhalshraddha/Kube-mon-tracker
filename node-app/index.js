const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: 'node_http_requests_total',
  help: 'Total number of HTTP requests',
});

register.registerMetric(httpRequests);

app.use((req, res, next) => {
  httpRequests.inc();
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Node.js app listening on port ${PORT}`);
});
