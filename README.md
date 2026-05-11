# 📚 API Biblioteca

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/TypeORM-E83524?style=for-the-badge&logo=typeorm&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=ffffff" />
</p>

<p align="center">
  <img src="https://github.com/kiellzz/book-management-api/actions/workflows/tests.yml/badge.svg" />
</p>

---

## 🧠 About the Project

REST API developed for book management, allowing full CRUD operations with input validation.

This project was built as an **academic assignment (3rd semester - ADS)**, focusing on backend fundamentals, API design, data validation and code organization.

---

## 🚀 Features

* Create books
* List all books
* Get book by ID
* Update book
* Delete book
* Input validation with **Zod**
* Health check endpoint (`/health`)

---

## 🛠 Tech Stack

* Node.js
* TypeScript
* Express
* TypeORM
* SQLite
* Zod (validation)
* ts-node-dev
* Jest + Supertest (tests)

---

## 📦 Project Structure

```bash
book-management-api/
├── data-source.ts
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── app.ts
    ├── controllers/
    │   └── LivroController.ts
    ├── entities/
    │   └── Livro.ts
    ├── repositories/
    │   └── LivroRepository.ts
    ├── routes/
    │   └── livroRoutes.ts
    ├── schemas/
    │   └── livroSchema.ts
    └── __tests__/
        ├── livros.test.ts
        └── test-data-source.ts
```

---

## 📖 Book Entity

Each book contains:

* `id`
* `titulo`
* `autor`
* `ano`
* `editora`

Example:

```json
{
  "id": 1,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "editora": "Editora Exemplo"
}
```

---

## ✅ Validation

Input data is validated using **Zod** before reaching the database. Invalid requests return a `400` response with detailed field errors.

Example of invalid request response:

```json
{
  "erros": {
    "titulo": ["Título é obrigatório"],
    "ano": ["Ano deve ser inteiro"]
  }
}
```

---

## ⚙️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/kiellzz/book-management-api.git
cd book-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm run dev
```

Server running at:
```
http://localhost:3000
```

---

## ▶️ Scripts

```bash
npm run dev    # Start development server
npm run build  # Compile TypeScript
npm start      # Run production build
npm test       # Run tests
```

---

## 🧪 Tests

This project includes **9 automated tests** using **Jest** and **Supertest**, covering all CRUD endpoints and input validation.

```bash
npm test
```

Tests run automatically on every push via **GitHub Actions**.

---

## 🩺 Health Check

### GET `/health`

```json
{
  "status": "ok"
}
```

---

## 📌 Endpoints

### Create book
**POST** `/livros`
```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "editora": "Editora Exemplo"
}
```

### Get all books
**GET** `/livros`

### Get by ID
**GET** `/livros/:id`

### Update book
**PUT** `/livros/:id`

### Delete book
**DELETE** `/livros/:id`

---

## 🗄 Database

* SQLite (`database.sqlite`)
* Automatic sync via TypeORM
* In-memory SQLite for tests

---

## 👨‍💻 Author

Developed by **Ezequiel Borges**

* GitHub: [https://github.com/kiellzz](https://github.com/kiellzz)
* LinkedIn: [https://linkedin.com/in/ezequielborgesdev/](https://linkedin.com/in/ezequielborgesdev/)