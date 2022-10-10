import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";
import mime from 'mime-types'
import url from "url";

export const getImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dir = `${path.resolve("./")}/upload-images`;
    const queryObject = url.parse(req.url, true).query;
    const imageName = queryObject.name as string;
    const file = path.join(dir, imageName);
    const type = mime.lookup(imageName);
    const stream = fs.createReadStream(file);

    stream.on("open", function () {
      res.set("Content-Type", type as string);
      stream.pipe(res);
    });
    stream.on("error", function () {
      res.set("Content-Type", "text/plain");
      res.status(404).end(`Image Not found with name: ${req.params.image}`);
    });
  } catch (error) {
    next(error);
  }
};