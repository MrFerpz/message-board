const pool = require('./pool');

// These functions below were used to set-up the database

// const generateSQLtable = `
// CREATE TABLE IF NOT EXISTS user_messages (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   username VARCHAR ( 255 ),
//   message VARCHAR ( 255 )
// );`

// const fillSQLtable = `INSERT INTO user_messages (username, message) 
// VALUES
//   ('Bryan', 'Hi my name is Bryan!'),
//   ('Odin', 'Odin is what they call me!'),
//   ('Damon', 'Matt Daaaaamon');
// `;

// async function generateUserTable() {
//     try {
//         await pool.query(generateSQLtable);
//         console.log("table user_messages exists or was generated!");
//         await pool.query(fillSQLtable);
//         console.log("table user_messages successfully populated!");
//     } catch (error) {
//         console.error("Error during DB setup:", error);
//     } finally {
//         console.log("done!");
//     }
// }

async function getUserTable() {
    const response = await pool.query("SELECT * FROM user_messages");
    return response.rows;
}

async function addUser(username, message) {
    await pool.query("INSERT INTO user_messages (username, message) VALUES ($1, $2)", [username, message])
}

async function deleteUser(username) {
    await pool.query("DELETE FROM user_messages WHERE username = ($1)", [username])
}

module.exports = {
    getUserTable,
    addUser,
    deleteUser
}