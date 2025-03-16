// components/DesktopHeader.js
export default function DesktopHeader() {
    return (
      <header className="p-4 bg-white shadow">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl">Car Detailing</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  