"use client"

import { Button } from "@/components/ui/button"
import { FormEvent } from "react"

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const response = await fetch('/api/uploadfile', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    console.log("Resposta da API:", data)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        accept="application/pdf"
        className="mb-4"
        required
      />
      <Button type="submit">ENVIAR PDF</Button>
    </form>
  );
}
