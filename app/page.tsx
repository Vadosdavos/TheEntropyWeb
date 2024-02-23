import Home from "@/components/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Entropy Project",
};

export default async function HomePage() {
  return <Home />;
}
