import express, {Router} from "express"
import {PrismaClient} from "@prisma/client"
import { 
    validate,
    planetSchema,
    PlanetData
} from "../lib/validation"

import { initMulterMiddleware } from "../lib/middleware/multer"

const prisma = new PrismaClient()
const upload = initMulterMiddleware()
const router = Router()

// Get

router.get("/", async (request, response) => {
    const planets = await prisma.planet.findMany()
    response.json(planets)
})

// Get unique

router.get("/:id", async (request, response) => {
    const {id} = request.params
    const planet = await prisma.planet.findUnique({
       where: {
        id: Number(id)
       } 
    })
    response.json(planet)
})

// Post

router.post("/", validate({body: planetSchema}),  async (request, response) => {
    const planetData: PlanetData = request.body;

    const planet = await prisma.planet.create({
        data: planetData
    })

    response.json(planet)
})



// Put 

router.put("/:id", async (request, response)=>{
    const {id} = request.params
    const { name, diameter, moons} = request.body
    const planet = await prisma.planet.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            diameter,
            moons
        }
    })
    response.json(planet)
})

// Delete

router.delete("/:id", async (request, response) => {
    const {id} = request.params
    const planet = await prisma.planet.delete({
        where: {
            id: Number(id)
        }
    })
    response.json(planet)
})

//Upload

router.post("/:id/photo", 
upload.single("photo"), 
async (request, response) => {
    console.log("request.file", request.file)

    const photoFilename = request.file?.filename
    response.json({photoFilename})
})

export default router