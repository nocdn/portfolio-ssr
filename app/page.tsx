import { HomeDesktop, HomeMobile } from "@/components/Home"

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <HomeDesktop />
      </div>
      <div className="md:hidden">
        <HomeMobile />
      </div>
    </>
  )
}
