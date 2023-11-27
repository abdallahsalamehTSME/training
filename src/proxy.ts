import { clientMaps as cubesAppClientMaps } from 'cubes-app'
import { clientMaps as cubesUiClientMaps } from 'cubes-ui'
//todo: import your app proxy imports here..
// import { myProxy } from './app/repository/proxy/myProxy.proxy'
import { myUser } from './app/repository/proxy/user.proxy'
//
const clientMaps = {
  ...cubesUiClientMaps,
  ...cubesAppClientMaps,
  //todo:export your proxies here..
  //myProxy,
  myUser
}
export { clientMaps }
export type TClients = typeof clientMaps
