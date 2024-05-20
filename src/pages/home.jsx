import SectionWrapper from "@/components/common/section-wrapper"
import { Input } from "@/components/ui/input"
import AppLayout from "@/layouts/app-layout"

export default function HomePage() {
  return (
    <AppLayout>
      <SectionWrapper className="max-w-[1200px] space-y-12">
        <div className=" pt-[70px] flex items-center">
          <div className="w-max space-y-12">
            <h1 className="text-[60px] leading-[70px] font-semibold">
              Pilihan <span className="text-color-1">Artikel</span> Hari ini{" "}
              <br /> Untuk Anda
            </h1>
            <Input placeholder="Cari Artikel" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center ">
            <h1 className="text-[24px] font-bold leading-[44px]">Kecanduan</h1>
            <p className="text-color-1 text-[20px] font-semibold leading-[28px]">
              Lihat Semua
            </p>
          </div>
        </div>
      </SectionWrapper>
    </AppLayout>
  )
}
