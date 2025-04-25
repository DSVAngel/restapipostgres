const models = require("../database/models");

const createUser = async (req, res) => {
    try {
        const user = await models.User.create(req.body);
        return res.status(201).json({user});
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await models.User.findAll();
        return res.status(200).json({users});
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await models.User.findByPk(id);
        if (user) {
            return res.status(200).json({user});
        }
        return res.status(404).send('Usuario no encontrado');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await models.User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await models.User.findByPk(id);
            return res.status(200).json({user: updatedUser});
        }
        return res.status(404).send('Usuario no encontrado');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await models.User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Usuario eliminado");
        }
        return res.status(404).send("Usuario no encontrado");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};