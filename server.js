import express from 'express';
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json())

app.post('/usuarios', async (req, res) => {
    
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
});

app.put('/usuarios/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
});


app.get('/usuarios', async (req, res) => {

    console.log(req)

    const users = await prisma.user.findMany()

    res.status(200).json(users)
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
