import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export default function GoogleTranslate() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,or,ta,te,kn,ml,mr,gu,pa,ur,as",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addScript();
  }, []);

  const handleChange = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);

    if (window.google?.translate?.translatePage) {
      window.google.translate.translatePage(nextLanguage);
      return;
    }

    document.cookie = `googtrans=/en/${nextLanguage}; path=/;`;
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-slate-900/70 px-3 py-2">
      <Globe size={16} className="text-cyan-400" />
      <select
        aria-label="Select Language"
        value={language}
        onChange={handleChange}
        className="bg-transparent text-sm text-gray-200 outline-none"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="or">Odia</option>
        <option value="bn">Bengali</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="kn">Kannada</option>
        <option value="ml">Malayalam</option>
        <option value="mr">Marathi</option>
      </select>
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}