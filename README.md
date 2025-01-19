# Cocoon App

A wellness application focused on helping users establish and maintain healthy routines.

## Features

### User Features
- Browse wellness categories
- View routines by category
- Add routines to personal collection
- Set alarms for routines
- Vote on routine effectiveness
- Track days performing routines
- Remove routines from collection

### Technical Features
- JWT Authentication
- MongoDB Integration
- Local Storage Management
- Responsive Design
- Modal Popups
- Real-time Updates

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router DOM
- CSS3

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Project Structure




## Installation

```bash
# Clone repository
git clone [repository-url]

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install


## Environment setup
Create .env fiel in backend directory

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

## Running the app development
# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm run dev

## Running the app production
# Start backend
cd backend
npm start

# Build frontend
cd frontend
npm run build

## Data Models
Category:
interface Category {
  _id: string;
  name: string;
  description: string;
  routines: string[];
}

Routine:
interface Routine {
  _id: string;
  name: string;
  description: string;
  type: string;
  frequency: string;
  resources: object;
  categories: string[];
  alarm?: {
    time: string;
    days: string[];
  };
}

API Endpoints
Categories
GET /api/categories - Get all categories
GET /api/categories/:categoryId/routines - Get routines by category
Routines
GET /api/routines - Get all routines
POST /api/routines - Create new routine
PUT /api/routines/:id - Update routine
DELETE /api/routines/:id - Delete routine



