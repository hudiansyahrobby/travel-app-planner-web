"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

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

type UserRegisterFormProps = React.HTMLAttributes<HTMLFormElement>;

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const [isLoading] = React.useState<boolean>(false);

  const form = useForm<RegisterFormValues>({
    defaultValues: { email: "", password: "", confirmPassword: "" },
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isLoading}
                      id="password"
                      placeholder="Input your password again"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button isLoading={isLoading}>Sign Up</Button>
        </div>
      </Form>
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
    </form>
  );
}
