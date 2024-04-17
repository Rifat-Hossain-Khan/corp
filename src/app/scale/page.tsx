import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imageAlt="Steel Factory"
      title="Scale your app to infinity"
    />
  );
}
