import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import detalleRoutes from './routes/detalle.routes'
import userRoutes from './routes/user.routes'
import matriculaRoutes from './routes/matricula.routes'
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});
app.use('/api/auth', authRoutes);
app.use('/api/auth/users', userRoutes);
app.use('/api/auth/matricula' , matriculaRoutes);
app.use('/api/auth/detalle' , detalleRoutes);

export default app;