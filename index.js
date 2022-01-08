const serverless = require('@serverless-devs/fc-http');
const Application = require('@waline/vercel');

const app = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

exports.handler = serverless(app);
