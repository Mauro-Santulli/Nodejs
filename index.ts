import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get(`/`, async (req: Request, res: Response) => {
    const vGames = await prisma.videogame.findMany();
    res.json(vGames);
});

app.post(`/`, async (req: Request, res: Response) => {
    console.log("post");
    const { nome, genere } = req.body;
    const vGames = await prisma.videogame.create({
        data: {
            nome: nome,
            genere: genere
        }
    })
    res.json(vGames);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
