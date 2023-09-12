import { type Metadata } from "next";
import { Footer, Header, MainWrapper } from "~/app/components";
import {
  MantineProvider,
  ColorSchemeProvider,
  TrpcProvider,
  AuthProvider,
} from "~/providers";

export const metadata: Metadata = {
  title: "Discover Vancouver's Tech Meetup Events ",
  description:
    "Explore a dynamic world of tech meetups in Vancouver with our innovative event discovery app, [name of the project ] . Find exciting tech meetups and networking opportunities tailored to your schedule. Uncover the latest tech trends, connect with like-minded professionals in the heart of Vancouver's tech community!",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <TrpcProvider>
          <AuthProvider>
            <ColorSchemeProvider>
              <MantineProvider>
                <Header />
                <MainWrapper>{children}</MainWrapper>
                <Footer />
              </MantineProvider>
            </ColorSchemeProvider>
          </AuthProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}

export default RootLayout;
