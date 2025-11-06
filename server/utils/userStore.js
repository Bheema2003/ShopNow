const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, JSON.stringify([]), 'utf8');
}

function readAll() {
  ensureStore();
  try {
    const raw = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeAll(users) {
  ensureStore();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

function findByEmail(email) {
  const users = readAll();
  return users.find(u => u.email.toLowerCase() === String(email).toLowerCase()) || null;
}

function createUser({ name, email, passwordHash }) {
  const users = readAll();
  const id = String(Date.now());
  const user = { id, name, email, passwordHash, createdAt: new Date().toISOString() };
  users.push(user);
  writeAll(users);
  return user;
}

module.exports = { findByEmail, createUser };



