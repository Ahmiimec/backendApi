import Sequelize from 'sequelize'
import db from '../models';

const Users = db.users;
const Stores = db.stores;

const controller = {};

controller.getAll = async (req, res, next) => {
    try {
        let data={}
        const allUsers = await Users.findAll({
            raw:true
        })
        const allStores= await Stores.findAll({
            raw:true
        })
        data.Stores=allStores
        data.Users=allUsers
        return res.status(200).json({
            result:data
        });
    } catch (err) {
        console.log("------------>", err)
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}

module.exports = controller;