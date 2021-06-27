import { Router, Request, Response } from "express";
import AuthenticationController from "../controller/authentication.controller";

const router = Router();
router.get("/users/", AuthenticationController.getUsers);

router.post("/users/new", async (req: Request, res: Response) => {
  res.status(201).send();
});

export { router as authenticationRouter };
