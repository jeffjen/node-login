"use strict"

var Promise = require("promise");

var model = require("../model/");

model.set("debug", true);

module.exports.setup = function() {
    function do_setup(ok, grr) {
        const mongo_uri = "mongodb://localhost/account";
        var db_conn = new model.Connection(mongo_uri);

        db_conn.on("mongoose::err", function mongoose_err(error) {
            // Error connecting to mongodb
            console.log(error);
            grr(err);
        });

        db_conn.on("mongoose::conn", function mongoose_conn(conn) {
            ok(conn);
        });
    }
    return new Promise(do_setup);
};
