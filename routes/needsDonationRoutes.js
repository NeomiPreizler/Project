const express = require('express');
const router = express.Router();

const needDonationController = require('../controllers/needDonationController');
router.route('/')
    .get(needDonationController.getAllNeedDonation)
    .post(needDonationController.postNeedDonation)
    // .put(needDonationController.updateNeedsDonater)

router.get( '/:user_name', needDonationController.getByEmail)
// router.post('/medical',needDonationController.postMedical)
// router.post('/personal',needDonationController.postPersonal)

module.exports = router






