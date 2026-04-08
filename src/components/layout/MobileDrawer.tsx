import { Link } from "react-router-dom"
import { X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { fullMenu } from "@/lib/menu"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f213f] text-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-lg font-semibold tracking-wide">
            MENU
          </h2>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-80px)]">

          {fullMenu.map((item) => (
            <div key={item.label}>

              {/* Parent Item */}
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenSection(
                        openSection === item.label ? null : item.label
                      )
                    }
                    className="flex items-center justify-between w-full text-sm font-semibold tracking-wider py-2 hover:text-[#f4b400] transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openSection === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  {openSection === item.label && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path || "/"}
                          onClick={onClose}
                          className="block text-sm text-gray-300 hover:text-[#f4b400] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path || "/"}
                  onClick={onClose}
                  className="block text-sm font-semibold tracking-wider py-2 hover:text-[#f4b400] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Apply Button */}
          <div className="pt-6">
            <Link
              to="/admissions"
              onClick={onClose}
              className="block text-center bg-[#f4b400] text-[#0f213f] font-semibold py-3 rounded-full hover:bg-yellow-400 transition-colors"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileDrawer
