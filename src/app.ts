import express, {Request, Response} from "express";
import {createDB} from "./db";

export const app = express();

export const db = createDB();

export const getVideos = (req: Request, res: Response) => {
    res
        .status(200)
        .json(db.videos)
};

app.get('/videos', getVideos);