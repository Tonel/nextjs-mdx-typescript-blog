import { Nunito } from "next/font/google"
import Link from "next/link"

const nunito = Nunito({ subsets: ["latin"] })
export default function Header() {
  return (
    <div className={`header mb-4 ${nunito.className}`}>
      <div className={"container"}>
        <div className={"header-title mt-4"}>
          <Link href="/">My MDX Blog in Next.js</Link>
        </div>
      </div>
    </div>
  )
}
