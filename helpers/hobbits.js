const db= require('../data/dbConfig');

module.exports = {
    getHobbit(id) {
        if(id) {
            return db('hobbits')
                    .where({id})
                    .first()
        }
    },
    addHobbit(name) {
        return db('hobbits')
                .insert(name)
                .then(([id])=> id ? this.getHobbit(id) : null)
    },

    removeHobbit(id) {
        const hobbit = this.getHobbit(id)
        return db('hobbits')
                .del()
                .where({id})
                .then(()=> hobbit)
    }
}