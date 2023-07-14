const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('dotenv').config();
const MONGO_IP = process.env.MONGO_IP || '';
const MONGO_PORT = process.env.MONGO_PORT || '';
const MONGO_DB = process.env.MONGO_DB || '';

const app = express();
app.use(express.json());


mongoose.connect(`mongodb://${MONGO_IP}:${MONGO_PORT}/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tops: [String],
    bottoms: [String],
    footwear: [String],
    accessories: [String],
    outfits: [Object]
});
const User = mongoose.model('User', UserSchema, 'users');

app.post('/signup', async (req, res) => {
  try {

    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({
        "status" : 400,
        "message" : 'This username is already taken!'});
    }

    const { username, password } = req.body;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).send({"status": 400, "message": "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send({"status": 201, "message": "User created successfully"});
  } catch (error) {
    res.status(500).send({"status": 500, "message": `Error creating user`});
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send({"status": 400, "message": "User does not exist"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({"status": 400, "message": "Invalid credentials"});
    }

    res.status(200).send({"status": 200, "message": "User logged in successfully"});
  } catch (error) {
    res.status(500).send({"status": 500, "message": `Error logging in user`});
  }
});

module.exports = app;
