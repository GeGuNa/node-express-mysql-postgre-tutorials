var express = require('express');
var app = express();
var mysql2 = require('mysql');



var pool2 = mysql2.createConnection({
host:'localhost',
user:'soc_ge',
password:'soc_ge',
database:'soc_ge'
});


pool2.connect((err)=>{

console.log(`test`)

});





///////////

async function m3y2sql_3que2prms4ry(sql) {

return new Promise((res,rej) => {

pool2.query(sql, (err,fetch) => {

if (fetch)return res(fetch);
else return rej(err);

});


});

 

}




/////








///////////////



app.get('/i_22', async(req,res) => {

res.set('content-type','text/html')


var cseq = await m3y2sql_3que2prms4ry('SELECT * FROM `user` WHERE `id` = 14');



console.log(cseq);



res.end();
});





/////////


async function m3y2sql_3que2prms(sql) {

try {
return pool2.query(sql);
} catch(err) {
	if (err)throw err;
}

}


app.get('/i8888', async(req,res) => {

res.set('content-type','text/html')


pool2.query('select * from user where id = 14',  (error, results) => {
   
console.log(results)

});



res.end();
});






app.get('/i535_24', async(req,res) => {

res.set('content-type','text/html')

console.log(await async3Funct3io3n());
  

res.end();
});




app.get('/i55_2', (req,res) => {

res.set('content-type','text/html')

pool2.query('select * from user where id = 14',  (error, results) => {
   
console.log(results)

});
  


res.end();
});




app.get('/i5', (req,res) => {

res.set('content-type','text/html')

pool2.query('select * from user where id = 14',  (error, results) => {
   
console.log(results)

});
  

res.end();
});



app.get('/i4', (req,res)=> {

res.set('content-type','text/html')





res.end();
});





app.get('/index', (req,res)=> {





res.write(`test`);

res.end();
});



app.get('/', (req,res)=> {


res.write(`
<form action="/?" method="post">
name:
<input type="text" name="val"><br>
surname:
<input type="text" name="val2">
</form>
`);

res.end();
});


app.get('/i2', (req,res)=> {

res.set('Content-Type','text/html')

res.write(`
<form action="/?" method="post">
name:
<input type="text" name="val"><br>
surname:
<input type="text" name="val2">
</form>
`);

res.end();
});


app.get('/i3', (req,res)=> {

res.set('content-type','text/html')

res.write(`
<form action="/?" method="post">
name:
<input type="text" name="val"><br>
surname:
<input type="text" name="val2">
</form>
`);

res.end();
});





app.listen(8000);
