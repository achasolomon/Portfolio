import Link from "next/link";

export default function SiteFooter({ links }) {
  return (
    <footer className="site-footer">
      <Link href="#" className="footer-logo">
        Naomi Smith
      </Link>

      <ul className="footer-links">
        {links
          .filter((link) => ["#about", "#work", "#contact"].includes(link.href))
          .map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
      </ul>

      <span className="footer-copy">&copy; 2026 Naomi Smith. All rights reserved.</span>
    </footer>
  );
}
