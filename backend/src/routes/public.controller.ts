import { Response } from "express";
import { ExtendedRequest, User } from "../interfaces";
import { Users } from "../models/users";
import { Encryption } from "../utility";



class PublicUserController {
    constructor() {

    }

    public static loginByEmailAndPassword = async (req: ExtendedRequest, res: Response) => {
        try {
            const buff = Buffer.from(req.token, 'base64');
            const credential = buff.toString().split(':');
            if (credential.length !== 2) {
                return res.status(400).send();
            }
            const email = credential[0];
            const password = credential[1];
            if (!email || !password) {
                return res.status(400).send();
            }
            const confirmUser: User = await Users.findOne({ email: email });
            let user: any = confirmUser;
            if (user) {
                user = confirmUser.toJSON();
            }
            if (!user) {
                res.status(403).send({
                    Message: `You don't have account with us`,
                    Data: null,
                });
            } else if (user && !Encryption.decryptPassword(password, user.password)) {
                res.status(401).send({
                    Message: `Incorrect password!`,
                    Data: null,
                });
            } 
            else {
                delete user.password;
                delete user.createdOn;
                let token: any;
                try {
                    token = await Encryption.createToken(user);
                } catch (err) {
                    console.log(err);
                    return res.status(500).end();
                }
                res.setHeader('Access-Control-Expose-Headers', 'Authorization');
                res.setHeader('Authorization', token);
                res.send(user);
            }
        } catch (error) {
            console.log(error)
            return res.status(500).end();
        }
    }
}

const LoginByEmailAndPassword = PublicUserController.loginByEmailAndPassword;

export {
    LoginByEmailAndPassword,
}
