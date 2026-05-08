# 📚 API Biblioteca

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/TypeORM-E83524?style=for-the-badge&logo=typeorm&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=ffffff" />
</p>

<p align="center">
  <img src="https://github.com/kiellzz/book-management-api/actions/workflows/tests.yml/badge.svg" />
</p>

---

## 🧠 About the Project

REST API developed for book management, allowing full CRUD operations.

This project was built as an **academic assignment (3rd semester - ADS)**, focusing on backend fundamentals, API design, and code organization.

---

## 🚀 Features

* Create books
* List all books
* Get book by ID
* Update book
* Delete book
* Health check endpoint (`/health`)

---

## 🛠 Tech Stack

* Node.js
* TypeScript
* Express
* TypeORM
* SQLite
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
http://localhost:3000

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

This project includes automated tests using **Jest** and **Supertest**, covering all CRUD endpoints.

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