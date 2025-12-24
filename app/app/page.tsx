import { Metadata } from "next";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
  title: "HappyHomeCare Connect - Coming Soon | Track Your Caregiver",
  description:
    "Track your caregiver in real-time. Stay connected with family. Never miss an update. The future of home healthcare coordination is almost here.",
  openGraph: {
    title: "HappyHomeCare Connect - Coming Soon",
    description:
      "Track your caregiver in real-time. Stay connected with family. Never miss an update.",
    type: "website",
  },
  keywords: [
    "caregiver tracking",
    "home healthcare app",
    "real-time caregiver location",
    "family notifications",
    "care coordination",
    "healthcare technology",
  ],
};

export default function AppComingSoonPage() {
  return <ComingSoonClient />;
}
