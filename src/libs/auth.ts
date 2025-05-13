import { auth } from "@/auth";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";

const userQueryKey = ["user"];

export const getUser = async (): Promise<Session["user"]> => {
  const session = await auth();

  return session?.user;
};

export const useUser = () => useQuery(getUserQueryOptions());

export const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: userQueryKey,
    queryFn: getUser,
  });
};
