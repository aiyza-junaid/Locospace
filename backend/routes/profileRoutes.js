const User = require('../models/userModel');
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/tokenauthentication')

router.get('/myprofile', authenticateToken, async (req, res) => {

    const id = req.body.id;

try {
      const user = await User.findById(id);

      //not found 
      if(!user){
        res.status(404).json('User not found!');
      }

      if(user){

        // //convert the image buffer to a Base64 string
        // const unit8Array = new Uint8Array(user.profilePicture.data);
        // const base64string = Buffer.from(unit8Array).toString('base64');
        
        // const userDataWithBase64Image = { ...User._doc, profilePicture: base64string };

        // res.status(200).json(userDataWithBase64Image)

        res.status(200).json(user)

      }
    
    } catch (error) {
      console.error('error: not able to get user', error);
      res.status(500).json({ error: 'failed to get user' });
    }
});

router.put('/edit', authenticateToken, async (req, res) => {

    const { id } = req.body.id;
    const {  password, name, email, address, profilePicture, contact } = req.body;
  
    try {
      const updatedFields = { name, email, address, profilePicture, contact };
  
      if (password) {
        updatedFields.password = await bcrypt.hash(password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to update user!" });
    }
});


module.exports = router;