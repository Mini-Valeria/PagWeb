import { Server } from 'azle';
import express, { response } from 'express';
import cors from 'cors';
    
export default Server(()=>{
    const app = express()

    app.use(cors());
    app.get('/users',(req,res)=>{
        const users = [
            {
                name: 'Juanito',
                edad:22
            },
            {
                name: 'Albertito',
                edad:22
            },
            {
                name: 'Angelito',
                edad:24
            },
            {
                name: 'Josesito',
                edad:27
            },
            {
                name: 'Manuelito',
                edad:30
            },
        ];
        return res.status(200).json(users)
    });

    return app.listen();
})
