"use server";
import { cookies } from "next/headers";
import axiosManager from "../utils/axiosManager";
const getPages = async () => {
  //request to a api with cookie name accesstoken with axios

  const accessToken = cookies().get("accesstoken");
  const res = axiosManager.get("/api/pages/1?depth=1&draft=false", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log({ accessToken, res });
};

export { getPages };
