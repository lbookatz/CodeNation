const { Sequelize,DataTypes,Op } = require("sequelize");
const sequelize = new Sequelize("mysql://root:Sjeecbbb1@localhost:3306/master24");

const Location = sequelize.define("location", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{}) ;

const Monster = sequelize.define("monster", {
name : {
    type: DataTypes.STRING,
    allowNull: false
},
location_id:{
    type:DataTypes.INTEGER,
    refrences:{
        model: "location",
        key: "id"
    }
}
});

const run = async () => {
    console.log("test")
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        // await Sequelize.afterSync();

        const york = await Location.create({name:"York"});
        const dickturpin = await Monster.create({name:"Dick Turpin", location_id: york.id});

        const monster = await Monster.findOne({
            where:{
                location_id:1
            }
        });

        const monsterall = await Monster.findAll();

        console.log(monster)
        console.log(monsterall)

        await sequelize.close();
    } catch(error) {
        console.log(error);
    }

    
}

run();