import { useState, useEffect, useRef } from "react"
import { LineShadowText } from "@/components/line-shadow-text"

const slides = [
  {
    id: 1,
    title: "ПРЯМОЙ ЭФИР ИЗ ВАШЕГО ТЕЛЕФОНА",
    hashtag: "#НАЧАЛКА_TV",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/a735f2b7-fa84-4d39-892f-e4234b32be82.jpg",
    accent: "from-red-600 to-pink-500",
    glow: "rgba(239,68,68,0.5)",
  },
  {
    id: 2,
    title: "ЛЕНТА: ПЕРВЫЙ ПОСТ — И ТЫ В ИГРЕ",
    hashtag: "#ПЕРВЫЙПОСТ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/e98419d3-6434-43ca-b585-5fbe53a8ad73.jpg",
    accent: "from-pink-500 to-fuchsia-500",
    glow: "rgba(236,72,153,0.5)",
  },
  {
    id: 3,
    title: "СТОРИС: ЖИЗНЬ ЗА 24 СЕКУНДЫ",
    hashtag: "#STORIES",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/f2a86022-654b-4d0c-bed4-70bc0cfb1fbb.jpg",
    accent: "from-fuchsia-500 to-purple-500",
    glow: "rgba(168,85,247,0.5)",
  },
  {
    id: 4,
    title: "ВИРУС «НОСТАЛЬЖИ-ТРОЯН» — НЕ КЛИКАЙ",
    hashtag: "#ВИРУС",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/2ca1d435-2caa-411b-b041-141273f1b307.jpg",
    accent: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.5)",
  },
  {
    id: 5,
    title: "ПАПКА «НЕОТПРАВЛЕННЫЕ ВОСПОМИНАНИЯ»",
    hashtag: "#АРХИВ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/fff08bb0-dd1e-464e-921a-6ddcb7b03516.jpg",
    accent: "from-blue-500 to-indigo-500",
    glow: "rgba(99,102,241,0.5)",
  },
  {
    id: 6,
    title: "ЛАЙК — ЭТО НОВЫЙ БУКЕТ ЦВЕТОВ",
    hashtag: "#ЛАЙК",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/3ef9d691-35e7-4584-b8ef-36a15ce665eb.jpg",
    accent: "from-red-500 to-rose-500",
    glow: "rgba(244,63,94,0.6)",
  },
  {
    id: 7,
    title: "ФОЛЛОВЕРЫ: КАК ПЕРВОКЛАССНИКИ С РАНЦАМИ",
    hashtag: "#ФОЛЛОВЕРЫ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/a7f67cda-66d7-4f45-a023-6a84f6dfd5bb.jpg",
    accent: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.5)",
  },
  {
    id: 8,
    title: "РЕПОСТ В БУДУЩЕЕ",
    hashtag: "#РЕПОСТ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/c251b2d5-f123-4da7-8cab-8916c0c2c3f7.jpg",
    accent: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.5)",
  },
  {
    id: 9,
    title: "ПОДПИСКА НА СЧАСТЬЕ (БЕСПЛАТНО)",
    hashtag: "#ПОДПИСКА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/8c663ab9-0791-478a-8154-c862bb024c01.jpg",
    accent: "from-yellow-400 to-amber-500",
    glow: "rgba(251,191,36,0.5)",
  },
  {
    id: 10,
    title: "#4СНЕПРОСТОКЛАСС — ТРЕНД НАВСЕГДА",
    hashtag: "#4СНЕПРОСТОКЛАСС",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/f5126993-3422-4690-9d10-fe139f077951.jpg",
    accent: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.5)",
  },
]

export default function Index() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const touchStartY = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goTo = (index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  const goNext = () => goTo(Math.min(current + 1, slides.length - 1))
  const goPrev = () => goTo(Math.max(current - 1, 0))

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext()
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [current, animating])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 30) goNext()
      else if (e.deltaY < -30) goPrev()
    }
    const el = containerRef.current
    if (el) el.addEventListener("wheel", handleWheel, { passive: false })
    return () => { if (el) el.removeEventListener("wheel", handleWheel) }
  }, [current, animating])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (delta > 40) goNext()
    else if (delta < -40) goPrev()
  }

  const slide = slides[current]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated neon SVG background threads */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="30%" stopColor="rgba(251,146,60,1)" />
              <stop offset="70%" stopColor="rgba(249,115,22,0.8)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
            </radialGradient>
            <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="25%" stopColor="rgba(251,146,60,0.9)" />
              <stop offset="60%" stopColor="rgba(234,88,12,0.7)" />
              <stop offset="100%" stopColor="rgba(234,88,12,0)" />
            </radialGradient>
            <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="35%" stopColor="rgba(251,146,60,1)" />
              <stop offset="75%" stopColor="rgba(234,88,12,0.6)" />
              <stop offset="100%" stopColor="rgba(234,88,12,0)" />
            </radialGradient>
            <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="15%" stopColor="rgba(249,115,22,0.8)" />
              <stop offset="85%" stopColor="rgba(249,115,22,0.8)" />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="12%" stopColor="rgba(251,146,60,0.7)" />
              <stop offset="88%" stopColor="rgba(251,146,60,0.7)" />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="18%" stopColor="rgba(234,88,12,0.8)" />
              <stop offset="82%" stopColor="rgba(234,88,12,0.8)" />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g>
            <path id="t1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#threadFade1)" strokeWidth="0.8" fill="none" opacity="0.8" />
            <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#t1" /></animateMotion></circle>
            <path id="t2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#threadFade2)" strokeWidth="1.5" fill="none" opacity="0.7" />
            <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#t2" /></animateMotion></circle>
            <path id="t3" d="M60 715 Q230 600 390 550 Q550 500 700 530 Q850 560 1010 470 Q1160 380 1350 350" stroke="url(#threadFade3)" strokeWidth="1.2" fill="none" opacity="0.6" />
            <circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#t3" /></animateMotion></circle>
            <path id="t4" d="M100 740 Q270 640 440 590 Q610 540 760 570 Q910 600 1060 510 Q1210 420 1400 390" stroke="url(#threadFade1)" strokeWidth="0.5" fill="none" opacity="0.5" />
            <circle r="1.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#t4" /></animateMotion></circle>
            <path id="t5" d="M30 710 Q180 580 330 530 Q480 480 630 510 Q780 540 930 450 Q1080 360 1250 330" stroke="url(#threadFade2)" strokeWidth="1.0" fill="none" opacity="0.9" />
            <circle r="2.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)"><animateMotion dur="3.8s" repeatCount="indefinite"><mpath href="#t5" /></animateMotion></circle>
          </g>
        </svg>
      </div>

      {/* Slide image */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45) saturate(1.3)" }}
        />
        {/* Neon color overlay per slide */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${slide.glow} 0%, transparent 65%)`,
            mixBlendMode: "screen",
          }}
        />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Началка.TV</span>
          </span>
        </div>
        <div className="text-white/40 text-xs font-mono tracking-wider">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </header>

      {/* Main slide content */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20 sm:pb-24 px-6 sm:px-12"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        {/* Hashtag */}
        <div className="mb-4">
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accent} text-sm sm:text-base font-bold tracking-widest`}>
            {slide.hashtag}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-center font-black leading-tight mb-8 text-balance"
          style={{ fontSize: "clamp(1.6rem, 5vw, 4.5rem)", textShadow: `0 0 60px ${slide.glow}, 0 2px 20px rgba(0,0,0,0.8)` }}
        >
          <LineShadowText shadowColor="white" className="italic">
            {slide.title}
          </LineShadowText>
        </h1>

        {/* Navigation arrows */}
        <div className="flex items-center gap-6">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? "28px" : "6px",
                  height: "6px",
                  background: i === current
                    ? `linear-gradient(to right, ${slide.glow.replace("0.5", "1")}, white)`
                    : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={current === slides.length - 1}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Slide number indicator side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: "3px",
              height: i === current ? "28px" : "10px",
              background: i === current ? "white" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-white/25 text-xs tracking-wider hidden sm:block">
        ← → или скролл для навигации
      </div>
    </div>
  )
}
