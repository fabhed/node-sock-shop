const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');

app.use(shopRoutes);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
