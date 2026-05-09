import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Layout({ children }) {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-8 flex-1 overflow-y-auto">

          {children}

        </main>

      </div>

    </div>
  )
}

export default Layout