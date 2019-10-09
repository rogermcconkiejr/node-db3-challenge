const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
}

function findById(id){
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(schemeId) {
    return   db('steps')
    .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
    .where({ scheme_id : schemeId })
    .select('schemes.scheme_name', 'steps.*')
    .orderBy('step_number')
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, "id")
}

function update(changes, scheme_id){
    return db('schemes')
        .where( 'id', Number(scheme_id) )
        .update(changes)
}

function remove(scheme_id) {
    return db('schemes')
        .where('id', scheme_id)
        .del()
}