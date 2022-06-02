import { AboutUs } from "../components/About"
import { CardsArea } from "../components/CardsArea"
import { ContactUs } from "../components/ContactUs"
import { Footer } from "../components/Footer"
import { LandingPage } from "../components/Home"

function App() {
  return (
    <>
      <LandingPage />
      <CardsArea />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
