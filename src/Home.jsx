
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header Area */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/img/yls logo.png" alt="YLS Logo" className="w-32" />
          </a>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8 text-gray-700 font-semibold">
              <li><a href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/profile" className="hover:text-blue-600">Profile</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Welcome Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Welcome Text */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
              YLS Makes Your <br /> Biz <span className="text-blue-600">Greater.</span>
            </h2>
            {/* <h5 className="text-lg mb-6 text-gray-700">Unlocking your business's full potential.</h5> */}
            <a href="/about" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold text-lg">Start Exploring</a>
          </div>
          {/* Welcome Thumbnail */}
          <div className="md:w-1/2 flex justify-center">
            <img src="/img/home/image-removebg-preview.png" alt="Welcome" className="w-80 drop-shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
