var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const OWN_API_KEY = "4ead272f7c47525c4fc1e9792d25201e";



//route pour récupérer les films
router.get('/movies', (req, res) => {
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWN_API_KEY}`)
.then(response => response.json())
.then(data => res.json({movies: data.results}));
})



module.exports = router;
