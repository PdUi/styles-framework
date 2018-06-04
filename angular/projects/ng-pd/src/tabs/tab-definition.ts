import { DisplayStrategy } from '../common/display-strategy';

export interface ITabDefinition {
  data?: any;
  displayStrategy: DisplayStrategy;
  isCurrent?: boolean;
}
