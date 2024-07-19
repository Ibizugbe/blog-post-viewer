const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-9xl font-extrabold text-gray-600 animate-bounce">
          404
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-800 animate-pulse">
          Page Not Found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Sorry, but the page you were looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 mt-6 text-lg font-semibold text-white bg-gray-600 rounded-full hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back to Home
        </a>
      </div>
      <div className="mt-10 animate-fade-in">
        <svg
          className="w-64 h-64 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5A9.75 9.75 0 0112 3.75 9.75 9.75 0 0121.75 13.5 9.75 9.75 0 0112 23.25 9.75 9.75 0 012.25 13.5zm9.75-7.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 1.5a6 6 0 100 12 6 6 0 000-12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
