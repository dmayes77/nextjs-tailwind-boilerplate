import ImageContainer from "@/components/global/ImageContainer";
import SectionWrapper from "@/components/global/SectionWrapper";
import SysImage from "@/components/global/SysImage";
import { logoImages } from "@/lib/images";

export default function ReputationSection() {
  return (
    <SectionWrapper className="text-center space-y-4">
      <h2 className="text-xl font-semibold">Our Reputation</h2>
      <ImageContainer>
        <SysImage src={logoImages.madGoogleBadge.src} alt={logoImages.madGoogleBadge.alt} objectFit="contain" />
      </ImageContainer>
      <p className="text-base text-gray-700">
        Rated <span className="font-bold text-green-600">5.0</span> out of 5 on Google
      </p>
      <p className="text-sm text-gray-500 mt-1">Over 240+ satisfied customers</p>
    </SectionWrapper>
  );
}
