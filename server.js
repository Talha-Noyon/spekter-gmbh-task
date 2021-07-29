const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Order');
require('./models/OrderItems');
// creates default order
// require('./models/Init');

['connecting', 'connected', 'open', 'disconnecting', 'disconnected', 'close', 'reconnected', 'error', 'fullsetup', 'timeout'].forEach(name => {
  mongoose.connection.on(name, err => {
    console.log(new Date().toISOString(), `Mongoose event: ${name} ${err || ''}`);
  }, { useUnifiedTopology: true });
});
mongoose.connect("mongodb+srv://personal:personal@cluster0.mrqxe.mongodb.net/spekter?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));


app.use('/api', require('./routes'));
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
