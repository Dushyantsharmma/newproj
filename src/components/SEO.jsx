import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title || "Raj Ann Raj Driving School";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Expert car driving training in Himachal Pradesh.");
    }
    window.scrollTo(0, 0);
  }, [title, description, location]);

  return null;
};

export default SEO;