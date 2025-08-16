export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 bg-blue-100 text-center text-gray-600 text-sm mt-auto">
      &copy; {currentYear} Intiiminä koulutus ja konsultaatio.
    </footer>
  );
}
