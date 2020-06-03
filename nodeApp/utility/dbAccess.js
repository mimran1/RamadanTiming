const dbConfig = require('../../nodeApp/dbConfig')

//Access the database with confifurations from dbConfig.
//Parameter: sqlString - the sql to run
//           req - the requestor (from controller)
//           res - the response (from controller)
//           callback - put data or error on the callback
module.exports = {
    makeDBAccess: function(sqlString, req, res, callback) {
        var sql = require("mssql/msnodesqlv8");
        console.log('**************** DB ACCESS ****************')
        console.log(module.exports.getDateTime());
        // connect to your database
        sql.connect(dbConfig, function (err) {
    
            
            if (err) console.log('Error (Connection):' + err);
    
            // create Request object
            var request = new sql.Request();
    
            // query to the database and get the records
            request.query(sqlString, function (err, recordset) {
    
                
                console.log('Received query: ' + sqlString)
                if (err) 
                {
                    console.log('Error (Query): ' + err);
                    callback(err);
                }
                
                console.log('Data:')
                console.log(recordset.recordsets[0]);
                console.log('Number of rows: ');
                console.log(recordset.recordsets[0].length)
                callback(null, recordset);
            });
        });
    },

    getDateTime: function() {

        var date = new Date();
    
        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
    
        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
    
        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
    
        var year = date.getFullYear();
    
        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;
    
        var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;
    
        return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
    
    }
}