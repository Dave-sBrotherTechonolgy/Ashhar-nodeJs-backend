const Student = require("../../databasevariables/studentdb");

const result = {
    get: async(req,res) => {
        try {
            var students =await Student.find();
            res.send({stuntCount: students.length ,
            students}) ;
        } catch (error) {
            res.json({status:"Internel server error",
            msg:"something wrong in backend"});
        }
    }
}

module.exports = result;