var express = require('express');
var router = express.Router();

//Require contoller for announcement
var express = require('express');
var router = express.Router();

var announcementController = require('../controllers/announcementController');

/* GET announcement home page.
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
router.get('/', announcement_controller.index);
  */


router.get('/create',announcementController.announcement_create_get);
router.post('/create',announcementController.announcement_create_post);
router.get('/delete', announcementController.announcement_delete_get);
router.post('/delete', announcementController.announcement_delete_post);
router.get('/list', announcementController.announcement_list);

module.exports = router;