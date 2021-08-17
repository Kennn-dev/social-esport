import { ComponentType, ReactNode } from 'react';
export interface RoutesType {
  path: string;
  key: string;
  exact: boolean;
  component: ComponentType<any>;
  routes?: RoutesType[];
}