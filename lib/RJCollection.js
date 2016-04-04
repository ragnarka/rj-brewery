export class RJCollection extends Mongo.Collection {

    fetchById(id) {
        return this.findById(id).fetch();
    }

    findById(id) {
        return this.find({"_id": id});
    }

    fetchByKey(key, value) {
        return this.findByKey(key, value).fetch();
    }

    findByKey(key, value) {
        return this.find({[key]: value});
    }

    fetchAll() {
        return this.findAll().fetch();
    }

    findAll() {
        return this.find({});
    }

    updateById(id, document) {
        return this.update({_id: id}, document);
    }

    deleteById(id) {
        return this.remove({_id: id});
    }
}
