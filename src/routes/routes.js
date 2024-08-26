import { Router } from "express";
import { frases } from '../data/frases.js'

export const router = Router()

router.get('/frase', (req, res) => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    res.json(fraseAleatoria)
})

router.get('/', (req,res)=>{
    res.json(frases)
})

router.get('/frase/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const frase = frases.find(f => f.id === id);

    if (frase){
        res.json(frase)
    }else{
        res.status(404).json({ error: "Frase no encontrada" });
    }
})