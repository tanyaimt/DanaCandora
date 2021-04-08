const express = require ("express");
const morgan = require ("morgan");
const flash = require ("connect-flash");
const exphbs = require ("express-handlebars");
const path = require ('path');
const session = require ("express-session");
const MySQLStore = require ("express-mysql-session");

const {database}=require('./keys');
console.log(database);

//init
const app = express();

//settings
app.set('port',process.env.PORT || 3002);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');


//middleware
app.use(session({
    secret:'taroj',
    resave:false,
    saveUninitialized:false,
    store:new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//global variables
app.use((req,res,next) =>{
    app.locals.success=req.flash('success');
    next();
});

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links.js'));

//public
app.use(express.static(path.join(__dirname,'public')));

//starting the server
app.listen(app.get('port'),() => {
    console.log('Server open on port',app.get('port'));
});