import { IRepository, TProxyResult, TQuery } from 'cubes-ui'
import { TUserProxy } from '../proxy/user.proxy'
import { IUser } from '@/app/domain/meta/i-user'

interface IUserRepository extends IRepository<TUserProxy> {
  getUserAsync(query: TQuery): TProxyResult<IUser>
}

export type { IUserRepository }
