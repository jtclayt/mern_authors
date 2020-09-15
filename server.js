const express = require('express');
const cors = require('cors');
const ExampleRoutes = require('./server/routes/example.routes');

const app = express();
const PORT = 8000;

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));
ExampleRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
