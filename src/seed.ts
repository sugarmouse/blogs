import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async (connection) => {
    console.log('seeding data into DB...');


    console.log('seeding completed');
    connection.destroy();
}).catch(error => console.log(error));
