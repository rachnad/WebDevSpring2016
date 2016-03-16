/**
 * Created by rachanadeshmukh on 3/15/16.
 */


module.exports = function(app, model) {
    app.post("/api/assignment/user/:userId/form", createForm);
    app.get("/api/assignment/user/:userId/form", getForms);
    app.get("/api/assignment/form/:formId", getFormbyId);
    app.put("/api/assignment/form/:formId", updateForm);
    app.delete("/api/assignment/form/:formId", deleteForm);


    var model = model;

    function createForm(req, res) {
        var newForm = req.body;
        var userid = req.params.userId;
        newForm.userId = userid;
        res.json(model.createForm(newForm));
    }

    function getForms(req, res) {
        model.findAll();
    }

    function getFormbyId(req, res) {
        var formid = req.params.formId;
        var form = model.findFormById(formid);
        res.json(form);
    }

    function getFormbyFormname(req, res) {
        var formname = req.params.formname;
        var form = model.findFormByFormname(formname)
        res.json(form);
    }


    function updateForm(req, res) {
        var formid = req.params.formId;
        var updatedbody = req.body;
        updatedbody._id = formid;
        res.json(model.updateForm(updatedbody));
    }


    function deleteForm(req, res) {
        var formid = req.params.formId;
        res.json(model.deleteFormById(formid));
    }
};