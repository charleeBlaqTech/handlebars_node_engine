const express=require('express');
const fs=require('fs');
const exphbs=require('express-handlebars');
const homeRoutes= require('./routes/homeRoutes')


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))


app.engine('hbs', exphbs.engine({
    extname: '.hbs', defaultLayout:'main',runtimeOptions:{
        allowProtoMethodsByDefault: true,allowProtoPropertiesByDefault:true
    }
}))
app.set("view engine", 'hbs');


// ROUTES
app.use('/', homeRoutes)



const PORT= process.env.PORT || 6000

app.listen(PORT,()=>{  
    console.log(`connected and listening to port ${PORT}`)   
})
