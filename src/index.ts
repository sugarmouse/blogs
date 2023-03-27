import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async (connection) => {

    console.log("connection to database");
    connection.destroy();

}).catch(error => console.log(error));
