const express = require('express');
const router = express.Router();
const routeController = require("../common/routeController");
const budgetController = require("../controller/budgetController");

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



module.exports = router;


