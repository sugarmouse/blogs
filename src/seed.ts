import { AppDataSource } from "./data-source";
import { Post } from "./entity/Post";
import { User } from "./entity/User";
import { Comment } from "./entity/Comment";

AppDataSource.initialize().then(async (connection) => {
    console.log('seeding data into DB...');

    const { manager } = connection;

    const u1 = new User();
    u1.username = 'tttht';
    u1.password_digest = 'xxxxx';
    await manager.save(u1);

    const p1 = new Post();
    p1.title = 'first blog';
    p1.content = 'new to here';
    p1.author = u1;
    await manager.save(p1);

    const c1 = new Comment();
    c1.content = 'great idea';
    c1.post = p1;
    c1.user = u1;
    await manager.save(c1);

    console.log('seeding completed');
    connection.destroy();
}).catch(error => console.log(error));
