var Announcement = require('../models/announcement');
var async = require('async');





const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//Display list of all announcements

exports.announcement_list = (req, res, next) => {
    Announcement.find({}, 'poster custom_announcement expiration_date')
    .populate('_id')
    .exec(function (err, list_announcements) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('announcement_list', { title: 'Announcement List', announcement_list: list_announcements });
    });
}


// Display Announcement create form on GET.
exports.announcement_create_get = (req, res, next) => {
    res.render('new_announcement', { pageTitle: 'Create a new announcement', pageDescription:'Create announcement', title:'Add new announcements for others to enjoy and peruse' });
}

// Handle announcement create on POST.
exports.announcement_create_post = [
    //adds a new announcement

    body('poster', 'Poster must not be empty').isLength({ min: 1 }).trim(),
    body('email', 'Email must not be empty').isLength({ min: 1 }).trim(),
    body('custom_announcement', 'announcement must not be empty').isLength({ min: 1 }).trim(),
    //body('expiration_date', 'exp. date required').isLength({min: 1}).trim(),

    sanitizeBody('*').trim().escape(),

    (req, res, next) => {

        const errors = validationResult(req);

        var announcement = new Announcement(
            {
                poster: req.body.poster,
                email: req.body.email,
                custom_announcement: req.body.custom_announcement,
                //expiration_date: req.body.expiration_date
            }
        );

        
            announcement.save(function (err) {
                if (err) { return next(err); }
                res.redirect('/');
            });
        

    }
];

// Display announcement delete form on GET.
exports.announcement_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: announcement delete GET');
};

// Handle announcement delete on POST.
exports.announcement_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: announcement delete POST');
};


