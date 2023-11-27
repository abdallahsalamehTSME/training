import { INetworkManager, TProxyResult, TQuery } from 'cubes-ui'
import { Inject, Service, TUID } from 'cubes'
import { repositoryMap, serviceMap } from '../../../service'
import { IUserRepository } from '../meta/i-user-repo'
import { TUserProxy } from '../proxy/user.proxy'
import { IUser } from '@/app/domain/meta/i-user'
import { IoCLevelsEnum } from '@/control'

@Service(IoCLevelsEnum.DEV_2, repositoryMap.MyUserRepository.key)
class MyUserRepository implements IUserRepository {
  @Inject(serviceMap.NetworkManager.key) networkManager!: INetworkManager<TUserProxy>
  public readonly id: TUID = repositoryMap.MyUserRepository.key

  getUserAsync(query: TQuery): TProxyResult<IUser> {
    return this.networkManager.clients.myUser.api.get({ query })
  }

  dispose(): void {}
}

export default MyUserRepository
