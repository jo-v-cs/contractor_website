function initDB(db, dbFields) {
    let queryFields = [];
    for (let i = 0, n = dbFields.length; i < n; i++) {
        queryFields[i] = dbFields[i] + ' ' + 'TEXT';
    }
    return db.run(`CREATE TABLE 
            IF NOT EXISTS orders(
                id INTEGER PRIMARY KEY,
                ${queryFields.toString()})`,
            (err) => {
                if (err) {
                    console.log("Unable to create table");
                }
            });
}

module.exports = { initDB };