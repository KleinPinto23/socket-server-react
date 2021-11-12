io.on('connection', ( socket ) => { //socket es un cliente que se conectó
    
    //console.log( socket.id ) //Nos devuelve un ID único
    /*socket.emit( 'mensaje-bienvenida', {
        msg: 'Bienvenidos a servidor',
        fecha: new Date()
    } );*/
    //Usualmente se envían objetos pero se puede enviar cualquier cosa, booleanos, números, objetos, cadenas, etc
    //Método para emitir evento, los eventos son instrucciones que se disparan
    //(evento que se dispara, payload o el argumento que se manda al cliente)

    //Escuchar el evento
    socket.on('mensaje-to-server', ( data ) => { //ON es para escuchar, EMIT para emitir
        //console.log('El servidor emitió algo')
        console.log( data );

        socket.emit( 'mensaje-from-server' , data );//Solo le envía al socket
        io.emit( 'mensaje-from-server' , data );//Le envía mensaje a todos los que estén conectados a este namespace
    });        

});