import React from "react"
import Header from "@/components/Header"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />
      <div className={"container"}>{children}</div>
    </div>
  )
}
