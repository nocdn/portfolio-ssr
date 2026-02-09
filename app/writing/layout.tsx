import { cacheLife } from "next/cache"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function WritingLayout({ children }: { children: React.ReactNode }) {
  "use cache"
  cacheLife("max")

  return (
    <div className="font-inter flex w-full flex-col items-center py-20 font-[440]">
      <div className="mb-20 flex w-full max-w-2xl justify-between">
        <Link href="/" className="group flex items-center gap-1.5">
          <ArrowLeft
            size={15}
            className="transition-transform duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1)] group-hover:-translate-x-0.5"
          />{" "}
          Back
        </Link>
      </div>
      <div className="w-full max-w-2xl leading-relaxed">{children}</div>
    </div>
  )
}
