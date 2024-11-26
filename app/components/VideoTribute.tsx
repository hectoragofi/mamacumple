'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

export function VideoTribute() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-16 px-4 bg-purple-100">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Tributo en Video</h2>
      <div className="max-w-3xl mx-auto relative rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          src="/placeholder.mp4"
          className="w-full"
          onEnded={() => setIsPlaying(false)}
        />
        <motion.button
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={togglePlay}
        >
          <motion.div
            className="bg-purple-600 rounded-full p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <PauseIcon className="w-12 h-12 text-white" />
            ) : (
              <PlayIcon className="w-12 h-12 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

