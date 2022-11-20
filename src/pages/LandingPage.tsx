import { FC } from 'react';
import Navbar from '../components/landing-page/Navbar';

const LandingPage: FC = () => {
  return (
    <>
      <Navbar pressed="Home" />

      <main className="ml-80 mt-6">
        <div className="flex justify-center mt-4">
          <img src="/banner.png" height={512} width={1024} />
        </div>
        <h1 className="text-2xl flex justify-center">
          The chat app that actually doesn't suck
        </h1>
      </main>
    </>
  );
};

export default LandingPage;
