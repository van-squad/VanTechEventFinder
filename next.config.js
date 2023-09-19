// const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.meetupstatic.com",
      },
    ],
  },
  // env: {
  //   NEXT_PUBLIC_GOOGLE_MAPS_KEY: localEnv.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  // },
};
