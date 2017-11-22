import * as bodyParser from "body-parser";
import * as express from "express";
import * as session from "express-session";
import config from "./config";

// import routes
import {apiRoutes, appRoutes} from "./routes";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  private public: string = "./dist";

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    // this.init();
    this.middleware();
    this.staticRoutes();
    this.routes();
    // this.createReadStream();
  }

//   private createReadStream(): void {
//     this.express.use((req, res, next) => {

//         // if the request is not html then move along
//         var accept = req.accepts('html', 'json', 'xml');
//         if(accept !== 'html'){
//             return next();
//         }

//         // if the request has a '.' assume that it's for a file, move along
//         var ext = path.extname(req.path);
//         if (ext !== ''){
//             return next();
//         }
// console.log('route stream');
//         fs.createReadStream('./client/' + 'index.html').pipe(res);
//     });
//   }

  // Configure Express middleware.
  private middleware(): void {
    // this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    // this.express.use(passport.initialize());
    // this.express.use(passport.session());
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use("/api/v1", apiRoutes);
    this.express.use("/", appRoutes);
    // this.express.use('/auth', authRoutes);
  }

  private staticRoutes(): void {
    // in production mode run application from dist folder
    this.express.use(express.static(this.public));
  }

}

export default new App().express;
