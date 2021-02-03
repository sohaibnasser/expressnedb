var express = require('express');
var router = express.Router();
var path = require('path');
var Datastore = require('nedb');
// const Category = require('../modal/categoryClass')  
// import {Category} from '../modal/categoryClass'
var Category = require("../modal/categoryClass");
var db = {}
db.product = new Datastore({ filename: '../dbfiles/product.db', autoload: true });
db.category = new Datastore({ filename: '../dbfiles/category.db', autoload: true });




router.get('/getAll', async function (req, res) {
  docs = new Category();
  const resp = await docs.findAllCategories();
  res.json(resp)
});
router.get('/getById/:id', async function (req, res) {
  docs = new Category(req.params.id);
  const resp = await docs.findByCategoryId();
  res.json(resp)
});
router.delete('/delete/:id', async function (req, res) {
  docs = new Category(req.params.id);
  const resp = await docs.deleteCategory();
  if(resp>0){
    res.json({"result":"Record Deleted Successfully", "status":"success"});
  }else{
    res.json({"result":"Failed to delete Record or Record not exist.", "status":"error"});
  }  
});

router.post('/add', async function (req, res) {
  var docs =  new Category(req.body.id, req.body.categoryName, req.body.categoryDescription, req.body.activeStatus)
  const resp = await docs.insertCategory();
  res.json(resp);
});

// class Category{
//   constructor(name, description, activeStatus){
//     this.name=name;
//     this.description = description;
//     this.active = activeStatus
//   }
// }
// router.get('/checkout', function(req, res, next) {
//   res.sendFile(path.join(__dirname + '/../public/checkout.html'));
// });
 

module.exports = router;
