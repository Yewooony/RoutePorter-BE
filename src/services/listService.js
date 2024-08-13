const listProvider = require('../providers/listProvider');

class ListService {
    getAllLists() {
        return listProvider;
    }
}

module.exports = new listService();
