const db = require('./db');


/* INSERT
var nwdata = [
{
    name: "Battlefield",
    price: 99.99
},
{
    name:"Pro Evolution Soccer 2021",
    price: 349.99
},

]

db.insert(nwdata).into("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*SELECT
db.select('*').table("games").then(data => {
    console.log(data);
}).catch(err =>{
    console.log(err);
});
*/ 

/* NESTED QUERIES
db.insert({name: "Pokemon", price: 14.99}).into("games").then(data =>{
   db.select('*').table("games").then(data => {
        console.log(data);
    }).catch(err =>{
        console.log(err);
    });
}).catch(err =>{
    console.log(err);
});
*/

/*WHERE
db.select(["id", "name"]).whereRaw("price > 300").table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/

/*DELETE
db.where({id: 3}).delete().table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
});
*/

/*UPDATE
db.where({id: 4}).update({price: 99.90}).table("games").then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});
*/

/*ORDERBY (desc or asc)
db.select().table("games").orderBy("name", "desc").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
});
*/

/* ASSOCIATED INSERTS
db.insert({
    name: "Rockstar",
    game_id: 2
}).table("developers").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})
*/
/* JOIN (innerJoin, rightJoin, leftJoin)
db.select().table("games").innerJoin("developers", "developers.game_id", "games.id").then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});

db.select(["games.*", "developers.name as estudio"]).table("games").innerJoin("developers", "developers.game_id", "games.id").then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});
*/



