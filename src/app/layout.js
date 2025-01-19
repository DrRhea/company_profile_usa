import "./globals.css";

export const metadata = {
  title: "AAHM Corporation – Leading Consultancy Services for Modern Businesses",
  description:
    "AAHM Corporation provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="AAHM Corporation – Leading Consultancy Services for Modern Businesses" />
        <meta
          name="description"
          content="AAHM Corporation provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success."
        />
        <meta
          name="keywords"
          content="consultancy, business services, strategic planning, operational excellence, AAHM Corporation"
        />
        <meta name="author" content="AAHM Corporation" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aahmcorporation.com/" />
        <meta
          property="og:title"
          content="AAHM Corporation – Leading Consultancy Services for Modern Businesses"
        />
        <meta
          property="og:description"
          content="AAHM Corporation provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success."
        />
        <meta property="og:image" content="/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.aahmcorporation.com/" />
        <meta
          name="twitter:title"
          content="AAHM Corporation – Leading Consultancy Services for Modern Businesses"
        />
        <meta
          name="twitter:description"
          content="AAHM Corporation provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success."
        />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
