import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import express, { Response, Request } from 'express';
import { DefaultUser } from './utility';
import { PublicRouter } from './routes/public.router';
const dotenv = require('dotenv');
dotenv.config();

class App {
    public app: express.Application;
    public apiV1Routes: express.Router;

    constructor() {
        this.app = express();
        this.apiV1Routes = express.Router();
        this.initializeMiddlewares();
        this.initializeLogger();
        this.initializeErrorHandling();
        this.routes();
    }

    public createDBConnection() {
        mongoose.connect(process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true,
                poolSize: Number(process.env.MONGODB_POOLSIZE),
                keepAlive: true,
            }).then(() => {
                console.log('Connected to Database ...')
                DefaultUser.createDefaultUser().then(() => {
                    console.log('Default Test User created ...');
                }).catch(error => console.log(error))
            }).catch(error => console.log(error));
    }

    public listen() {
        this.createDBConnection();
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.raw());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(logger('[:date[web]] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
    }

    private initializeErrorHandling() {

    }

    private initializeLogger() {
        const LOG_PREFIX = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        const log = console.log;
        console.log = function () {
            const args = Array.from(arguments);
            args.unshift(LOG_PREFIX + ": ");
            log.apply(console, args);
        }
    }

    private routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Shopper Backend');
        });
        this.app.use('/api/v1', this.apiV1Routes);
        this.apiV1Routes.use('/', PublicRouter)
    }
}

export default App;