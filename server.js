const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const mazinoRouter = require('./routes/mazinoRoutes');

dotenv.config({ path: './config.env' });

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());

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
app.use('/mazino', mazinoRouter);

// basic sample view
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.status(200).render('mazinoEmail');
});

app.listen(port, () => log(`App listening on port ${port}...`));
