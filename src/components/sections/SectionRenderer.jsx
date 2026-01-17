import HeroSection from "./HeroSection"
import CardsGrid from "./CardsGrid"
import MixedCards from "./MixedCards"
import FormCards from "./FormCards"
import TextBox from "./TextBox"
import Others from "./Others"


export default function SectionRenderer({ section }) {
  switch (section.type) {
    case "hero":
      return <HeroSection {...section} />
    case "cards-grid":
      return <CardsGrid {...section} />
    case "mixed-cards":
      return <MixedCards {...section} />
    case "form-cards":
      return <FormCards {...section} />
    case "text-box":
      return <TextBox {...section} />
    case "others":
      return <Others {...section} />
    default:
      return null
  }
}
