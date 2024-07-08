import { Metadata } from "next";

import Home from "@/components/pages/home";

export const metadata: Metadata = {
  title: "The Entropy Project",
};

export default async function HomePage() {
  return <Home />;
}
