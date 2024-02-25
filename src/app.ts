import express, {Request, Response} from "express";

export const app = express();

export const getVideos = (req: Request, res: Response) => {
    res
        .status(200)
        .json({
            videos: [{title: 'super video'}]
        })
};

app.get('/videos', getVideos);