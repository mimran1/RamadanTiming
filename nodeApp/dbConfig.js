// config for your database
var config = {
    server: 'localhost\\SQLEXPRESS',
    port: 1433,
    database: 'master',
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }

};

module.exports = config;