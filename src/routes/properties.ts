import { Router, Request, Response } from "express";
import { Property } from "../models/Property";

let properties: Property[] = [];

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(properties);
});

router.post("/", (req: Request, res: Response) => {
  const newProperty: Property = req.body;
  properties.push(newProperty);
  res.status(201).json(newProperty);
});

export default router;
