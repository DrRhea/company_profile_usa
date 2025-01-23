import "./globals.css";
import MessagePopover from "./components/MessagePopover";
import MessageForm from "./components/MessageForm";

export const metadata = {
  title: "CONSULTING SERVICES – Leading Consultancy Services for Modern Businesses",
  description:
    "CONSULTING SERVICES provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="CONSULTING SERVICES – Leading Consultancy Services for Modern Businesses" />
        <meta
          name="description"
          content="CONSULTING SERVICES provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success."
        />
        <meta
          name="keywords"
          content="consultancy, business services, strategic planning, operational excellence, CONSULTING SERVICES"
        />
        <meta name="author" content="CONSULTING SERVICES" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aahmcorporation.com/" />
        <meta
          property="og:title"
          content="CONSULTING SERVICES – Leading Consultancy Services for Modern Businesses"
        />
        <meta
          property="og:description"
          content="CONSULTING SERVICES provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success."
        />
        <meta property="og:image" content="/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.aahmcorporation.com/" />
        <meta
          name="twitter:title"
          content="CONSULTING SERVICES – Leading Consultancy Services for Modern Businesses"
        />
        <meta
          name="twitter:description"
          content="CONSULTING SERVICES provides professional consultancy services for business growth, strategic planning, and operational excellence. Partner with us for success."
        />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body>
        <main>{children}</main>
        <MessagePopover />
        <MessageForm />
      </body>
    </html>
  );
}
