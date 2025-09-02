import Container from "@/components/container";
import { FeaturesSection } from "@/components/features";



export default function Home() {
  return (
    <div className="relative flex flex-col items-center bg-white">
      <Container>
        <FeaturesSection />
      </Container>
    </div>
  );
}

