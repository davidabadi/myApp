var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/prices/:stock", function (req, res, next) {
  console.log(req.params.stock);
  axios
    .get(process.env.API_URL, {
      json: true,
      headers: { "User-Agent": "request" },
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: req.params.stock,
        interval: "5min",
        apikey: process.env.API_KEY,
      },
    })
    .then((response) => {
      if ("Error Message" in response.data) {
        next(response.data);
      }
      res.json(response.data);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
