//import express ke dalam files
const express = require('express');
//tugaskan variabel app dengan fungsi express
const app=express();

//buat file static untuk alamat frontend
app.use(express.static(__dirname));

app.set('port', (process.env.PORT || 8814));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
