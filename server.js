const express= require('express');

const app= express();


app.get('/', (req,res)=>{
    res.send('Kya bolti company kamaliya bahut money......., ae vedeya ');
})

const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})