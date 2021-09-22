const path = require('path');
const express= require('express');
app=express();
app.use(express.static('./dist/tree'));
app.get('/', function(request,response) {
	response.sendFile(path.join(__dirname,"/dist/tree/index.html"));
});
app.listen(process.env.PORT||7005,function(){
	console.log("the server is running on port %s" ,this.address().port);
});


