import { Users } from "../models/users";
import { Encryption } from "./encryption";
const dotenv = require('dotenv');
dotenv.config();


class DefaultUser {

    constructor() {

    }

    public static createDefaultUser = async () => {
        const name = process.env.TEST_USER_NAME;
        const email = process.env.TEST_USER_EMAIL;
        const password = Encryption.encryptPassword(process.env.TEST_USER_PASSWORD);

        try {
            const defaultUserAdmin = await Users.findOne({ email: email });
            if (!defaultUserAdmin) {
                await Users.create({
                    name, email, password,
                });
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export {
    DefaultUser,
}
