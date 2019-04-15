
// Configure the Feathers services. (Can be re-generated.)
import { App } from '../app.interface';
import repo from './repo/repo.service';
import secondTest from './second-test/second-test.service';

// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-unused-variable
let moduleExports = function (app: App) {
  app.configure(repo);
  app.configure(secondTest);
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
