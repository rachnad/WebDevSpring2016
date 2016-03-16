/**
 * Created by rachanadeshmukh on 3/15/16.
 */
var mock = require("./user.mock.json");

// load q promise library
var q = require("q");

// pass db and mongoose reference to model
module.exports = function(app) {

    // load user schema
    //var UserSchema = require("./user.schema.server.js")(mongoose);

    // create user model from schema
    //var UserModel = mongoose.model('User', UserSchema);

    var api = {
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        createUser: createUser,
        findAll: findAll,
        updateUser: updateUser,
        deleteUser: deleteUser,
    };
    return api;

    function createUser(user) {
        user._id = "ID_" + (new Date()).getTime();
        mock.push(user);
        return user;
    }


    function findUserById(userId) {
        for(var u in mock) {
            if( mock[u]._id === userId ) {
                return mock[u];
                }
            }
        return null;
    }

    function findUserByUsername(userName) {
        for(var u in mock) {
            if( mock[u].username === userName) {
                return mock[u];
            }
        }
        return null;
    }

    function findAll() {
        return mock;

    }

    function updateUser(userId, user) {
        for(var u in mock) {
            if( mock[u]._id === userId) {
                mock[u].username = user.username;
                mock[u].firstName = user.firstName;
                mock[u].lastname = user.lastName;
                mock[u].password = user.password;
            }
        }
    }

    function deleteUser(userId) {
        for (var u in mock) {
            if (mock[u]._id === userId) {
                mock.pop(mock[u]);
            }
        }
    }

    function findUserByCredentials(credentials) {
        for (var u in mock) {
            if ((mock[u].username === credentials.username) &&
                (mock[u].password === credentials.password)) {
               return mock[u];
            }
        }
        return null;
    }

}
