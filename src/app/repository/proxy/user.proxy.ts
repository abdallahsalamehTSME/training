import { User } from '@/app/domain/def/user'
import { clientFactory, TEndPoint } from 'cubes-ui'

const { baseURL, api } = window['configure']().network['shared']
const config = { baseURL: `${baseURL}` }

const myUser = () =>
  clientFactory(true, User, config, {
    get: { verb: 'get', template: `.beeceptor.com` } as TEndPoint
  })

export { myUser }

const clientMap = { myUser }
type TUserProxy = typeof clientMap

export type { TUserProxy }
