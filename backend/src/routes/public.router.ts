import * as express from "express";
import { LoadAuthorization, ValidateBasicAuth } from "../middleware/common.middleware";
import { LoginByEmailAndPassword } from "./public.controller";


class Public {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.configRoutes();
    }

    public configRoutes() {

        // Login Routes
        this.router.get('/authentication', [...ValidateBasicAuth, ...LoadAuthorization], LoginByEmailAndPassword);

    }
}

const PublicRouter = new Public().router;
export { PublicRouter };
