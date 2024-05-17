# Tonic: A Healthcare App for Users and Doctors built using Express, React, MongoDB, JWT and TailwindCSS

## Stack

* ⚛️ **React** for building a **dynamic and responsive** user interface ensuring a seamless experience for users across different devices.
* ⚡ **Express** with **Node.js** for **handling API requests** and **server-side logic** to manage data flow and application logic.
* 🗃️ **MongoDB** for **storing** and **retrieving application data** such as **user profiles**, **appointments**, and feedback, enabling fast and scalable data management.
* 🔐 **User Authentication** with **JWT** for **secure login and signup**.
* 🎨 **Tailwind CSS** for sleek, **modern**, and responsive design.
* 💵 **Stripe** for **managing payment** processing, facilitating easy and **secure transactions** for healthcare services.
* **☁️ Cloudinary** for **image upload and storage**, ensuring efficient and **reliable image management**.
* 🌐 **React Router** for **seamless client-side routing** allowing **smooth navigation** within the application without reloading the page.

## Features:

* 👩‍⚕️ **Doctor Profiles**: Detailed profiles with **qualifications**, **experience**, and **available time slots**.
* 📅 **Appointment Booking**: Easy **booking of appointments** with doctors.
* 💬 **Feedback and Reviews**: Patients can leave **feedback and reviews** for doctors.
* 🔔 **Notifications**: **Real-time notifications** for various actions.

## Try it on your own
* Visit **https://tonic.saurabhparyani.dev/**
* Use a **test VISA card** on the **Stripe checkout page** (completely free): **4000 0035 6000 0008** (For India), **4242 4242 4242 4242** (Elsewhere)
* [TIP] - If you get a 404 error page, try **refreshing** the page.

#### Prerequisites:
- Node.js
- npm or yarn
- MongoDB

#### Steps:
1. **Clone the repository:**

   ```bash
   git clone https://github.com/saurabhparyani/tonic.git
   cd tonic
3. **Install dependencies:**

   ```bash
    # For frontend
    cd frontend
    npm install
    # For backend
    cd ../backend
    npm install
4. **Set up environment variables: Create a .env file in the backend directory and add the following:**

    ```env
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
    VITE_UPLOAD_PRESET=<your-cloudinary-upload-preset>
    VITE_CLOUD_NAME=<your-cloudinary-cloud-name>

6. **Run the application:**

   ```bash
    # Start the backend server
    cd backend
    npm run start-dev
    # Start the frontend development server
    cd ../frontend
    npm run dev
