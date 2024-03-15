import { Router, Request, Response } from "express";
import { Property } from "../models/Property";
import Joi from "joi";

let properties: Property[] = [];

const router = Router();

const propertySchema = Joi.object({
  id: Joi.number().required(),
  address: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number().required(),
  image: Joi.string().required(),
});

router.get("/", (req: Request, res: Response) => {
  res.json(properties);
});

router.post("/", (req: Request, res: Response) => {
  const { error } = propertySchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const newProperty: Property = req.body;
  properties.push(newProperty);
  res.status(201).json(newProperty);
});

export default router;
