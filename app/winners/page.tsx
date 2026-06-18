import React from "react";
import { Metadata } from "next";
import WinnersClient from "./WinnersClient";

export const metadata: Metadata = {
  title: "AI Grant Winners | IIT AI Studio",
  description: "Meet the selected participants who received the $20 AI Grant from IIT AI Studio for their commitment, initiative, and dedication to learning AI.",
};

export default function WinnersPage() {
  return <WinnersClient />;
}
