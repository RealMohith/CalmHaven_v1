const db = require("../config");
//add timestamps = true
const People = db.model("User" , 
    {
    name: {
        type: String,
        required: true,
        unique: true
    },
    pass : String ,
    created_at : {
        type : Date , 
        default : Date.now()
    },
    DietProgress : {
        type : Map ,  //week no
        of : Number , //0,1,2
        default : {0:0}
    } 
} );


module.exports = People;
