const express = require('express'); //Servidor de Express
const http = require('http'); //Servidor de Sockets
const socketio = require('socket.io'); //Configuración de socket server
const path = require('path');
const Sockets = require('./sockets');

class Server{

    constructor () {

        this.app = express();
        this.port = process.env.PORT;

        //https Server
        this.server = http.createServer( this.app );

        //Configuraciones de sockets
        //this.io = socketio( this.server, { /*Configuraciones*/ } );
        this.io = socketio(this.server, {cors: {
            origin: "*",
            methods: ["GET", "POST"]
          }});

    }



    middlewares() {
        //Desplegar directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' )) )
    }



    configurarSockets(){
        new Sockets( this.io );
    }



    execute(){
        //Inicializar Middlewares
        this.middlewares();

        //Inicializar sockkets
        this.configurarSockets();

        //Inicializar Server
        this.server.listen( this.port, () => {
            console.log( 'Server corriendo en puerto:', this.port );
        });
    }


}


module.exports = Server;