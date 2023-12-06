const express =  require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());
const port = process.env.port || 5000
const employees = [
    { IDemp : 1 ,  fullName : "bernou adem" , Departement :  "Finance" } ,
    { IDemp : 2 ,  fullName : "bernou yazid" , Departement :  "IT" } ,
    { IDemp : 3 ,  fullName : "adami khaoula" , Departement :  "DRH" } ,
]
app.get('/' , (req , res ) =>  {
    res.send('hello my friend , I am BERNOU Adem');
});

app.get('/api/employees' , (req , res) => {
     res.send(employees);
});
app.get('/api/employees/:id' , (req , res)=> {
    res.send(req.params.id)
});
app.get('/api/employees/:name/:age' , (req , res)=> {
    res.send(req.params)
});

app.post('/api/employees' , (req , res) => {
    const schema =  {
        IDemp : Joi.number().integer().required(),
        fullName : Joi.string().min(3).required() ,
        Departement :  Joi.string().min(3).required() ,
    }
    const joiError =  Joi.validate(req.body , schema);
    console.log(joiError);
    
    const employee = {
        IDemp : req.body.IDemp ,
        fullName : req.body.fullName ,
        Departement : req.body.Departement
    }
    employees.push(employee);
    res.json(employee);
});

app.listen(port  , ()=> {
    console.log(" running in "+port)
});

