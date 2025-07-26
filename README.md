# Study-Notion - Learning Management Portal 🎓

StudyNotion is a full-stack MERN (MongoDB, Express, React, Node.js) based ed-tech platform that provides a seamless learning experience for both students and instructors. It supports course creation, real-time tracking, secure payments, and dynamic content rendering.

---

## 🔥 Features

- 🔐 Authentication using JWT and secure password handling
- 📹 Course creation with embedded video content
- 📝 Lecture and module management
- 💳 Stripe-based secure payments
- 🧠 Real-time progress tracking for students
- 📂 Category-based course filtering
- 🎯 Role-based dashboard for Admin, Instructor, and Students
- 📱 Fully responsive UI with TailwindCSS

---

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| **Frontend** | ReactJS, Redux Toolkit, Tailwind CSS |
| **Backend** | Node.js, Express |
| **Database** | MongoDB with Mongoose |
| **Authentication** | JWT, Bcrypt |
| **Payment Gateway** | Stripe |
| **Cloud Storage** | Cloudinary |
| **Form Validation** | React Hook Form, Yup |
| **File Uploads** | Multer |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shubam081220/StudyNotion-Learning-Portal.git
cd StudyNotion-Learning-Portal
```

### 2. Install Dependencies
```bash
npm install
cd client
npm install
```

### 3. Set Environment Variables
Create .env files in both root and client folder:

.env (Backend)
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

.env (Frontend)
```bash
REACT_APP_BASE_URL=http://localhost:5000/api/v1
REACT_APP_STRIPE_KEY=your_stripe_publishable_key
```

### 4. Run the App
```bash
# Terminal 1
npm run dev

# Terminal 2
cd client
npm start
```


