import Navigation from "../components/layout/Navigation";
import AboutSection from "../components/home/About";

export default function About({ theme, setTheme }) {
  // Always render the full version
  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} />
      <AboutSection variant="full" />
    </>
  );
}
