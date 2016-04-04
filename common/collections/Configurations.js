import {RJCollection} from '/lib/RJCollection';
import {Settings} from '/lib/Settings';

let Configurations = new RJCollection("configurations");
export const Configuration = new Settings(Configurations);