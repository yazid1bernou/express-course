const express =  require('express');
const app = express();
app.use(express('json'));
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

    const employee = {
        IDemp : req.body.IDemp ,
        fullName : req.body.fullName ,
        Departement : req.body.Departement
    }
    employees.push(employee);
    res.send(employee);
});

app.listen(port  , ()=> {
    console.log(" running in "+port)
});

