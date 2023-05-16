const express = require("express");
const axios = require("axios");
const Users = require("../models/Users.model");
const Faction = require("../models/Factions.model");


const fetchAllUser = async (req, res, next) => {
    try {
        const users = await Users.find({});
        res.send(users);
    } catch(err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    console.log("Creating User");
};

const updateUser = async (req, res, next) => {
    const user = req.body;
    const { email } = user;
    console.log(user);
    
    const domain = email.substring(email.lastIndexOf("@") + 1);
    const newUser = new Users(user);

    try {
        const savedUser = await newUser.save();
        const faction = await Faction.findOneAndUpdate(
            {
                domain
            },
            {
                $push: { members: savedUser._id } 
            }, 
            { upsert: true, new: true }
        );
        res.send({ savedUser, faction });
    } catch (err) {
        res.status(409).send("User with email address already exists ");
    }

    next(err);
};

const deleteUser = async (req, res, next) => {
    try {
        await Users.deleteMany({});
        res.send("Deleted all users");
    } catch(err) {
        next(err);
    }
};


module.exports = {
    fetchAllUser: fetchAllUser,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
};