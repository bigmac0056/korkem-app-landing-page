import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/images/icon.png" alt="Logo" className="w-10 h-10" />
          <a href="#hero" className="text-xl font-bold text-gray-800 ">KörkemApp</a>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">{t("features.navbar")}</a>
          <a href="#screenshots" className="hover:text-blue-600">{t("screenshots.navbar")}</a>
          <a href="#about" className="hover:text-blue-600">{t("about.navbar")}</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <LanguageSwitcher></LanguageSwitcher>
        </div>
      </div>
    </header>
  );
};

export default Navbar;