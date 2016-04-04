export class Settings {
    constructor(collection) {
        this.dao = collection;
    }

    getConfiguration(moduleName) {
        if (Meteor.isServer) {
            return this.dao.findByKey("moduleName", moduleName);
        }
        else {
            return this.dao.fetchByKey("moduleName", moduleName);
        }
    }
    
    addConfiguration(configuration) {
        return this.dao.insert(configuration);
    }
}