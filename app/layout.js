import "./globals.css";

export const metadata = {
  title: "Naomi Smith | Technical Recruiter & Global Talent Sourcer",
  description:
    "Senior recruiter and global talent sourcer helping high-growth teams build strong technical and non-technical talent pipelines.",
  icons: {
    icon: "/naomi-smith-icon.jpg",
    apple: "/naomi-smith-icon.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
