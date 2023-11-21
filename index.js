const express =  require('express');
const app = express();
const port = process.env.port || 5000

app.get('/' , (req , res ) =>  {
    res.send('hello my friend , I am BERNOU Adem');
});

app.get('/api/employees' , (req , res)=> {
    res.send(['adem , ayoub , yazid , khaoula'])
});
app.get('/api/employees/:id' , (req , res)=> {
    res.send(req.params.id)
});
app.get('/api/employees/:name/:age' , (req , res)=> {
    res.send(req.params)
});


app.listen(port  , ()=> {
    console.log(" running in "+port)
});

