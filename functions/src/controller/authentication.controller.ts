import { Request, Response } from "express";
import { getCollection } from "../services/authentication.service";

class AuthenticationController {
  static getUsers = async (req: Request, res: Response) => {
    const snapshot = await getCollection("users");
    let users: any[] = [];
    snapshot.forEach((doc: any) => {
      let id = doc.id;
      let data = doc.data();
      users.push({ id, ...data });
    });
    res.status(200).send(JSON.stringify(users));
  };
}

export default AuthenticationController;
