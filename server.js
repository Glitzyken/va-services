const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const mazinoRouter = require('./routes/mazinoRoutes');

dotenv.config({ path: './config.env' });

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

const log = console.log;
const port = process.env.PORT || 8080;

// ROUTES
// clients
app.use('/mazinomakeovers', mazinoRouter);

// basic sample view
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => log(`App listening on port ${port}...`));
