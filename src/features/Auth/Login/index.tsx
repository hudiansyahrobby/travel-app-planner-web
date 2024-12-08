import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { UserLoginForm } from "./components/user-login-form";

export default function Register() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/schedule.webp"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
      </div>
      <div className="container relative hidden h-svh min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/auth/register"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign Up
        </Link>
        <div className="bg-muted relative hidden h-full flex-col text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-zinc-500/10" />
          <div className="h-svh w-full">
            <Image
              src="/schedule.jpg"
              width={1280}
              height={843}
              alt="schedule"
              className="block h-svh w-full bg-cover object-cover"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome Back!
              </h1>
              <p className="text-muted-foreground text-sm">
                Log in to access your account and manage your travel plans.
              </p>
            </div>
            <UserLoginForm />
            <Link
              href="/terms"
              className="text-muted-foreground px-8 text-center text-sm underline underline-offset-4 hover:text-primary"
            >
              Forgot Your Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
