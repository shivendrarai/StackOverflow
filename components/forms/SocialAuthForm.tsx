"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  //   const handleSocialLogin = async (provider: "github" | "google") => {
  //     try {
  //       await signIn(provider, {
  //         redirectTo: ROUTES.HOME,
  //         // redirect: false,
  //       });
  //     } catch (error) {
  //       console.log("Error during social login:", error);
  //       toast.error("Sign in failed", {
  //         description:
  //           error instanceof Error
  //             ? error.message
  //             : "An error occured while signing in",
  //       });
  //     }
  //   };
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        // redirect: false,
      });
    } catch (error) {
      toast.error("Sign in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured while signing in",
      });
    }
  };
  const ButtonClass =
    "background-dark400_light900  body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={` ${ButtonClass}`}
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>
      <Button
        className={` ${ButtonClass}`}
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="google Icon"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
