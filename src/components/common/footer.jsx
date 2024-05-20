import React from "react"
import { BsApple, BsWindows } from "react-icons/bs"
import { DiAndroid } from "react-icons/di"
import { FaCheckCircle, FaChrome, FaLinux } from "react-icons/fa"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import SectionWrapper from "./section-wrapper"

export default function Footer() {
  return (
    <div className="bg-[#F8FCF8ff]">
      <SectionWrapper className="max-w-[1200px] py-[40px]">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <img
              src="/images/No-Smoke.svg"
              className="w-[58] h-[74px] object-cover"
              alt=""
            />
            <p className="font-bold text-text24_44">NicFit</p>
            <p className="text-text14_20 text-color-4">
              NicFit, langkah pertama menuju bebas rokok dengan panduan,
              dukungan, dan komunitas yang <br /> kuat.
            </p>
            <div className="flex items-center gap-x-8 text-text14_20">
              <div>
                <p className="font-bold">Email</p>
                <p>hello@maxwell.com</p>
              </div>
              <div>
                <p className="font-bold">Phone Number</p>
                <p>+1 {"(201)"} 895-3801</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-text24_44 font-bold">
              Langkah Pertama <br /> ke{" "}
              <span className="text-color-1">Bebas Rokok</span>
            </p>
            <Button className="rounded-full bg-color-1 text-white">
              Download Mobile Apps
            </Button>
          </div>
        </div>
        <Separator className="my-7 bg-slate-400" />
        <div className="text-text14_20 flex items-center justify-between">
          <div className="flex items-center gap-x-2 ">
            <FaCheckCircle />
            <span>Available on all platforms</span>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-2  border rounded-full px-[16px] py-[10px]">
              <BsWindows />
              <span>Windows</span>
            </div>
            <div className="flex items-center gap-x-2  border rounded-full px-[16px] py-[10px]">
              <BsApple />
              <span>macOS</span>
            </div>
            <div className="flex items-center gap-x-2  border rounded-full px-[16px] py-[10px]">
              <FaLinux />
              <span>Linux</span>
            </div>
            <div className="flex items-center gap-x-2  border rounded-full px-[16px] py-[10px]">
              <FaChrome />
              <span>Chrome</span>
            </div>
            <div className="flex items-center gap-x-2  border rounded-full px-[16px] py-[10px]">
              <BsApple />
              <span>iOS</span>
            </div>
            <div className="flex items-center gap-x-2  border rounded-full px-[16px] py-[10px]">
              <DiAndroid />
              <span>Android</span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
