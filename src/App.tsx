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
                href="https://open.kakao.com/o/sK7GjYti"
                target="_blank"
                rel="noopener noreferrer"
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
                <img
                  src={
                    pack.name === "Starter"
                      ? "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
                      : pack.name === "Growth"
                      ? "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80"
                      : "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                  }
                  alt={pack.name}
                  className="w-full h-44 object-cover rounded-2xl mb-5"
                />
                <h3 className="text-2xl font-bold">{pack.name}</h3>
                <p className="mt-3 text-neutral-400">{pack.desc}</p>
                <p className="mt-8 text-4xl font-bold">{pack.price}</p>
                <a
                  href="https://open.kakao.com/o/sK7GjYti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 font-semibold text-neutral-950 hover:bg-neutral-200"
                >
                  문의하기
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            포트폴리오 & 패키지
          </h2>

          <p className="text-gray-400 mb-12">
            브랜드처럼 보이는 콘텐츠 제작을 제공합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                  alt="Starter Content"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                Starter Content Pack
              </h3>

              <p className="text-gray-400 mb-5">
                릴스 입문용 패키지. 기본 편집 / 자막 / 감각적인 구성 제작
              </p>

              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• 기본 릴스 편집</li>
                <li>• AI 자막 스타일</li>
                <li>• 간단한 전환 효과</li>
                <li>• 릴스 테스트용 추천</li>
              </ul>

              <div className="flex flex-col gap-3">
                <a
                  href="#starter-portfolio"
                  className="text-center border border-white/30 rounded-full py-3 hover:bg-white hover:text-black transition"
                >
                  포트폴리오 보기
                </a>

                <a
                  href="https://buy.stripe.com/8x26oGdLfbZvdQedk51ZS03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-200 transition"
                >
                  결제하기
                </a>
              </div>
            </div>

            {/* Growth */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl scale-105">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                  alt="Growth Content"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                Growth Content Pack
              </h3>

              <p className="text-gray-400 mb-5">
                브랜드 무드와 감성을 강화한 고급 콘텐츠 제작 패키지
              </p>

              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• 고급 릴스 편집</li>
                <li>• 브랜드 무드 연출</li>
                <li>• AI 스타일 영상</li>
                <li>• 브랜딩 계정 추천</li>
              </ul>

              <div className="flex flex-col gap-3">
                <a
                  href="#growth-portfolio"
                  className="text-center border border-white/30 rounded-full py-3 hover:bg-white hover:text-black transition"
                >
                  포트폴리오 보기
                </a>

                <a
                  href="https://buy.stripe.com/8x228qcHb4x313sbbX1ZS05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-200 transition"
                >
                  결제하기
                </a>
              </div>
            </div>

            {/* Monthly */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Monthly Content"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                Monthly Content Pack
              </h3>

              <p className="text-gray-400 mb-5">
                지속적인 콘텐츠 운영과 브랜드 방향성을 함께 관리하는 패키지
              </p>

              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>• 월 단위 콘텐츠 제작</li>
                <li>• 릴스 운영 방향 관리</li>
                <li>• 브랜드 피드 통일</li>
                <li>• 장기 운영 계정 추천</li>
              </ul>

              <div className="flex flex-col gap-3">
                <a
                  href="#monthly-portfolio"
                  className="text-center border border-white/30 rounded-full py-3 hover:bg-white hover:text-black transition"
                >
                  포트폴리오 보기
                </a>

                <a
                  href="https://buy.stripe.com/aFaeVc22xaVrfYm6VH1ZS04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-white text-black rounded-full py-3 font-semibold hover:bg-gray-200 transition"
                >
                  결제하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Portfolio */}
      <section
        id="starter-portfolio"
        className="px-6 py-20 bg-zinc-950 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Starter Portfolio</h3>

          <p className="text-gray-400 mb-10">
            기본 릴스 편집과 감각적인 영상 구성을 중심으로 제작합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Before After"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">릴스 편집 전후 비교</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                  alt="Caption Style"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">AI 기반 자막 스타일</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
                  alt="Reel Edit"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">짧고 감각적인 릴스 편집</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Portfolio */}
      <section id="growth-portfolio" className="px-6 py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Growth Portfolio</h3>

          <p className="text-gray-400 mb-10">
            브랜드 무드와 감성을 강화한 콘텐츠 제작 예시입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Brand Mood"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">브랜드 감성 연출</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="AI Visual"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">AI 기반 영상 스타일</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                  alt="Growth Content"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">시네마틱 릴스 편집</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Portfolio */}
      <section
        id="monthly-portfolio"
        className="px-6 py-20 bg-zinc-950 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Monthly Portfolio</h3>

          <p className="text-gray-400 mb-10">
            지속적인 콘텐츠 운영과 브랜드 관리를 위한 패키지입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Content System"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">월 단위 콘텐츠 시스템</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="Feed Branding"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">브랜드 피드 통일감</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                  alt="Monthly Direction"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">콘텐츠 방향성 관리</p>
            </div>
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
            href="https://open.kakao.com/o/sK7GjYti"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-neutral-950 px-6 py-4 font-semibold text-white hover:bg-neutral-800"
          >
            무료 상담 신청하기 <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}

