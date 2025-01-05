import { siteConfig } from "@/config/site"
import { H1 } from "@/components/ui/typography"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b px-8 pb-4 pt-8">
      <H1 className="uppercase text-sky-600 lg:text-6xl">
        <Link href='/'>{siteConfig.name}.</Link>
      </H1>
    </header>
  )
}
