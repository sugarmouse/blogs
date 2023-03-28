import { AppDataSource } from "./data-source";
import { Post } from "./entity/Post";

AppDataSource.initialize().then(async (connection) => {

    await connection.manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => new Post({
        title: `post${i}`,
        content: `这是我的第${i}篇博客`
    })));

    const posts = await connection.manager.find(Post);
    console.log('post after blog saved: ', posts);

    connection.destroy();

}).catch(error => console.log(error));
