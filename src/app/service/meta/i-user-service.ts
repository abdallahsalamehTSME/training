import { IUser } from '@/app/domain/meta/i-user'
import { UserDc } from '@/app/presentation/components/def/user-dc'
import { ICubesInjectable } from 'cubes'
import { DataController, TProxyResult, ValidationStateEnum } from 'cubes-ui'
import { PropType, Ref } from 'vue'

type validations = {
  states: { name: ValidationStateEnum; email: ValidationStateEnum }
  errorMessages: { name: string[]; email: string[] }
  saved: boolean
}

interface IUserService extends ICubesInjectable {
  dc: DataController<UserDc>
  createUser(): () => Promise<any>
  validations: validations

  getUsersAsync(): Function
  getUserAsync(): Function
  validateUser(): boolean
}

export type { IUserService }
