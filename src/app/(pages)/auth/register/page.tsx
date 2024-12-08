import React from "react";

import { Metadata } from "next";

import Register from "@/features/Auth/Register";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your account to start planning your next adventure. Sign up to access personalized travel itineraries, manage bookings, and more!",
  keywords: "Sign Up, Register, Travel Planner, Create Account, Travel App",
  authors: [
    {
      name: "Robby Hudiansyah",
      url: "https://www.linkedin.com/in/robby-hudiansyah-ab04641a7/",
    },
  ],
};

const RegisterPage = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default RegisterPage;
