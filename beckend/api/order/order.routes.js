const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {addOrder, getOrders, deleteOrder, updateOrder} = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/user/:buyerId', log, getOrders)
router.get('/host/:hostId', log, getOrders)
router.post('/', log, addOrder)
router.delete('/:id',  deleteOrder)
router.put('/:id',  updateOrder)

module.exports = router

// router.post('/',  log, requireAuth, addOrder)
// router.delete('/:id',  requireAuth, deleteOrder)