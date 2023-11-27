/**
 * @summary training entry point.
 */

import { __registerTypes__, ready } from 'cubes'

import { App } from './control'

//@ts-ignore
declare var __version__: string
declare var __webpack_public_path__: string
declare var __runtime_public_path__: {}
__webpack_public_path__ = __runtime_public_path__['training'] || '/'
const version = __version__

//@ts-ignore
const contextSample = __webpack_exports__
const construct = __registerTypes__.call(contextSample)
ready(
  () => construct(),
  () => 'n' in contextSample
)

export { App, version } // module entry override for development!
