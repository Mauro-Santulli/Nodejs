import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get(`/videogame`, async (req: Request, res: Response) => {
    const vGames = await prisma.videogame.findMany();
    res.json(vGames);
});


// creazione record prisma
app.post(`/videogame`, async (req: Request, res: Response) => {
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

//update record
app.put('/videogame/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { nome, genere } = req.body;
    const vGames = await prisma.videogame.update({
        where: { id: id },
        data: {
            nome: nome,
            genere: genere
        }
    });
    res.json(vGames);
})

// delete record
app.delete('/videogame/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const vGames = await prisma.videogame.delete({
        where: { id: id }
    });

    if (res.statusCode == 200) {
        res.json({
            status: 200,
            messaggio: "Record eliminato con successo"
        });
    }
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
