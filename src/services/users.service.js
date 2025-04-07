import * as mockData from '../database/users.database.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, '../../data.json');


export const getAllUsers = async () => {
    return await mockData.readFileData(path);
}

export const getUserById = async (id) => {
    const users = await mockData.readFileData(path);
    return users.find((user) => user.id === Number(id));
}

export const createUser = async (name) => {
    const users = await mockData.readFileData(path);
    const lastUser = users[users.length - 1]; // Id của user sẽ tăng dần nên id của user mới sẽ là id của user cuối cùng + 1
    const newUser = { id: lastUser.id + 1, name };
    users.push(newUser);
    await mockData.writeFileData(path, { users });
    return newUser;
}

export const updateUser = async (id, name) => {
    const users = await mockData.readFileData(path);
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1) return null;
    users[userIndex].name = name;
    await mockData.writeFileData(path, { users });
    return users[userIndex];
}

export const deleteUser = async (id) => {
    const users = await mockData.readFileData(path);
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1) return null;
    const deletedUser = users.splice(userIndex, 1); // Xóa user bằng cách tìm index của nó rồi dùng lệnh splice cắt từ vị trí đó 1 phần tử
    await mockData.writeFileData(path, { users });
    return deletedUser[0];
}

