import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { BasicEntity } from "./BasicEntity";
import { Post } from "./Post";

@Entity('comments')
export class Comment extends BasicEntity {

  @Column('text')
  content: string;

  @Column('int')
  post_id: number;

  @Column('int')
  user_id: number;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'post_id' })
  post: Post;

}
