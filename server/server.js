const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();

const {authorRouter} = require('./routes/authors.routes')

require('./config/mongoose.config');

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

app.use(express.json());

app.use('/api/authors', authorRouter)

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);