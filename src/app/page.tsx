import Link from "next/link";
import Image from "next/image";
import Button from "~/clients/components/Button";
import Text from "~/clients/components/Text";

const HomePage = () => {
  return (
    <>
      <main className="relative flex h-full flex-col items-center justify-center">
        <div className="absolute left-0 top-0 h-[11%] w-[12%] border-b border-l-0 border-r border-t-0 border-solid border-navy-400 dark:border-navy-100"></div>
        <div className="absolute bottom-0 right-0 h-[10%] w-[12%] border-b-0 border-l border-r-0 border-t border-solid border-navy-400 dark:border-navy-100"></div>
        <div className="relative box-border h-[59%] w-[66%] border border-solid border-navy-400 p-[25px] dark:border-navy-100">
          <div className="flex h-full flex-col items-center justify-center">
            <div
              className="absolute left-[-13px] top-[30px] m-auto box-border h-full w-full border border-solid border-navy-400 dark:border-navy-100"
              style={{ transform: "rotate(1deg)" }}
            ></div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={45.5}
                height={57.5}
              />
              <Text fz="lg" fw={700} mb={10}>
                Tech Meetup Map
              </Text>
              <Text fw={500} mb={20} maw={380} ta="center">
                Looking for a way to stay up-to-date on the latest tech meetups
                happening in Vancouver? This app displays all upcoming tech
                events in Vancouver, and you can search for events by date.
              </Text>
              <Link href={`/map`}>
                <Button>Find Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
