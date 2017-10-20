const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

////######### HBS SETUP ############/////
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

app.use(bodyParser.json());

// GET
app.get('/', (req, res) => {
    res.render('home')
});

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}_${file.originalname}`)
    }
})


app.post('/api/uploads',(req, res) =>{

    const upload = multer({
        storage,
        limits:{fileSize:5000000000},
        fileFilter:(req,file,cb)=>{

            const ext = path.extname(file.originalname)
            if(ext !== '.jpg' && ext !== '.png'){
                return cb(res.status(400).end('only jpg, png is allowed'),false);
            }

            cb(null,true)
        }
    
    }).fields([
        {name:'image',maxCount:2},
        {name:'image2',maxCount:10}
    ]);
    
    upload(req,res, function(err){
        if(err){
            return res.status(400).end('error')
        }
        res.end('file uploaded')
    })
    //res.status(200).send('ok');
})


app.listen(port,()=>{
    console.log(`Started on port ${port}`)
});