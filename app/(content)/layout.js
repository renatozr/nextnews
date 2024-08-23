import MainHeader from "@/components/main-header";

import "../globals.css";

export const metadata = {
  title: "NextNews",
  description: "A News Site For The Next Generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
