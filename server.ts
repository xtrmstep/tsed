import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware, registerValue} from "@tsed/common";
import "@tsed/swagger";
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
import {Config} from "./types/Config";
const rootDir = __dirname;

@ServerSettings({
  rootDir,
  mount: {
    "/": "./controllers/*.ts"
  },
  acceptMimes: ["application/json"],
  swagger: [
    {
      path: "/api-docs"
    }
  ]
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): any|Promise<any> {
      this
        .use(GlobalAcceptMimesMiddleware)
        .use(cookieParser())
        .use(compress({}))
        .use(methodOverride())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
          extended: true
        }));

      return null;
  }
}

registerValue(Config, require("./config.json"))

new Server().start();