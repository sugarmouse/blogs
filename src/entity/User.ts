import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { Post } from "./Post";
import { Comment } from "./Comment";

@Entity('users')
export class User extends BasicEntity {

  @Column('varchar')
  username: string;

  @Column('varchar')
  password_digest: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

}
