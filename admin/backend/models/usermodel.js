const connection = require('../database/index');

const userModel = {
    getAllusers: (callback) => {
        connection.query('SELECT * FROM users', callback);
    },

    getuserById: (userId, callback) => {
        connection.query('SELECT * FROM users WHERE userID = ?', [userId], callback);
    },

    createuser: (userData, callback) => {
        const {DisplayName,Email,ProfilePictureURL, AuthenticationProvider,RegistrationDate,LastLogin } = userData;
        connection.query('INSERT INTO users (DisplayName,Email,ProfilePictureURL, AuthenticationProvider,RegistrationDate,LastLogin) VALUES (?, ?, ?, ?, ?, ?)',
            [DisplayName,Email,ProfilePictureURL, AuthenticationProvider,RegistrationDate,LastLogin], callback);
    },

    updateuser: (userId, userData, callback) => {
        const {DisplayName,Email,ProfilePictureURL, AuthenticationProvider,RegistrationDate,LastLogin, } = userData;
        connection.query('UPDATE users SET DisplayName=?,Email=?,ProfilePictureURL=?, AuthenticationProvider=?,RegistrationDate=?,LastLogin=? WHERE userID=?',
            [DisplayName,Email,ProfilePictureURL, AuthenticationProvider,RegistrationDate,LastLogin, userId], callback);
    },

    deleteuser: (userId, callback) => {
        connection.query('DELETE FROM users WHERE userID=?', [userId], callback);
    }
};

module.exports = userModel;
