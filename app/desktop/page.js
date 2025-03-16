// app/desktop/page.js
export default function DesktopHome() {
    return (
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Premium Car Detailing</h1>
          <p className="mt-4">Get the best service for your vehicle with just a few clicks.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="border rounded p-2 w-full" />
              <input type="text" placeholder="Phone Number" className="border rounded p-2 w-full" />
              <input type="date" placeholder="Preferred Date" className="border rounded p-2 w-full" />
              <button type="submit" className="bg-blue-500 text-white rounded-full px-4 py-2">Book Now</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
  