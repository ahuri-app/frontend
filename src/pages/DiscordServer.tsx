import { FC } from 'react';
import Navbar from '../components/landing-page/Navbar';

const DiscordServer: FC = () => {
  return (
    <>
      <Navbar pressed="Discord server" />

      <main className="ml-80 mt-6">
        <div className="flex justify-center mb-4">
          <img src="/discord-logo.png" height={280} width={280} />
        </div>
        <div className="flex justify-center">
          <a
            target="_blank"
            href="https://discord.gg/VgFuy4aw3q"
            className="text-white hover:text-white"
          >
            <button>Join our Discord server</button>
          </a>
        </div>
      </main>
    </>
  );
};

export default DiscordServer;
