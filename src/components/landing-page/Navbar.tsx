import { Link } from 'react-router-dom';

interface Props {
  pressed: string;
}

const Navbar = ({ pressed }: Props) => {
  return (
    <div className="h-full w-64 fixed z-10 top-0 left-0 overflow-x-hidden pt-5 border-r-2 border-r-gray-300">
      <Link to="/">
        <div
          className={`p-2 ml-2 mr-2 mb-2 rounded-2xl ${
            pressed === 'Home' ? 'bg-gray-600' : ''
          } hover:bg-gray-700`}
        >
          <div className="flex items-center">
            <svg
              className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <p className="text-lg text-gray-300">Home</p>
          </div>
        </div>
      </Link>

      <Link to="/discord-server">
        <div
          className={`p-2 ml-2 mr-2 mb-2 rounded-2xl ${
            pressed === 'Discord server' ? 'bg-gray-600' : ''
          } hover:bg-gray-700`}
        >
          <div className="flex items-center">
            <svg
              className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
              viewBox="0 -28.5 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  className="fill-gray-300"
                />
              </g>
            </svg>

            <p className="text-lg text-gray-300">Discord server</p>
          </div>
        </div>
      </Link>

      <Link to="/about-us">
        <div
          className={`p-2 ml-2 mr-2 mb-2 rounded-2xl ${
            pressed === 'About us' ? 'bg-gray-600' : ''
          } hover:bg-gray-700`}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>

            <p className="text-lg text-gray-300">About us</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
