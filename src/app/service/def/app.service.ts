import { AppServiceBase, IModalManager } from 'cubes-ui'
import { Inject, Service, Singleton } from 'cubes'

import { Application } from '../../domain/def/application'
import type { IAppService, TModalManagerAction } from '../meta/i-app-service'
import { IoCLevelsEnum } from '../../../control'
import type { TApplication } from '../../domain/meta/i-application'
import type { TModalMap } from '../../../control'
import { serviceMap } from '../../../service'
import { TDefaultFormModalDelegateProps } from '../modal-manager/def/form-modal'

@Service(IoCLevelsEnum.DEV_2, serviceMap.AppService.key)
@Singleton
class AppService extends AppServiceBase implements IAppService {
  public readonly id: string = serviceMap.AppService.key
  application!: TApplication

  // instance for repo
  @Inject() ModalManager!: IModalManager<TModalMap>

  protected createApp(config: Partial<TApplication>, state?: TApplication['state']) {
    this.application = new Application({ config, state } as Partial<TApplication>)
  }

  public formModalAsync(props: Partial<TDefaultFormModalDelegateProps> = {}): TModalManagerAction<'formModal'> {
    return new Promise(async resolve => {
      const { next, ...result } = await this.ModalManager.open({ type: 'formModal', ...props })
      next()
      resolve(result as any)
    })
  }
}

export default AppService
