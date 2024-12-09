"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

import { signIn } from "next-auth/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { GithubIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import { RegisterFormValues, registerFormSchema } from "../validation";

type UserLoginFormProps = React.HTMLAttributes<HTMLFormElement>;

export function UserLoginForm({ className, ...props }: UserLoginFormProps) {
  const [isLoading] = React.useState<boolean>(false);

  const form = useForm<RegisterFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <form className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      id="email"
                      placeholder="Input your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isLoading}
                      id="password"
                      placeholder="Input your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            isLoading={isLoading}
            type="button"
            onClick={() => signIn("credentials")}
          >
            Sign In
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="text-muted-foreground bg-background px-2">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" isLoading={isLoading}>
          {!isLoading && <GithubIcon className="mr-2 h-4 w-4" />} GitHub
        </Button>
      </Form>
    </form>
  );
}
