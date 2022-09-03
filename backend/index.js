const express = require('express');
const app=express();
const port = 5000;
const userRouter =require('./routers/userRouter');
const subsRouter =require('./routers/subsRouter');
const newsletterRouter =require('./routers/newsletterRouter');
const utilRouter =require('./routers/utils');
const cors = require('cors');

app.use(express.json());

// use to connect the frontend to backend 

app.use(cors({origin:['http://localhost:3000', 'http://localhost:5000', 'http://192.168.18.87:5000']}));

app.use('/user',userRouter);
app.use('/subs',subsRouter);
app.use('/news',newsletterRouter);
app.use('/util',utilRouter);

app.get('/home',(req,res)=>{
    res.send('Namaste Duniyaaa!');
})

app.use(express.static('./static/resources'))

app.listen(port, ()=>{
    
    console.log('the server is started');
});