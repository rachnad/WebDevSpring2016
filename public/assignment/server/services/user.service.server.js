/**
 * Created by rachanadeshmukh on 3/15/16.
 */

module.exports = function(app, model) {
    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", getUsers);
    app.get("/api/assignment/user/:id", getUserbyId);
    app.get("/api/assignment/user?username=alice&password=wonderland", getAlice);
    app.get("/api/assignment/user?username=username", getUserbyUsername);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);


    var model = model;

    function createUser(req, res) {
        var newUser = req.body;
        res.json(model.createUser(newUser));
    }

    function getUsers(req, res) {
        model.findAll();
    }

    function getUserbyId(req, res) {
        var id = req.params._id;
        var user = model.findUserById(id);
        res.json(user);
    }

    function getUserbyUsername(req, res) {
        var username = req.params.username;
        var user = model.findUserByUsername(username)
        res.json(user);
    }

    function getAlice(req, res) {
        var alice = req.params.username;
        var wonderland = req.params.password
        var user = model.findUserById(id);
        res.json(user);
    }

    function updateUser(req, res) {
        var userid = req.params.id;
        var updatedbody = req.body;
        updatedbody._id = userid;
        res.json(model.updateUser(updatedbody));
    }


    function deleteUser(req, res) {
        var userid = req.params.id;
        res.json(model.deleteUserById(userid));
    }
};