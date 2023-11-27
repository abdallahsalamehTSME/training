import { profilePage } from 'cubes-app'
import { sessionRoutes } from 'cubes-ui'

const Index = () => import('./presentation/pages/index/index.vue')
const User = () => import('./presentation/pages/user/index.vue')

const indexRoute = {
  path: '/',
  name: 'index',
  component: Index,
  meta: {
    title: { en: 'index', ar: 'index' },
    transition: 'slide'
  }
}
const userRoute = {
  path: '/user',
  name: 'user',
  component: User,
  meta: {
    title: { en: 'user', ar: 'user' },
    transition: 'slide'
  }
}
const routes = [
  indexRoute,
  userRoute,
  ...sessionRoutes,
  //todo: add your routes here..
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
if (window['configure']().secure) routes.splice(routes.length - 2, 0, profilePage as any)
export default routes
