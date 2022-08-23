const express = require('express');
const app = express();
app.use(express.static('src'));

app.get(/.+\.(js|ico|html|png|jpg|css|map|json)$/, function(req, res) {
  res.sendFile(req.originalUrl.replace(/^./, ""), { root : __dirname});
});

app.get(/.+$/, function(req, res) {
  res.sendFile("/public/index.html", { root : __dirname});
});

app.listen(3000, () => console.log("Server de pé em http://localhost:3000"));