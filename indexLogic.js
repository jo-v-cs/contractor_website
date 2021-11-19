function initDB(db, dbFields, tableName) {
    let queryFields = [];
    for (let i = 0, n = dbFields.length; i < n; i++) {
        queryFields[i] = dbFields[i] + ' ' + 'TEXT';
    }
    return db.run(`CREATE TABLE 
            IF NOT EXISTS ${tableName}(
                id INTEGER PRIMARY KEY,
                ${queryFields.toString()})`,
            (err) => {
                if (err) {
                    console.log("Unable to create table");
                }
                else {
                    console.log("Table created successfully");
                }
            });
}

module.exports = { initDB };