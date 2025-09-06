"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function Chatbot() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Load Botpress webchat script
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js"
    script.async = true

    script.onload = () => {
      setTimeout(() => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            configUrl: "https://files.bpcontent.cloud/2025/09/02/12/20250902120545-A7IAS2I6.json",
            hostUrl: "https://cdn.botpress.cloud/webchat/v3.2",
          })
          setIsLoaded(true)
        }
      }, 1000)
    }

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      clearTimeout(fallbackTimer)
    }
  }, [])

  const handleChatClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleChatClick}
        className="fixed bottom-6 right-6 z-[9999] bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary/90 transition-all duration-200 hover:scale-110"
        aria-label="Open chat support"
        title="Chat with us"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md h-[600px] max-h-[80vh] flex flex-col">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Chat Support</h3>
              <button
                onClick={closeModal}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chatbot iframe */}
            <div className="flex-1 p-0">
              <iframe
                src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/02/12/20250902120545-A7IAS2I6.json"
                className="w-full h-full border-0 rounded-b-lg"
                title="Chat Support"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Extend window type for TypeScript
declare global {
  interface Window {
    botpressWebChat: {
      init: (config: { configUrl: string; hostUrl: string }) => void
    }
  }
}
