const express = require('express');
const app = express();
const PORT = 3001;


//initializing middleware
app.use(express.json({extended:false}));

app.use("/api/users", require("./routes/users"));

//app listening
app.listen(PORT, ()=>{
  console.log(`app is listening at port ${PORT}`);
});