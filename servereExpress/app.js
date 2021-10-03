const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');
const config = require('config');
const apiPrefix= config.get('apiPrefix');
const passport = require('passport');
const passportConfig = require('./config/server/passportConfig');
const cors = require('cors');

app.use(cors())
passport.use(passportConfig.createStrategy());
app.use(passport.initialize());

app.use(express.urlencoded());
app.use(express.json());
app.use("/",router);

app.listen(port, ()=> {
  console.log(`App listen in port :${port}`);
})

app.use(apiPrefix + "/users",require("./routes/userRoutes"));//localhost:3306/api/v1/users/
app.use(apiPrefix + "/auth",require ("./routes/authRoutes"));

