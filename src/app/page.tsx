import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imageAlt="Car Factory"
      title="Professional Cloud Hosting"
    />
  );
}
