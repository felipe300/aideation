"use client"
import Typewriter from "typewriter-effect"

export default function TypeWriterTitle () {
  return (
  <Typewriter
      options={{
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
        .typeString("🚀 Supercharged Productivity.")
        .pauseFor(1000)
        .deleteAll()
        .typeString("🤖 AI-Powered Insights.")
        .start()
      }}
    />
  )
}
