const express = require('express');
var router = express.Router();
var dbAccess = require('../utility/dbAccess.js')
var readFile = require('../utility/readfile.js')

router.get('/allData', function (req, res) {
    var sqlString = readFile.readFileFunc("I:/All Code Ever/Projects/Angular/Ramadan-Timing/nodeApp/queries/query1.sql");
    dbAccess.makeDBAccess(sqlString, req, res, (err, recordSet) => {
        if (!err) {
            res.send(recordSet.recordsets[0]);
        }
    });
});
module.exports = router;