import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Licensed and accredited home care provider serving San Diego County. We help clients live a better life at home through consistent delivery of quality care with thoroughly screened, bonded, and insured professionals.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
