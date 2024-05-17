"use server";
import axiosManager from "@/utils/axiosManager";
import { cookies } from "next/headers";
const login = async () => {
  try {
    const res = await axiosManager.post("/api/users/login", {
      email: "tshabdendhu@gmail.com",
      password: "1234",
    });
    cookies().set("accessToken", res.token, {
      //   httpOnly: true,
      maxAge: 24 * 60 * 60,
      //   sameSite: "strict",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export { login };
