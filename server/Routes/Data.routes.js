const { Router } = require("express");
const axios = require("axios");
require("dotenv").config();

const url = process.env.URL;

const DataRouter = Router();

const fetchData = async (url) => {
  const { data } = await axios(url);
  return data;
};

DataRouter.get("/transaction", async (req, res) => {
  const data = await fetchData(url);
  return res.json(data);
});



module.exports = {
  DataRouter,
};
