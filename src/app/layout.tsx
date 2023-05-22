import AuthProvider from "../clients/contexts/AuthProvider";
import MantineProvider from "../clients/contexts/MantineProvider";
import TrpcProvider from "~/clients/contexts/TrpcProvider";
import "~/styles/globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <TrpcProvider>
          <AuthProvider>
            <MantineProvider>{children}</MantineProvider>
          </AuthProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}

export default RootLayout;
