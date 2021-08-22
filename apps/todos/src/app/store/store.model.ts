import { HomeData } from '../home/home.model';

interface Action {
  type: string;
  data: Record<string, unknown>;
}

interface Store {
  home: HomeData;
}
type GetState = () => Store;

export { Action, Store, GetState };
