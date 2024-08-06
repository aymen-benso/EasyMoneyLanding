import Link from "next/link"
import { Button } from "@/components/ui/button"
import VideoPlayer from "./VideoPlayer";

export function LAndingEm() {
  return (
    <div className="flex flex-col min-h-[100dvh] font-sans" style={{ background: 'url("/bgg.jpg") center/cover' }}>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-end" style={{ backgroundColor: 'white' }}>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            اتصل
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            حول
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            الدورات
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            الاستراتيجيات
          </Link>
        </nav>
        <Link href="#" className="flex items-center justify-center ml-auto" prefetch={false}>
          <img
            src="/logo.png"
            width={150}
            height={40}
            alt="EasyMoney"
            style={{ aspectRatio: "150/40", objectFit: "cover" }}
          />
          <span className="sr-only">EasyMoney</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 lg:grid-cols-[550px_1fr] lg:gap-12 xl:grid-cols-[650px_1fr]">
            <div className="relative">
            <VideoPlayer />
            </div>
            <div className="relative p-6 bg-glass rounded-xl shadow-lg ">
              <div className="space-y-2 text-right" dir="rtl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  افتح استراتيجيات تداول مربحة
                </h1>
                <br />
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  <span className="font-bold"> EasyMoney</span> تقدم استراتيجيات تداول خبيرة ودورات مناسبة
                  للمبتدئين وأدوات متطورة لمساعدتك على توليد المزيد من الأرباح وتقليل الخسائر ، حتى لو كنت تعاني من
                  خسائر كبيرة في الوقت الحالي.
                </p>
                <br />
                <div className="flex flex-col gap-2 min-[400px]:flex-row-reverse space-x-reverse space-x-4">
                  <Link
                    href="https://t5tvqz56el9.typeform.com/to/vo7VgBLf"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    نسخ استراتيجية مربحة
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    تعرف على المزيد
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row-reverse py-6 w-full shrink-0 items-center px-4 md:px-6 border-t" style={{ backgroundColor: 'dark' }}>
        <nav className="sm:mr-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            الخصوصية
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            شروط الخدمة
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">&copy; 2024 EasyMoney. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

function PlayIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}
