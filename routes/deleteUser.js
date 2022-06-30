const express = require('express')
const router = express.Router();
const User = require('../models/user')



// delete User With ID Route
router.delete('/deleteUser',(req,res,next)=>{
    const id=req.body.id;
    User.findByIdAndRemove(id)
  .then(()=>{
    console.log("Deleted")
    res.json({ status: 200 })
  })
  .catch((err)=>{
    console.log(err)
    res.json({ status: 400 })
  })
  

})
module.exports = router;