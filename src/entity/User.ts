import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { getDatabaseConnection } from "@/lib/getDBConnection";
import md5 from "md5";

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


  errors = {
    password: [] as string[],
    username: [] as string[],
    passwordConfirmation: [] as string[],
  };
  password: string;
  passwordConfirmation: string;

  async validate() {
    const trimedUsername = this.username.trim();

    if (trimedUsername.length === 0) {
      this.errors.username.push('用户名不能为空');
    }
    if (!/^[a-zA-Z0-9_]+$/.test(trimedUsername)) {
      this.errors.username.push('用户名格式不正确，只能包含字母数字和下划线');
    }
    if (trimedUsername.length > 42) {
      this.errors.username.push('用户名太长');
    }
    if (trimedUsername.length <= 3) {
      this.errors.username.push('用户名太短');
    }
    if (!this.password || this.password === '') {
      this.errors.password.push('密码不能为空');
    }
    if (this.password !== this.passwordConfirmation) {
      this.errors.passwordConfirmation.push('密码不匹配');
    }
    const isUserDupicated = !!(await (await getDatabaseConnection()).manager.findOne(User, {
      where: { username: this.username },
    }));
    if (isUserDupicated) {
      this.errors.username.push('用户名已存在，换一个试试吧');
    }

  }

  hasErrors() {
    return !!Object.values(this.errors).find((v) => v.length > 0);
  }

  @BeforeInsert()
  generatePasswordDigest() {
    this.password_digest = md5(this.password);
  }

}
