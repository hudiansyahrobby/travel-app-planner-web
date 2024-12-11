import React from "react";

import { Metadata } from "next";

import Login from "@/features/auth/login";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Log in to your account to access personalized travel plans, manage bookings, and explore your saved destinations.",
  keywords: "Login, Travel Planning, Account Access, Travel App",
  authors: [
    {
      name: "Robby Hudiansyah",
      url: "https://www.linkedin.com/in/robby-hudiansyah-ab04641a7/",
    },
  ],
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
