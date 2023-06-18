import AddFriendButton from "@/components/AddFriendButton";
import { addFriendValidator } from "@/lib/Validations/addFriend";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { z } from "zod";

type Props = {};

const AddUser = (props: Props) => {
  const [setshowSuccessState, setSetshowSuccessState] =
    useState<boolean>(false);
  const addFriend = async (email: string) => {
    try {
      const validatedEmail = addFriendValidator.parse({ email });
      await axios.post("/api/friends/add", {
        email: validatedEmail,
      });
      setSetshowSuccessState(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return;
      }
      if (error instanceof AxiosError) {
        return;
      }
    }
  };

  return (
    <main className='pt-8'>
      <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
      <AddFriendButton />
    </main>
  );
};

export default AddUser;
