const express = require("express");
const axios = require("axios");
const Users = require("../models/Users.model");


const fetchAllUser = async (req, res) => {
    try {
        const users = await Users.find({});
        res.send(users);
    } catch(err) {
        next(err);
    }
}

const createUser = async (req, res) => {
    console.log("Creating User");
}

const updateUser = async (req, res) => {
    console.log("Updating User......");
}

const deleteUser = async (req, res) => {
    console.log("Deleting User.....");
}


module.exports = {
    fetchAllUser: fetchAllUser,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
};