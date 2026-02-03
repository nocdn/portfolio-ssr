import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-inter flex w-screen flex-col items-center py-20 font-[440]">
      <div className="mb-20 flex w-full max-w-2xl justify-between">
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeft size={15} /> Back
        </Link>
      </div>
      <div className="w-full max-w-2xl leading-relaxed">{children}</div>
    </div>
  )
}
