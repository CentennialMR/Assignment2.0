let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let Bcontact = require('../model/bcontact');
module.exports.displayBcontactList = (req,res,next)=>{
    Bcontact.find((err,bcontactList)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(BcontactList);
         res.render('bcontact/list', 
         {title:'bcontact', BcontactList:bcontactList,
        displayName:req.user ? req.user.displayName:''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('bcontact/add',{title:'Add Bcontact',
    displayName:req.user ? req.user.displayName:''})

}

module.exports.processAddPage = (req,res,next)=>{
    let newBcontact = Bcontact({
        "name": req.body.name,
        "number":req.body.number,
        "email":req.body.email,
        
    });
    Bcontact.create(newBcontact,(err,Bcontact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/bcontactList');
        }
    });
    }
    
        module.exports.displayUpdatePage = (req,res,next)=>{
            let id = req.params.id;
            Bcontact.findById(id,(err,bcontactToUpdate)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('bcontact/update',{title:'Update Bcontact', bcontact: bcontactToUpdate,
                    displayName:req.user ? req.user.displayName:''});
                }
            
            });
        }

        module.exports.processUpdatePage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedBcontact = Bcontact({
                "_id":id,
                "name":req.body.name,
                "number":req.body.number,
                "email":req.body.email,
            });
            Bcontact.updateOne({_id:id}, updatedBcontact,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/bcontactList');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            Bcontact.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/bcontactList');
                }
                
            });
            }
        