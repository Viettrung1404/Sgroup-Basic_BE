import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());

const path = '../db.json';

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/users', (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json(JSON.parse(data).users);
    });
})

app.get('/users/:id', (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        const users = JSON.parse(data).users;
        const user = users.find((u) => u.id === Number(req.params.id))
        res.json(user)
    });
})

app.post('/create', (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        let parsedData = JSON.parse(data);
        let users = parsedData.users;
        const newUser = { id: users.length + 1, name: req.body.name };
        users.push(newUser);

        parsedData.users = users;
        fs.writeFile(path, JSON.stringify(parsedData), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
        res.status(201).json(users);
    });
})

app.put('/update/:id', (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        let parsedData = JSON.parse(data);
        let users = parsedData.users;
        const user = users.find((u) => u.id === Number(req.params.id));
        user.name = req.body.name;

        parsedData.users = users;
        fs.writeFile(path, JSON.stringify(parsedData), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
        res.json(users);
    });
})

app.delete('/delete/:id', (req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        let parsedData = JSON.parse(data);
        let users = parsedData.users;
        const { id } = req.params;
        const index = users.findIndex((u) => u.id === Number(id));
        if (index === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        users.splice(index, 1);

        parsedData.users = users;
        fs.writeFile(path, JSON.stringify(parsedData), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
        res.json(users);
    });
})

app.post('/hello',
    (req, res, next) => {
        console.log('Hello middleware');
        next();
    },
    (req, res) => {
        res.send('Hello world');
    }
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
