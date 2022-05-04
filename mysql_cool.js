var express = require('express');
var app = express();
var mysql2 = require('mysql');


/*

var pool2 = mysql2.createPool({
host:'localhost',
user:'soc_ge',
password:'soc_ge',
database:'soc_ge'
});

*/


//var pool2 = mysql2.createConnection({

var pool2 = mysql2.createPool({
host:'localhost',
user:'soc_ge',
password:'soc_ge',
database:'soc_ge'
});

/*
pool2.connect((err)=>{

console.log(`test`)

});
*/




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


app.get('/i8888', async(req,res) => {

res.set('content-type','text/html')

//var cseq = await asyncFunction22('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query44('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query3333('SELECT * FROM `user` WHERE `id` = 14');
var cseq = await my2sql_3que4ry('SELECT * FROM `user` WHERE `id` = 14');



console.log(cseq);

//const r22 = await mysql_query2('SELECT 1 as val');




/*
await pool2.query('SELECT * FROM `user` WHERE `id` = "14"', function (error, results, fields) {
	console.log(results);
});
*/


res.end();
});



async function asyncFunction() {
  let conn;
  try {

	 conn = await pool2.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	// rows: [ {val: 1}, meta: ... ]

	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	// res: { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } finally {
	if (conn) conn.release(); //release to pool
  }
}





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
