import { FC } from 'react';
import Navbar from '../components/landing-page/Navbar';

const AboutUs: FC = () => {
  return (
    <>
      <Navbar pressed="About us" />

      <main className="ml-80 mt-6">
        <p>
          Ahuri is a chat app made by 2 teenagers in hope of saving you from the
          big companies that invade your privacy. Everything is encrypted and
          everything is private (except for public channels) and all PMs
          (private messages) are truly private, only the person you're talking
          to and you can see the chats.
        </p>
      </main>
    </>
  );
};

export default AboutUs;
