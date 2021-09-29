const express = require('express');
const router = express.Router({ mergeParams: true });
const routeController = require("../common/routeController");
const budgetController = require("../controller/budgetController");
const userController = require("../controller/userController");


router.post('/signin', (req, res)=>{
  routeController.handleRequest(req, res, userController.login)
});

router.post('/newprocess', (req, res) => {
  routeController.handleRequest(req, res, budgetController.createTypeProcess)
});

router.get('/entry', (req, res) => {
  routeController.handleRequest(req, res, budgetController.getAllEntry)
});

router.get('/egress', (req, res) => {
  routeController.handleRequest(req, res, budgetController.getAllEgress)
});

router.delete('/:id', (req, res) =>{
    routeController.handleRequest(req, res, budgetController.deletingProcess)
})

module.exports = router
