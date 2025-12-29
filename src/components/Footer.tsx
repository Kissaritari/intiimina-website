import SocialLinks from "./SocialLinks";

export default function Footer() {

  return (
<footer className="w-full py-6 bg-blue-100 text-gray-600 text-sm mt-auto">
  <div className="max-w-4xl mx-auto flex items-center">
    {/* Centered text */}
    <div className="flex-1 text-center">&copy;2025 Intiiminä koulutus ja konsultaatio.</div>

    {/* Social icons on the right */}
    <div className="flex gap-4">
      <SocialLinks />
    </div>
  </div>
</footer>
  );
}
