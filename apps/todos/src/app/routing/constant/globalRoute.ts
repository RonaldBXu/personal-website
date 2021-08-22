import { RoutePathInfo } from './interface'

enum GlobalRouterPath {
  UNAUTHORIZED = '/unauthorized',
  HOME = '/home',
}

const GlobalRouterPathInfo: Record<keyof typeof GlobalRouterPath, RoutePathInfo> = {
  UNAUTHORIZED: {
    name: 'Loading Page',
  },
  HOME: {
    name: '',
  }
}

export { GlobalRouterPath, GlobalRouterPathInfo }
