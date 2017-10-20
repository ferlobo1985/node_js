const express = require('express');
const formidable = require('express-formidable');
const hbs = require('express-handlebars');
const cloudinary = require('cloudinary');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

cloudinary.config({ 
    cloud_name: 'dil8ipyne', 
    api_key: '837299797429715', 
    api_secret: 'BrdLrtL6cnh9t2G45QTsfBrfK7w' 
});
  
  
const app = express();

////######### HBS SETUP ############/////
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(formidable({
    multiples:true
}))

// GET
app.get('/', (req, res) => {
    res.render('home')
});

//POST
app.post('/api/uploads',(req, res) =>{

    //console.log(req.fields);
    //console.log(req.files);
    cloudinary.uploader.upload(req.files.image.path,(result)=>{
        console.log(result);
        res.status(200).send('ok');
    },{
        public_id: `${Date.now()}_${path.parse(req.files.image.name).name}`,
        transformation:[
            {width:400,height:400,gravity:"face",crop:"crop"}
        ],
        resource_type: 'auto'
    })


    
})


app.listen(port,()=>{
    console.log(`Started on port ${port}`)
});