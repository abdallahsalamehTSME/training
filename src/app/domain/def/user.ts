import { Base } from 'cubes'
import { type IUser } from '../meta/i-user'
class User extends Base<IUser, 'userEmail'> implements IUser {
  userName!: string
  userEmail!: string

  deserialize({ userName = '', userEmail = '' }: Partial<IUser> = {}): void {
    this.userName = userName
    this.userEmail = userEmail
  }
}
export { User }
