const http = require('http');
const port = 4000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log('start');
    const timeout = setInterval(() => {
      console.log(new Date().toUTCString());
    }, Number(process.env.INTERVAL)*1000);
    setTimeout(() => {
      clearInterval(timeout);
      console.log('stop');
      res.end(new Date().toUTCString());
    }, Number(process.env.TIME)*1000)
  }
});
server.listen(port, () => {
  console.log('server run!')
})