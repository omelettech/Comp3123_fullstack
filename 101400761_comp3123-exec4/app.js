const express = require("express"); 
const app = express(); 
const port = 8000;

//import router module from route.js file 
const routes = require("./route");

app.use("/", routes);

//PORT 

//Starting a server 
app.listen(port, () => { 
  console.log(`app is running at ${port}`); 
});

//http://localhost:8000/user/john/doe