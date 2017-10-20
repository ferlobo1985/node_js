const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine','hbs');

const urlencodeParser = bodyParser.urlencoded({extended:false})
const jsonParser = bodyParser.json();


// #######  Middleware ###### //
// http://expressjs.com/en/resources/middleware.html //
app.use("/css",express.static(__dirname + '/public/css'))
app.use('/',(req,res,next)=>{
    console.log('someone made a request from:' + req.url)
    res.cookie("cookieName","cookieValue")
    next();
})

// #######  GET ###### //
app.get("/",(req,res)=>{
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/style.css">
            </head>
            <body>
                <h1>My node app</h1>
            </body>
        </html>
    `)
});

app.get("/api/user",(req,res)=>{
    res.send({
        name:"Francis",
        lastname:"Jones"
    })
})


app.get('/enteruser',(req,res)=>{
    res.render('enteruser')
})

app.get('/enteruserjson',(req,res)=>{
    res.render('enteruserjson')
})


// POST
app.post('/enteruser',urlencodeParser,(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    console.log(firstname)
    console.log(lastname)

})

app.post('/enteruserjson',jsonParser,(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    console.log(firstname)
    console.log(lastname)
})


// #######  RENDER FROM TEMPLATE  ###### //
// https://github.com/ericf/express-handlebars
app.get("/user",(req,res)=>{
    res.render('user',{
        title:"User profile",
        name:"Francis",
        lastname:"Jones",
        valid:true,
        pets:['dog','cat','fish'],
        parents:[
            {dad:"Mario",mother:"Martha"}
        ]
    })
})



// #######  Params ###### //
// http://expressjs.com/en/guide/routing.html 

app.get("/api/:user/:id",(req,res)=>{
    let id = req.params.id;
    let username = req.params.user;
    res.send(`
        <html>
            <body>
                <h1>The user id is ${id}, and username is ${username}</h1>
            </body>
        </html>
    `)

})

app.get("/api/car",(req,res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})



const port = process.env.PORT || 3000;
app.listen(port)