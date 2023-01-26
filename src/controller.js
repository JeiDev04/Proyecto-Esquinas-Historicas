const controller = {}

// import model
var user = require('./models/user');

const { Op } = require("sequelize");

controller.index = (req, res) => {
    
    const data = {
        name: "Jeison Torrealba",
        age: 20,
        city: "Caracas"
    }

    res.json(data);

}

controller.list = async (req, res) => {

    try {
        const response = await user.findAll()
        .then(function(data){
            const res = {
                success: true, 
                message: "Load successful", 
                data: data
            }
            return res;
        })
        .catch(error => {
            const res = {success: false, error: error}
            return res;
        })

        return res.json(response);

    } catch (error) {
        console.log("Error controller.list");
        console.log(error);
    }
}

controller.create = async (req, res) => {
    try {
        const response = await user.create({
            email: "carlos@bs.com",
            password: "rinoceronte.3"
        })
        .then(function(data){
            const res = {
                success: true, 
                message: "Create successfull", 
                data: data
            }
            return res;
        })
        .catch(error => {
            const res = {success: false, error: error}
            return res;
        });

        res.json(response);

    } catch (error) {
        console.log(error);
    }
}

controller.update = async (req, res) => {

    try {
        const iduser = 1;

        const response = await user.update({
            email: "ramirez@usm.com",
            password: "software2"
        },{
            where: {
                id: iduser 
            }
        })

        .then(function(data){
            const res = {
                success: true, 
                message: "Update successfull", 
                data: data
            }
            return res;
        })
        .catch(error => {
            const res = {
                success: false, 
                error: error
            }
            return res;
        });

        res.json(response);

    } catch (error) {
        console.log(error);
    }

}

controller.get = async (req, res) => {

    try {

        const { id } = req.params;

        const response = await user.findAll({
            where: { id: id }
            // where: {
            //     id: [1, 2, 3]
            // }
            // where: {
            //     email: {
            //         [Op.like]: "%alejan%"
            //     }
            // }
        })
            .then(function(data) {
                const res = {
                    success: true,
                    data: data
                };
                return res;
            })
            .catch(error => {
                const res = {
                    success: false,
                    error: error
                };
                return res;
            });
        res.json(response);

    } catch (error) {
        console.log(error);
    }

}

controller.delete = async (req, res) => {

    try {
        const { id } = req.params;

        const response = await user.destroy({
            where: {id: id}
        })
        .then(function(data){
            const res = {seccess: true, data: data, message: "Delete successful"}
            return res;
        })
        .catch(error => {
            const res = {success: false, error: error}
            return res;
        });

        res.json(response);

    } catch (error) {
        console.log(error);
    }
    
}


module.exports = controller;