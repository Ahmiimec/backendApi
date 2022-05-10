import Sequelize from 'sequelize'
import db from '../models';

const Users = db.Users;
const controller = {};

controller.getAll = async (req, res, next) => {
    try {
        return res.status(200).json({
            message: "Working"
        });
    } catch (err) {
        console.log("------------>", err)
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}

module.exports = controller;