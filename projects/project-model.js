const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    update,
    remove
};

function find() {
    return db('projects');
}

async function add(user) {
    const [id] = await db('projects').insert(user);
    return id;
}

function update(id, post) {
    return db('projects')
        .where('id', Number(id))
        .update(post);
}

function remove(id) {
    return db('projects')
        .where('id', Number(id))
        .del();
}
