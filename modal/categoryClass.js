var Datastore = require('nedb');
var db = {}
db.category = new Datastore({ filename: 'dbfiles/category.db', autoload: true });


class Category {
    constructor(id, name, description, activeStatus) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.activeStatus = activeStatus;
    }

    insertCategory() {
        return new Promise((resolve, reject) => {
            let savedCategory = { name: this.name, description: this.description, active: this.activeStatus }
            db.category.insert(savedCategory, function (err, doc) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(doc);
            });
        })
    }

    findAllCategories(){
        return new Promise((resolve, reject) => {
            db.category.find({}, function (err, docs) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        })
    }
    findByCategoryId(){
        return new Promise((resolve, reject) => {
            db.category.findOne({_id:this.id}, function (err, docs) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        })
    }
    deleteCategory(){
        return new Promise((resolve, reject) => {
            db.category.remove({_id:this.id}, function (err, numRowsEffected) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(numRowsEffected);
            });
        })
    }
    
}

module.exports = Category;
