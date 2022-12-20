const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require("cors");
const app = express();


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');

//Rura para Productos
const productApiRouter = require('./routes/api/productApiRouter')

//Ruta para Usuarios
const userApiRouter = require('./routes/api/userApiRouter')

//Ruta para Grindings
const grindingApiRouter = require('./routes/api/grindingApiRouter')


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);

//Aquí creo la colección de mis recursos de movies (APIs)

app.use('/api', productApiRouter);
app.use('/api', userApiRouter);
app.use('/api', grindingApiRouter);



//Activando el servidor desde express
app.listen('3005', () => console.log('Servidor corriendo en el puerto 3005'));
