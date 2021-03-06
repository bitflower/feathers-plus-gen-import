
// Initializes the `secondTest` service on path `/second-test`. (Can be re-generated.)
import { App } from '../../app.interface';

import createService from 'feathers-mongoose';
import createModel from '../../models/second-test.model';
import hooks from './second-test.hooks';
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app: App) {
  let Model = createModel(app);
  let paginate = app.get('paginate');
  // !code: func_init // !end

  let options = {
    Model,
    paginate,
    // !code: options_more // !end
  };
  // !code: options_change // !end

  // Initialize our service with any options it requires
  // !<DEFAULT> code: extend
  app.use('/second-test', createService(options));
  // !end

  // Get our initialized service so that we can register hooks
  const service = app.service('second-test');

  service.hooks(hooks);
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
