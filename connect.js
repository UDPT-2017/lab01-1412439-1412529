/**
 * Created by meo on 4/15/2017.
 */
var pg = require('pg');

pg.defaults.ssl = true;
pg.connect("postgres://rwqofhotvaiztw:189237b5372f6aa2d15585cd06b0a0224d86c2cd3bef54e048ca2b55c2f60a6b@ec2-23-23-111-171.compute-1.amazonaws.com:5432/d8orgaldunjm6c", function(err, client) {
    if (err) throw err;
    console.log('Connected to postgres! Getting schemas...');

    client.query("update albums set data='{0,0,0,0,0,0}' where author='albums1' ",function(err,result){
        //done(err);
if(err){
    return err;
}
        console.log('success');


    });
    client.query("update albums set data='{0,0,0,0,0,0}' where author='albums2' ",function(err,result){
        //done(err);
        if(err){
            return err;
        }
        console.log('success');


    });
    client.query("update albums set data='{0,0,0,0,0,0}' where author='albums3' ",function(err,result){
        //done(err);
        if(err){
            return err;
        }
        console.log('success');


    });







});
