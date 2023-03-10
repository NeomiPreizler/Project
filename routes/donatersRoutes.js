const express = require('express')
const router = express.Router()
const donatersController = require('../controllers/donatersController')
const verifyJWT=require('../middleware/verifyJWT');
console.log(donatersController);
// router.use(verifyJWT);
router.route('/')
    .get(donatersController.getAllDonaters)
    .post(donatersController.postDonater)
    .put(donatersController.updateDonater)
    .delete(donatersController.deleteDonater)

router.route('/:user_name')
    .get(donatersController.getByUserName)
    // .put(donatersController.updatePairId)


// .patch(donatersController.updateDonaters)
// .delete(donatersController.deleteDonaters)
// router.get('/:id', donatersController.getOneDonaters)
module.exports = router;