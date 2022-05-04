var express = require('express');
var app = express();
var pg = require('pg');


var pool2 = new pg.Client({
host:'localhost',
user:'nukriko',
password:'123456',
database:'kukla'
});



pool2.connect(()=>{
	console.log(`connected`);
});


function mysql_query(sql) {

pool2.query(sql, function (error, results, fields) {
	console.log(results)
});

}


async function pg_query(sql) {

return await pool2.query(sql);

}


//mysql_query('SELECT * FROM foo');

app.get('/pg_8', async(req,res) => {

res.set('content-type','text/html')


var cseq = await pg_query('SELECT * FROM foo');

//console.log(cseq);
//console.log(cseq.rows);  returns entire data in array style
//console.log(cseq.rowCount);  //how many rows are in the table it will return/print





res.end(`pg_testing`);

res.end();
});


//doesnt works
async function pg24_query(sql) {

return await pool2.query(sql).then(fet => { return fet; });

}



app.get('/i8888', async(req,res) => {

res.set('content-type','text/html')

const r22 = await pg24_query('SELECT * FROM foo');

//console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});



///////////////////


async function mysql_query3(sql) {

try {

return await pool2.query(sql);

} catch(err){

if (err)throw err;

}  finally {
	console.log('endd');
}

}




async function pg_que4ry3(sql) {

try {

return await pool2.query(sql).then((fetch)=> { return fetch });

} catch(err){

if (err)throw err;

}  finally {
	console.log('endd');
}

}

async function pg_que4r4444y3(sql) {

return await pool2.query(sql).then((fetch)=> { return fetch });

}





app.get('/i422w84888', async(req,res) => {

res.set('content-type','text/html')

const r22 = await pg_que4r4444y3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});





app.get('/iw8888', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysql_query3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});






app.listen(8000);
