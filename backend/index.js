const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const getProduct = require('./routes/getProduct');
const cartData = require('./routes/cartDataRoutes');

const app = express();
app.use(express.json());
require('dotenv').config();
const options = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'cancelRequest',
    'Authorization',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
  ],
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};
app.use(cors(options));

app.use(
  cors({
    origin: ["http://localhost:8081"],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use('/product', getProduct);
app.use('/cartData',cartData)
app.post('/userDetails', async (req, res) => {
  const details = req.body;
  console.log('details', details);
  res.sendStatus(200);
});

app.get('/welcome', (req, res) => {
    res.status(200).send({ message: 'Hi Welcome!' });
  });

app.listen(8081, () => {
  console.log("Running on port 8081");
});
