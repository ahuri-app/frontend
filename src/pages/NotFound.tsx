import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <>
      <h1 className="flex justify-center mt-8 mb-4 text-4xl">
        <span className="text-blue-600">404</span>
        &nbsp;|&nbsp;
        <span className="text-red-600">Not Found</span>
      </h1>

      <div className="flex justify-center">
        <Link to="/">
          <button className="text-white">Go home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
