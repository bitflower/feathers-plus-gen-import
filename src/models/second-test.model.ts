
// secondTest-model.ts - A Mongoose model
import { App } from '../app.interface';
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// !<DEFAULT> code: mongoose_schema
import mongooseSchema from '../services/second-test/second-test.mongoose';
// !end
// !code: mongoose_imports // !end
// !code: mongoose_init // !end

let moduleExports = function (app: App) {
  let mongooseClient = app.get('mongooseClient');
  // !code: mongoose_func_init // !end

  // !<DEFAULT> code: mongoose_client
  const secondTest = new mongooseClient.Schema(mongooseSchema, { timestamps: true });
  // !end

  let existingModel = mongooseClient.models['secondTest']; // needed for client/server tests
  let returns = existingModel || mongooseClient.model('secondTest', secondTest);

  // !code: mongoose_func_return // !end
  return returns;
};
// !code: mongoose_more // !end

// !code: mongoose_exports // !end
export default moduleExports;

// !code: mongoose_funcs // !end
// !code: mongoose_end // !end
