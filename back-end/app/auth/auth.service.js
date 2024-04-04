require('mongodb');
class User{
    constructor(client) {
        this.user = client.db().collection("user");
    }

    extractUserData(payload){
        const user={
            id: payload.id,
            email: payload.emails[0].value,
            name: payload.displayName,
        };

        Object.keys(user).forEach(
            (key)=>user[key]===undefined && delete user[key]
        );
        return user;
    }

    async create(payload){
        const user=this.extractUserData(payload);
        const result=await this.user.insertOne(
            user
        );
        return result;
    }

    async find(filter){
        const cursor=await this.user.find(filter);
        return await cursor.toArray();
    }
}

module.exports = User;