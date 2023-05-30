const UserModel = require("../models/UserModel");
const BaseController = require("./BaseController");

class UserController extends BaseController {


    constructor(req, res) {
        super(req, res);
        this.model = new UserModel();
    }

    

}

module.exports = UserController;