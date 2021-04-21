import Server2 from './clases/server';
import {router } from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server2.instance;
//body parser
server.app.use( bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({origin:true, credentials:true}));

//rutas de srvicios
server.app.use('/', router);

server.start( () =>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
