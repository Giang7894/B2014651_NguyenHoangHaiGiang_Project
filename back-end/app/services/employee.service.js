const { ObjectId}= require("mongodb");

class EmployeeService{
    constructor(client){
        this.Employee=client.db().collection("employees");
    }
}

module.exports=EmployeeService;