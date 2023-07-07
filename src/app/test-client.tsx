"use client";
import { trpc } from "~/clients/providers/TrpcClient";
const TextClient = () => {
  const { data } = trpc.example.hello.useQuery({ text: "🥳" });
  if (!data) return <p>Waiting...</p>;
  return <p>This is tRPC test from client side {data.greeting}</p>;
};

export default TextClient;
