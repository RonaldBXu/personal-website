import { GlobalRouterPath } from './globalRoute'
import { RoutePathInfo } from './interface'

const WelcomeRouterPath = {
  LANDING_PAGE: GlobalRouterPath.HOME,
}

const WelcomeRouterPathInfo: Record<keyof typeof WelcomeRouterPath, RoutePathInfo> = {
  LANDING_PAGE: {
    name: 'Landing Page',
  },
}

export { WelcomeRouterPath, WelcomeRouterPathInfo }
