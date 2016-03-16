/**
 * Created by rachanadeshmukh on 3/15/16.
 */
var mock = require("./form.mock.json");

// load q promise library
var q = require("q");

// pass db and mongoose reference to model
module.exports = function(app) {

    // load user schema
    //var UserSchema = require("./user.schema.server.js")(mongoose);

    // create user model from schema
    //var UserModel = mongoose.model('User', UserSchema);

    var api = {
        findFormByCredentials: findFormByCredentials,
        findFormByTitle: findFormByTitle,
        findFormById: findFormById,
        createForm: createForm,
        findAll: findAll,
        updateForm: updateForm,
        deleteForm: deleteForm,
    };
    return api;

    function createForm(form) {
        form._id = "ID_" + (new Date()).getTime();
        mock.push(form);
        return form;
    }


    function findFormById(userId) {
        for(var u in mock) {
            if( mock[u]._id === userId ) {
                return mock[u];
            }
        }
        return null;
    }

    function findFormByTitle(formTitle) {
        for(var u in mock) {
            if( mock[u].title === formTitle) {
                return mock[u];
            }
        }
        return null;
    }

    function findAll() {
        return mock;

    }

    function updateForm(formId, form) {
        for(var u in mock) {
            if( mock[u]._id === formId) {
                mock[u].title = form.title;
                mock[u].userId = form.userId;
                mock[u].fields = form.fields;
            }
        }
    }

    function deleteForm(formId) {
        for (var u in mock) {
            if (mock[u]._id === formId) {
                mock.pop(mock[u]);
            }
        }
    }

    function findFormByCredentials(credentials) {
        for (var u in mock) {
            if ((mock[u].username === credentials.username) &&
                (mock[u].password === credentials.password)) {
                return mock[u];
            }
        }
        return null;
    }

}
