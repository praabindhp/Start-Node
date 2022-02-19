(function (exports, require, module, __filename, __dirname){

    console.log(__filename);
    console.log(__dirname);

    var url = 'http://mylogger.io/log';

    function log(message){
        // Send HTTP Request For Log
        console.log(message);
    }

    module.exports = log;

    module.exports.log = log;
    // module.exports.endPoint = url;

    exports.log = log;

    exports = log; //module.export
})
