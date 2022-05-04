var express = require('express');
var app = express();
var pg = require('pg');


var pool2 = new pg.Pool({
host:'localhost',
user:'nukriko',
password:'123456',
database:'kukla'
});



pool2.connect(()=>{
	console.log(`connected`);
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mysql_query(sql) {

pool2.query(sql, function (error, results, fields) {
	console.log(results)
});

}





app.get('/mysql_query', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysql_query('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function m2yswqlzz_zwwwq2uer2yq(sql) {

return new Promise((response,reject) => {

pool2.query(sql, function (error, results, fields) {
	
	if (results)response(results)	
	else if (error)reject(error)
	else response('wibzi');
	pool2.end(()=> {  console.log('sql query was finished'); });
});

});


}





app.get('/m2yswqlzz_zwwwq2uer2yq', async(req,res) => {

res.set('content-type','text/html')

const r22 = await m2yswqlzz_zwwwq2uer2yq('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////





async function m2yswqznuklzz_zwwwq2uer2yq333(sql) {



return new Promise((response,reject) => {

pool2.query(sql, function (error, results, fields) {
	
	if (results)response(results)	
	else if (error)reject(error)
	else response('wibzi');

	
});

});


}

app.get('/m2yswqznuklzz_zwwwq2uer2yq333', async(req,res) => {

res.set('content-type','text/html')

const r22 = await m2yswqznuklzz_zwwwq2uer2yq333('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////



async function mysq1l222_q2swwu3er3wwwy2(sql) {

return pool2.query(sql);

}






app.get('/mysq1l222_q2swwu3er3wwwy2', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysq1l222_q2swwu3er3wwwy2('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////




async function mysq1l222_qu3er3y2(sql) {

return pool2.query(sql);

}



app.get('/mysq1l222_qu3er3y2', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysq1l222_qu3er3y2('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////







async function mysq11l222_qu3222er3y2(sql) {

return pool2.query(sql).then((val)=> { return val } );

}



app.get('/mysq11l222_qu3222er3y2', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysq11l222_qu3222er3y2('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////



async function pg_query(sql) {

return await pool2.query(sql);

}


//mysql_query('SELECT * FROM foo');

app.get('/pg_8', async(req,res) => {

res.set('content-type','text/html')


var cseq = await pg_query('SELECT * FROM foo');

console.log(cseq);
//console.log(cseq.rows);  returns entire data in array style
//console.log(cseq.rowCount);  //how many rows are in the table it will return/print





res.end(`pg_testing`);

res.end();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//doesnt works
async function pg24_query(sql) {

return await pool2.query(sql).then(fet => { return fet; });

}



app.get('/pg24_query', async(req,res) => {

res.set('content-type','text/html')

const r22 = await pg24_query('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////





async function mysql_query3(sql) {

try {

return await pool2.query(sql);

} catch(err){

if (err)throw err;

}  finally {
	console.log('endd');
}

}

app.get('/mysql_query3', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysql_query3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function pg_que4ry3(sql) {

try {

return await pool2.query(sql).then((fetch)=> { return fetch });

} catch(err){

if (err)throw err;

}  finally {
	console.log('endd');
}

}


app.get('/pg_que4ry3', async(req,res) => {

res.set('content-type','text/html')

const r22 = await pg_que4ry3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////





async function pg_que4r4444y3(sql) {

return await pool2.query(sql).then((fetch)=> { return fetch });

}




app.get('/pg_que4r4444y3', async(req,res) => {

res.set('content-type','text/html')

const r22 = await pg_que4r4444y3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/i422w84888', async(req,res) => {

res.set('content-type','text/html')
				
const r22 = await pg_que4r4444y3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/iw8888', async(req,res) => {

res.set('content-type','text/html')

const r22 = await mysql_query3('SELECT * FROM foo');

console.log(r22);
//console.log(r22.rows); // returns entire data in array style
//console.log(r22.rowCount);  //how many rows are in the table it will return/print




res.end();
});


pool2.on('end', () => {
	console.log(`connected`);
});



app.listen(8000);
