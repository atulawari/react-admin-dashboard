# React Admin Dashboard

Professional full-stack React Admin Dashboard starter.

## Included
- React + Vite
- React Router
- Redux Toolkit
- Axios
- Material UI dependencies
- Bootstrap
- React Hook Form
- Yup
- Recharts
- JWT authentication
- Protected routes
- User CRUD
- Search
- Node.js + Express
- MongoDB + Mongoose
- Validation middleware
- Error middleware

## Project Structure

client/
- components/
- pages/
- routes/
- redux/
- services/
- hooks/
- utils/

server/
- config/
- controllers/
- middleware/
- models/
- routes/
- utils/

## Install

Frontend:
```bash
cd client
npm install
npm run dev
```

Backend:
```bash
cd server
npm install
npm run dev
```

Copy `server/.env.example` to `server/.env`.

Default admin:
admin@example.com
Admin@123

## API
POST /api/auth/login
GET /api/users
GET /api/users/:id
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id
GET /api/health
