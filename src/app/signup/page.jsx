"use client";
import { Card, Separator } from "@heroui/react";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email, // required
      password: user.password, // required
      image: user.image,
    });

    if (data) {
      redirect("/");
    }
    // if (error) {
    //   alert();
    // }

    console.log({ data, error });
    console.log(user);
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="max-w-7xl mx-auto mt-12 mb-15">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p>Start your adventure with wanderlust</p>
      </div>
      <Card className="border rounded-none mt-3">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter image URL" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 justify-center ">
            <Button type="submit" className="rounded-none w-full bg-cyan-500">
              Create Account
            </Button>
          </div>
        </Form>

        <div className="flex justify-center items-center gap-2">
          <Separator />
          <div className="whitespace-nowrap">Or sign up with</div>
          <Separator />
        </div>
        <div>
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full rounded-none"
          >
            <FcGoogle />
            Signin with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
