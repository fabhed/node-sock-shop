const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    pageTitle: 'Socks Shop',
    path: '/',
    socks: [
      {
        id: 1,
        name: 'Colorful Socks',
        price: 9.99,
        imageUrl: '/images/colorful-socks.jpg'
      },
      {
        id: 2,
        name: 'Striped Socks',
        price: 7.99,
        imageUrl: '/images/striped-socks.jpg'
      }
    ]
  });
});

module.exports = router;
