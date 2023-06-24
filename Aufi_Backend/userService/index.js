const express = require('express');
// const { Storage } = require('@google-cloud/storage');
// const multer = require('multer');

require('dotenv').config();
const MONGO_IP = process.env.MONGO_IP || '';
const MONGO_PORT = process.env.MONGO_PORT || '';
const MONGO_DB = process.env.MONGO_DB || '';

const app = express();

const upload = multer({ storage: multer.memoryStorage() });
const gcpStorage = new Storage();

const mongoose = require('mongoose');

mongoose.connect(`mongodb://${MONGO_IP}:${MONGO_PORT}/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    tops: [String],
    bottoms: [String],
    footwear: [String],
    accessories: [String],
    outfits: [Object]
});

const User = mongoose.model('user', userSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/user', async (req, res) => {
  // get all users in the user collection
  const u = await User.find();
  console.log(u);
  res.send(u);
});

app.post('/user', (req, res) => {
    // get all users in the user collection
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    const u = new User({username : `${username}`, 
                        password : `${password}`,
                        tops: [],
                        bottoms: [],
                        footwear: [],
                        accessories: []
                      });
    u.save();
    res.send('User created');
});

app.post('/uploadClothing', async (req, res) => {
  console.log('Upload Clothing');
  // if (!req.file) {
  //   return res.status(400).send('No file uploaded.');
  // }

  // // Prepare file for upload
  // const bucketName = 'aufi';
  // const filename = Date.now() + req.file.originalname;
  // const bucket = gcpStorage.bucket(bucketName);
  // const file = bucket.file(filename);
  // const blobStream = file.createWriteStream();

  // console.log('Got here');

  // blobStream.on('error', (err) => {
  //   return res.status(500).send(err);
  // });

  // blobStream.on('finish', async () => {
  //   const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${file.name}`);

  //   // After successful upload, update MongoDB
  const publicUrl = req.body.url;
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send('User not found');
    }
    
    const tag  = req.body.tag;

    if (tag === 'top') {
      user.tops.push(publicUrl);
    } else if (tag === 'bottom') {
      user.bottoms.push(publicUrl);
    } else if (tag === 'footwear') {
      user.footwear.push(publicUrl);
    } else if (tag === 'accessory') {
      user.accessories.push(publicUrl);
    } else {
      return res.status(400).send('Invalid tag');
    }

    await user.save();
    
    res.status(200).send({ message: 'File uploaded successfully', fileUrl: publicUrl });
  } catch (err) {
    return res.status(500).send(err);
  }
  // });

  // blobStream.end(req.file.buffer);
});

app.post('/uploadOutfit', async (req, res) => {
  console.log('Upload Outfit')
  const username = req.body.username;
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send('User not found');
    }
    
    const outfit = req.body.outfit;
    user.outfits.push(outfit);

    await user.save();
    res.status(200).send({ message: 'Outfit uploaded!' });
  } catch (err) {
    return res.status(500).send(err);
  }

});

app.get('/user/:username', async (req, res) => {
  console.log('Get user')
  const username = req.params.username;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }

});

app.get('/getOutfit', async (req, res) => {
  const { tag, username } = req.query;

  try {
      const user = await User.findOne({ username: username });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const taggedOutfits = user.outfits.filter((outfit) => outfit.tag === tag);

      if (taggedOutfits.length === 0) {
          return res.status(404).json({ message: 'No outfits found with the provided tag' });
      }

      // Select random outfit from array
      const randomOutfit = taggedOutfits[Math.floor(Math.random() * taggedOutfits.length)];

      res.json(randomOutfit);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = app;
