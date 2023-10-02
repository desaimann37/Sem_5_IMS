const express = require('express');
const authController = require('../Controller/AuthController');
// const purchaseRouter = require('../Routers/PurchaseRouter');

const router = express.Router();

router.get('/signup' , authController.signup_get);
router.post('/signup' , authController.signup_post);
router.get('/login' , authController.login_get);
router.post('/login' , authController.login_post);
router.use("/admin", require('../Routers/PurchaseRouter.js'));
router.post("/admin" , authController.admin_post);
router.use("/admin" , require('../Routers/PurchaseRouter.js'));
router.patch("/admin" , require('../Routers/PurchaseRouter.js'));
module.exports = router;