const app = require('./config/express');

// app.get('/', function(req,res){
//     res.send('hello')
// })

app.listen(8000, () => console.info(`API running on port`));

module.exports = app;