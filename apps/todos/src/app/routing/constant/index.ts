import { findLastKey } from 'lodash';

import { GlobalRouterPath, GlobalRouterPathInfo } from './globalRoute';
import { RoutePathInfo } from './interface';
import { WelcomeRouterPath, WelcomeRouterPathInfo } from './welcomeRoute';

const RouterPath = {
  ...GlobalRouterPath,
  ...WelcomeRouterPath,
};

const RouterPathInfo = {
  ...GlobalRouterPathInfo,
  ...WelcomeRouterPathInfo,
};

type RouterKey = keyof typeof RouterPathInfo;

const getRouterPathInfo = (path: string): RoutePathInfo => {
  const routerKey = findLastKey(
    RouterPath,
    (route) => route === path
  ) as RouterKey;
  return RouterPathInfo[routerKey];
};

export { RouterPath, RouterPathInfo, getRouterPathInfo };
