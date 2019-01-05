const express = require('express');
const app = express();
const port = 8000;
const file = require(`./routes/ReadWriteLoad.js`);
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
});
const Me = {
    name: 'Srirupa',
    age: 22,
}
file.save(me, (err, res) => {
    console.log('hello');
})