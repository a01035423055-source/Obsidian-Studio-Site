import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Video,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function SeoyeonContentLabLanding() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <section className="px-6 py-20 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
              AI Short-form Content Studio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight">
              <h1 className="text-5xl font-semibold tracking-tight">
                Obsidian Studio
              </h1>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              제품은 있지만 릴스, 틱톡, 쇼츠 콘텐츠를 만들 시간이 없다면 제품
              판매에 맞춘 짧은 영상을 대신 제작해드립니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:a01035423055@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                무료 샘플 문의하기 <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                패키지 보기
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl"
          >
            <div className="rounded-[1.5rem] bg-neutral-900 p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
                  <Video className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Short-form Content System</p>
                  <p className="text-sm text-neutral-400">
                    Reels · TikTok · Shorts
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "제품 분석",
                  "판매형 스크립트",
                  "AI 보이스 / 자막",
                  "CapCut 기반 편집",
                  "Before & After 구조",
                  "CTA 문구 제공",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            이런 분들에게 적합합니다
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "제품은 있지만 콘텐츠 제작이 어려운 쇼핑몰 셀러",
              "드랍쉬핑을 시작했지만 영상이 부족한 분",
              "매일 업로드할 숏폼 콘텐츠가 필요한 브랜드",
              "광고 느낌이 아닌 자연스러운 판매 영상이 필요한 분",
            ].map((text) => (
              <div
                key={text}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-neutral-300"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="px-6 py-16 md:px-16 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-7 w-7" />
            <h2 className="text-3xl font-bold md:text-4xl">패키지</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "$79", desc: "영상 5개 제작" },
              { name: "Growth", price: "$199", desc: "영상 15개 제작" },
              { name: "Monthly", price: "$399/mo", desc: "주 5개 영상 제작" },
            ].map((pack) => (
              <div
                key={pack.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-2xl font-bold">{pack.name}</h3>
                <p className="mt-3 text-neutral-400">{pack.desc}</p>
                <p className="mt-8 text-4xl font-bold">{pack.price}</p>
                <a
                  href="mailto:your-email@example.com"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 font-semibold text-neutral-950 hover:bg-neutral-200"
                >
                  문의하기
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white p-8 text-center text-neutral-950 md:p-12">
          <MessageCircle className="mx-auto mb-5 h-10 w-10" />
          <h2 className="text-3xl font-bold md:text-4xl">
            제품 링크를 보내주세요
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            제품을 확인한 뒤 어떤 숏폼 콘텐츠 구조가 적합한지 무료로
            제안해드립니다.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 font-semibold text-white hover:bg-neutral-800"
          >
            무료 상담 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
