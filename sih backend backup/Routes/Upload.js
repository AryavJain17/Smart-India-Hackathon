const router=require('express').Router();
const upload=require('../Controllers/MulterConfig')
const  model=require('../Db/Models/Uploads')

router.post('/',upload.single('productImage'),async(req,res,next)=>{
     var data ={
      productName: req.body.productName,
      description: req.body.description,
      sellingPrice: req.body.sellingPrice,
  filename: req.file.filename,
  path: `C:/Users/salman/Desktop/sih frontend/Smart-India-Hackathon/public/imgs/${req.file.filename}`,
    }

// console.log(data);
// console.log(req.body);
// console.log(req.file);
  await model(data).save().then(()=>{
   res.status(200).json({status:"success"})
  })
  .catch((error)=>{
res.status(500).json({status:"internal server error"})

  })

})

module.exports=router