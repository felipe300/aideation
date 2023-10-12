"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default async function Home() {
  return (
    <div>
    <h1 className="text-red-600">Test</h1>
      <Button onClick={() => console.log("click")}>Click Me!</Button>
    </div>
  )
}
