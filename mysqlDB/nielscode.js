const { Sequelize, DataTypes, Ops } = require("sequelize");
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/master24");
const Location = sequelize.define("location", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});
const Monster = sequelize.define("monster", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "locations",
            key: "id"
        }
    }
}, {});
const run = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Connection established");
	// Create is a combination of build and await save!
        const york = await Location.create({name: "York"});
	console.log(york.id);
        const ghost = await Monster.create({name: "Dick Turpin", location_id: york.id});
	// SELECT * FROM monsters;
	const monsters = await Monster.findAll();
	console.log(monsters);
	// SELECT [...] FROM monsters;
	const oneMonster = await Monster.findAll({
		attributes: ['name']
	});
	console.log(oneMonster);
	// SELECT * FROM monsters WHERE ... LIMIT 1;
	const someMonsters = await Monster.findOne({
		where: {
			location_id: 2
		}
	});
	console.log(someMonsters);
	// To update data
	await Monster.update({ name: "Bob" }, {
	  where: {
	    [Op.or]: [{name: "Dick Turpin"}, {name: "Something"}]
	  }
	});
	// To delete a single record
	/*
	await Monster.destroy({
	  where: {
	    location_id: 2
	  }
	});
	// To delete ALL records
	await Monster.destroy({truncate: true});
	await Location.destroy({truncate: true});
	*/
    } catch (error) {
        console.log(error);
    }
    await sequelize.close();
    console.log("Connection closed");
    process.exit();
}
run();