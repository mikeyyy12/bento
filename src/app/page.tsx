import Container from "@/components/container";
import { FeaturesSection } from "@/components/features";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-screen relative bg-neutral-50">
      <Container>

        <FeaturesSection />
      </Container>
    </div>
  );
}

