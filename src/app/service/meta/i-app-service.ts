import { IAppService as ICubesAppService, TModal, TOpenPromise } from 'cubes-ui'

import { TApplication } from '../../domain/meta/i-application'
import { TModalMap } from '../../../control'
import { TDefaultFormModalDelegateProps } from '../modal-manager/def/form-modal'

export type TNoNext<T> = Omit<T, 'next'>

export type TModalManagerAction<T extends keyof TModalMap> = Promise<TNoNext<TOpenPromise<TModal<TModalMap, T>>>>
interface IAppService extends ICubesAppService {
  application: TApplication
  openFormModalAsync(props?: Partial<TDefaultFormModalDelegateProps>): TModalManagerAction<'formModal'>
}

export type { IAppService }
