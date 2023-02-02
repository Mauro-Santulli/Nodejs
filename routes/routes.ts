import express, { Request, Response } from 'express';
import prisma from '../src/lib/prismaClient';
import { initMulterMiddleware } from '../middleware/multer';

const upload = initMulterMiddleware();
const router = express.Router();

router.use(express.json());
router.use((req: Request, res: Response, next) => {
    console.log("CORS");

    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})
router.get('/', (req: Request, res: Response) => {
    console.log("http://localhost:3000");

    res.json()
});

router.get(`/videogame`, async (req: Request, res: Response) => {
    const vGames = await prisma.videogame.findMany();
    res.json(vGames);
});

router.get(`/videogame/:id`, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const vGames = await prisma.videogame.findUnique({
        where: { id: id }
    });
    res.json(vGames);
});


// creazione record prisma
router.post(`/videogame`, async (req: Request, res: Response) => {
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
router.put('/videogame/:id', async (req: Request, res: Response) => {
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
router.delete('/videogame/:id', async (req: Request, res: Response) => {
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

router.post("/videogame/:id/photo",
    upload.single("photo"),
    async (req: Request, res: Response, next) => {

        if (!req.file) {
            res.status(400);
            return next("No photo uploaded");
        }

        const photoFileName = req.file.originalname;

        res.status(201).json({ photoFileName });
    });

export default router;