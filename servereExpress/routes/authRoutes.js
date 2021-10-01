const express = require('express');
const router = express.Router({ mergeParams: true });
const routeController = require("../common/routeController");
const userController = require("../controller/userController");


router.post('/signin', (req, res)=>{
  routeController.handleRequest(req, res, userController.login)
});

router.post('/signup',(req,res)=>{
  routeController.handleRequest(req,res,userController.create)
})

module.exports = router
