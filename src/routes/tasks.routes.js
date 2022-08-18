import { Router } from "express";
const router = Router()
import pool from '../db.js'

router.get('/tasks', async (req, res) =>{
    const result = await pool.query('SELECT NOW()')
    res.json(result.rows[0].now)
})

router.get('/tasks/:id', (req, res) =>{
    res.send('Returning a single task')
})

router.post('/tasks', (req, res) =>{
    res.send('Creating a list of tasks')
})

router.put('/tasks', (req, res) =>{
    res.send('Deleting a list of tasks')
})

router.delete('/tasks', (req, res) =>{
    res.send('Updating a list of tasks')
})

export default router