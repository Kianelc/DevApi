const app         = require("express")();
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");

const swaggerUi   = require('swagger-ui-express');
swaggerDocument   = require('./swagger.json');

// Conecta no MongoDB
mongoose.connect("mongodb://localhost:27017/devapi", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

// Carrega o model de Usuário e Conector
require("./models/user");
require("./models/connector");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"), require("./controllers/connectorController"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000);