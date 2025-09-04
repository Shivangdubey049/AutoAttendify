"use client"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"

export default function FaceScanPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      // cleanup on unmount
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
        tracks.forEach((t) => t.stop())
      }
    }
  }, [])

  async function startCamera() {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setIsCameraOn(true)
      }
    } catch (e: any) {
      setError("Camera access failed. Please allow camera permissions.")
    }
  }

  function stopCamera() {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((t) => t.stop())
      videoRef.current.srcObject = null
      setIsCameraOn(false)
    }
  }

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Face Scan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Open the camera to scan student faces. Integrate your recognition code where indicated below.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-black/5">
              <video ref={videoRef} className="h-full w-full object-cover" aria-label="Camera preview" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              {!isCameraOn ? (
                <Button onClick={startCamera} className="bg-green-600 hover:bg-green-700">
                  Start Camera
                </Button>
              ) : (
                <Button variant="outline" onClick={stopCamera}>
                  Stop Camera
                </Button>
              )}
              <Button variant="secondary" disabled={!isCameraOn}>
                Capture Frame
              </Button>
            </div>
            {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
            <p className="mt-4 text-xs text-muted-foreground">
              TODO: On capture, pass the frame to your face recognition function and mark attendance accordingly.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Scan Log (Demo)</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
              <li>Waiting for camera input...</li>
              <li>When integrated, recognized names and statuses will appear here.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
