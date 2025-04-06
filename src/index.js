import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, '../data.json');

const app = express();
const port = 3000;

let parsedData;
let users;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/users', async (req, res) => {
    try {
        await readFileData();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.get('/:id', async (req, res) => {
    await readFileData();
    const user = users.find((u) => u.id === Number(req.params.id));
    res.json(user);
})

app.post('/', async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        await readFileData();
        const newUser = { id: users[users.length - 1].id + 1, name: req.body.name };
        users.push(newUser);

        parsedData.users = users;
        await writeFileData(parsedData);
        res.status(201).json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.put('/:id', async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        await readFileData();
        const { id } = req.params;
        const index = users.findIndex((u) => u.id === Number(id));
        if (index === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        users[index].name = req.body.name;

        parsedData.users = users;
        await writeFileData(parsedData);
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.delete('/:id', async (req, res) => {
    try {
        await readFileData();
        const { id } = req.params;
        const index = users.findIndex((u) => u.id === Number(id));
        if (index === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        users.splice(index, 1);

        parsedData.users = users;
        await writeFileData(parsedData);
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

async function readFileData() {
    try {
        const data = await fs.promises.readFile(path, 'utf8');
        parsedData = JSON.parse(data);
        users = parsedData.users;
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
}

async function writeFileData(data) {
    try {
        await fs.promises.writeFile(path, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing file:', err);
        throw new Error('Internal server error');
    }
}

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
