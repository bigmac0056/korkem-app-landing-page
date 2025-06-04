import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "ҚАЗ" },
  { code: "en", label: "EN" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const current = i18n.language;

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex((l) => l.code === current);
    const next = languages[(currentIndex + 1) % languages.length];
    i18n.changeLanguage(next.code);
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage}>
      <Globe className="w-5 h-5 mr-1" />
      {current.toUpperCase()}
    </Button>
  );
};