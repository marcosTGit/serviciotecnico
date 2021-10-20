var ping = require('ping');
//000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000

exports.index = async(req, res) =>{
    
    // var exec = require('child_process').exec;
    // var nbt = exec('nbtstat -a 192.168.1.1');
    // /*var ping = exec('cmd /C ping 127.0.0.1');*/
    // nbt.stdout.on('data', function (data) {
        // equipo=data.split('---------------------------------------------');
        // console.log(equipo.length);
        // // equipo_nombre=equipo[1].split('<');
        // // mac=data.split('=');
        

        // // console.log(mac[1]);
        
        // // console.log(equipo_nombre.length);
        // // console.log(equipo_nombre[0]);
    // });



    // var cfg = {
    //     timeout: 10,
    //     // WARNING: -i 2 may not work in other platform like windows
    //     extra: ['-n', '1'],
    // };
    // desde=1;
    // hasta=100;
    // while (desde<=hasta){
        
    //     host='192.168.1.'+desde;
    //     let res = await ping.promise.probe(host,cfg);
    //     var msg = res.alive ? 'host ' + res.host + ' is alive' : 'host ' + res.host + ' is dead';
    //     console.log(msg);
    //     desde=desde+1;
    // }

    res.render('scan_red');
}
