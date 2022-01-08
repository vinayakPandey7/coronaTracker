//Install express server
const compression = require('compression')
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.use(compression());
// Serve only the static files form the dist directory


app.use(express.static(__dirname + '/dist/corona-tracker'));
app.get('/sitemap.xml', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/corona-tracker/assets/sitemap.xml'));
  });
app.get('/*', function(req,res) { res.sendFile(path.join(__dirname, "dist/corona-tracker/index.html")); });

const server = http.createServer(app)

// Start the app by listening on the default Heroku port
server.listen(process.env.PORT || 8080);