import { Base } from 'cubes'
import { type IUserDc } from '../meta/i-user-dc'
import { ValidationStateEnum } from 'cubes-ui'
type Person = { name: ValidationStateEnum; email: ValidationStateEnum }
type errorMessages = { name: []; email: [] }

class UserDc extends Base<IUserDc, 'userEmail'> implements IUserDc {
  userName!: string
  userEmail!: string

  deserialize({ userName = '', userEmail = '' }: Partial<IUserDc> = {}): void {
    this.userName = userName
    this.userEmail = userEmail
  }
}
export { UserDc }
