let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let bcontactController = require('../controllers/bcontact');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to our bcontact model
let Bcontact = require('../model/bcontact');
//let bcontactController = require('../controllers/bcontact');
//GET ROUTE for the bcontact list page - READ OPERATION
router.get('/',bcontactController.displayBcontactList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,bcontactController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,bcontactController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/update/:id',requireAuth,bcontactController.displayUpdatePage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/update/:id',requireAuth,bcontactController.processUpdatePage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,bcontactController.performDelete);
module.exports = router;