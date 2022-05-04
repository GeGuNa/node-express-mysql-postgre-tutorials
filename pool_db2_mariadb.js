var express = require('express');
var app = express();
//var mysql2 = require('mysql');
var mysql2 = require('mariadb');




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


async function mysql_query(sql) {

return await pool2.query(sql, function (error, results, fields) {
	return results; 
});

}



app.get('/i8888', async(req,res) => {

res.set('content-type','text/html')

//var cseq = await asyncFunction22('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query44('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query3333('SELECT * FROM `user` WHERE `id` = 14');
var cseq = await mysql_query('SELECT * FROM `user` WHERE `id` = 14');



console.log(cseq[0]);

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


/*



mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'mydb.com', user: 'myUser', connectionLimit: 5});
pool.getConnection()
    .then(conn => {
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          conn.end();
        })
    }).catch(err => {
      //not connected
    });

*/

    



async function mysql_query3(sql) {

try {

return await pool2.query(sql);

} catch(err){

if (err)throw err;

}  finally {
	console.log('endd');
}

}




app.get('/i88', async(req,res) => {

res.set('content-type','text/html')

//var cseq = await asyncFunction22('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query44('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query3333('SELECT * FROM `user` WHERE `id` = 14');
var cseq = await mysql_query3('SELECT * FROM `user` WHERE `id` = 14');



console.log(cseq[0]);

//const r22 = await mysql_query2('SELECT 1 as val');




/*
await pool2.query('SELECT * FROM `user` WHERE `id` = "14"', function (error, results, fields) {
	console.log(results);
});
*/


res.end();
});



/////////////////


async function mysql_query4(sql) {

console.log(await pool2.query(sql));

}



async function asyncFunction22(sql) {
  let conn;
  try {

	conn = await pool2.getConnection();
	const rows = await conn.query(sql);
	// rows: [ {val: 1}, meta: ... ]

	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	// res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
return rows;
  } finally {
	if (conn) conn.release(); //release to pool
  }
}


async function mysql_query44(sql) {

return await pool2.query(sql);

}



async function mysql_query3333(sql) {

try {

return await pool2.query(sql);

} catch(err){

if (err)throw err;

}  finally {
	console.log('end');
}

}


app.get('/i8', async(req,res) => {

res.set('content-type','text/html')

//var cseq = await asyncFunction22('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query44('SELECT * FROM `user` WHERE `id` = 14');
//var cseq = await mysql_query3333('SELECT * FROM `user` WHERE `id` = 14');



console.log(cseq[0]);

//const r22 = await mysql_query2('SELECT 1 as val');




/*
await pool2.query('SELECT * FROM `user` WHERE `id` = "14"', function (error, results, fields) {
	console.log(results);
});
*/


res.end();
});






app.get('/i7', async(req,res) => {

res.set('content-type','text/html')

//console.log(await pool2.query('SELECT * FROM `user` WHERE `id` = 14'));

const r22 = await mysql_query3('SELECT * FROM `user` WHERE `id` = 14');
//const r22 = await mysql_query2('SELECT 1 as val');


console.log(r22);


/*
await pool2.query('SELECT * FROM `user` WHERE `id` = "14"', function (error, results, fields) {
	console.log(results);
});
*/


res.end();
});



app.get('/i6', async(req,res) => {

res.set('content-type','text/html')

//console.log(await pool2.query('SELECT * FROM `user` WHERE `id` = 14'));

const r22 = await mysql_query2('SELECT * FROM `user` WHERE `id` = 14');
//const r22 = await mysql_query2('SELECT 1 as val');


console.log(r22[0].nick);


/*
await pool2.query('SELECT * FROM `user` WHERE `id` = "14"', function (error, results, fields) {
	console.log(results);
});
*/


res.end();
});



app.get('/i5', (req,res) => {

res.set('content-type','text/html')

pool2.query('select * from guest',  (error, results) => {
   
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
