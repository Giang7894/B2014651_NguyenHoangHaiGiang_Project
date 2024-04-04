const { ObjectId}= require("mongodb");

class EmployeeService{
    constructor(client){
        this.Employee=client.db().collection("employees");
    }
    extractEmployeeData(payload){
        const employee={
            name: payload.name,
            password: payload.password,
            role: payload.role,
            address: payload.address,
            phone: payload.phone,
        };

        Object.keys(employee).forEach(
            (key)=>employee[key]===undefined && delete employee[key]
        );
        return employee;
    }

    async create(payload){
        const employee=this.extractEmployeeData(payload);
        const result=await this.Employee.insertOne(
            employee
        );
        return result;
    }
    async findByName(name){
        return await this.find({
            name: {$regex: new RegExp(name),$options:"i"},
        });
    }
    
    async find(filter){
        const cursor=await this.Employee.find(filter);
        return await cursor.toArray();
    }
    async findById(id){
        return await this.Employee.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        });
    }

    async update(id,payload){
        const filter={
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        };
        const update=this.extractEmployeeData(payload);
        const result=this.Employee.findOneAndUpdate(
            filter,
            {$set: update},
            {returnDocument: "after"},
        );
        return result;
    }

    async delete(id){
        const result=await this.Employee.findOneAndDelete({
            _id: ObjectId(id).isValid() ? new ObjectId(id): null,
        });
        return result;
    }
}

module.exports=EmployeeService;