import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity('posts')
export class Post extends BasicEntity {

  @Column('varchar')
  title: string;

  @Column('text')
  content: string;

  @Column('int')
  author_id: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'author_id' })
  author: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

}
