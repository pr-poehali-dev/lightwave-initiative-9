import { useState, useEffect, useRef } from "react"
import { LineShadowText } from "@/components/line-shadow-text"

const slides = [
  {
    id: 1,
    title: "ПРЯМОЙ ЭФИР ИЗ ВАШЕГО ТЕЛЕФОНА",
    hashtag: "#НАЧАЛКА_TV",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/ccc597ff-7c7d-4cd7-9282-23bffc0b5b89.jpg",
    accent: "from-red-600 to-pink-500",
    glow: "rgba(239,68,68,0.5)",
  },
  {
    id: 2,
    title: "ЛЕНТА: ПЕРВЫЙ ПОСТ — И ТЫ В ИГРЕ",
    hashtag: "#ПЕРВЫЙПОСТ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/2747d8c3-35e3-40fd-9f03-a3e9dc718878.jpg",
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
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/c8f4d145-221f-4f62-ab8b-4448f434d443.jpg",
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
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/72e2f52c-5deb-4f23-a2ff-632e1fad61eb.jpg",
    accent: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.5)",
  },
  {
    id: 11,
    title: "МЕМ КЛАССА: ВИРУСНОСТЬ ЗА 3 СЕКУНДЫ",
    hashtag: "#МЕМ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/97d9cc19-356e-40ce-81c2-6c2af87cdb30.jpg",
    accent: "from-yellow-400 to-orange-400",
    glow: "rgba(251,191,36,0.55)",
  },
  {
    id: 12,
    title: "ЛС: ТО, ЧТО НЕ ДЛЯ ЛЕНТЫ",
    hashtag: "#ЛССООБЩЕНИЯ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/a8e06827-0a2b-4c88-9942-09487e5c1e80.jpg",
    accent: "from-pink-400 to-rose-500",
    glow: "rgba(251,113,133,0.5)",
  },
  {
    id: 13,
    title: "ЭКРАННОЕ ВРЕМЯ: УРОК, КОТОРОГО НЕТ В РАСПИСАНИИ",
    hashtag: "#СКРИНТАЙМ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/790445c0-d755-4fe0-84b2-71304738acf8.jpg",
    accent: "from-red-500 to-orange-600",
    glow: "rgba(239,68,68,0.55)",
  },
  {
    id: 14,
    title: "АЛГОРИТМ ЗНАЕТ ТЕБЯ ЛУЧШЕ КЛАССНОГО РУКОВОДИТЕЛЯ",
    hashtag: "#АЛГОРИТМ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/ca59fee3-0484-4657-af5a-e2c2d0405960.jpg",
    accent: "from-blue-400 to-cyan-500",
    glow: "rgba(34,211,238,0.5)",
  },
  {
    id: 15,
    title: "ДЕТОКС: КОГДА ТЕЛЕФОН ОТДЫХАЕТ — РАСТЁШЬ ТЫ",
    hashtag: "#ДЕТОКС",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/341617ec-b048-41ac-9ec4-3a54c28f938e.jpg",
    accent: "from-green-400 to-teal-500",
    glow: "rgba(52,211,153,0.5)",
  },
  {
    id: 16,
    title: "СЕЛФИ: ЗЕРКАЛО ИЛИ МАСКА?",
    hashtag: "#СЕЛФИ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/6b28efe7-20d5-44ab-a5a8-648a0ce097aa.jpg",
    accent: "from-fuchsia-400 to-pink-500",
    glow: "rgba(232,121,249,0.5)",
  },
  {
    id: 17,
    title: "КОММЕНТЫ: ИНТЕРНЕТ НЕ ЗАБЫВАЕТ НИЧЕГО",
    hashtag: "#КОММЕНТЫ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/f26ea8bc-7984-4031-abf2-bfdd45bb3cf1.jpg",
    accent: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.55)",
  },
  {
    id: 18,
    title: "АВАТАР: ТЫ 2.0 — ОБНОВЛЕНИЕ ВЫШЛО",
    hashtag: "#АВАТАР",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/ea6a724c-aa34-4e4c-a17b-1fd937c10378.jpg",
    accent: "from-indigo-400 to-violet-500",
    glow: "rgba(129,140,248,0.5)",
  },
  {
    id: 19,
    title: "ОНЛАЙН-КЛАСС: ШКОЛА В 25 ОКНАХ",
    hashtag: "#ОНЛАЙНКЛАСС",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/a14d2e3c-42cf-4b25-83f3-91b1d6c7f1d6.jpg",
    accent: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.5)",
  },
  {
    id: 20,
    title: "УВЕДОМЛЕНИЕ: ЖИЗНЬ ТРЕБУЕТ ВНИМАНИЯ",
    hashtag: "#УВЕДОМЛЕНИЯ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/b21fd2b9-bcca-4d30-a817-bb03155bda54.jpg",
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.5)",
  },
  {
    id: 21,
    title: "@НИКИ: КАК КЛИЧКИ, НО НАВСЕГДА",
    hashtag: "#НИК",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/ac2c3d67-c8bd-4ec9-990f-2af1d58d499e.jpg",
    accent: "from-sky-400 to-indigo-500",
    glow: "rgba(56,189,248,0.5)",
  },
  {
    id: 22,
    title: "ТРЕНДОВЫЙ ЗВУК: ВСЯ ШКОЛА ТАНЦУЕТ В ТАКТ",
    hashtag: "#ТРЕНД",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/dffc0c9f-0738-4df7-aaa3-5cc78589feb6.jpg",
    accent: "from-violet-500 to-pink-500",
    glow: "rgba(167,139,250,0.5)",
  },
  {
    id: 23,
    title: "ЧЕЛЛЕНДЖ ПРИНЯТ — КАМЕРА ВКЛЮЧЕНА",
    hashtag: "#ЧЕЛЛЕНДЖ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/c5cf6d59-9cf4-4b4d-8751-a6703ff2a363.jpg",
    accent: "from-lime-400 to-green-500",
    glow: "rgba(163,230,53,0.5)",
  },
  {
    id: 24,
    title: "ВМЕСТЕ ОНЛАЙН — ВМЕСТЕ НАВСЕГДА",
    hashtag: "#ДРУЖБА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/ca565e9e-722d-4a26-ad60-0014316ac2ce.jpg",
    accent: "from-yellow-400 to-pink-500",
    glow: "rgba(251,191,36,0.55)",
  },
  {
    id: 25,
    title: "СЕТИ — ДЛЯ ДОБРА. КЛАСС — ДЛЯ ЖИЗНИ",
    hashtag: "#ПОЗИТИВ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/cd3babb5-9c22-4d73-9f56-831668af258d.jpg",
    accent: "from-rose-400 to-orange-400",
    glow: "rgba(251,113,133,0.55)",
  },
  {
    id: 31,
    title: "УЧАТ В ШКОЛЕ — ГОТОВЯТ К ЖИЗНИ",
    hashtag: "#УЧЁБА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/df884218-be07-4068-b7c4-679062f3de26.jpg",
    accent: "from-blue-400 to-indigo-500",
    glow: "rgba(99,102,241,0.5)",
  },
  {
    id: 32,
    title: "СОВРЕМЕННАЯ ПЕРЕМЕНА: ВСЕ В ТЕЛЕФОНАХ",
    hashtag: "#ПЕРЕМЕНА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/1130e65c-ca7b-4397-96bd-52e7406d1ad9.jpg",
    accent: "from-pink-500 to-fuchsia-500",
    glow: "rgba(236,72,153,0.5)",
  },
  {
    id: 33,
    title: "АЙ, БУДЕТ КРУТО — ИИ УЖЕ В КЛАССЕ",
    hashtag: "#ИСКУССТВЕННЫЙ_ИНТЕЛЛЕКТ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/0ccfc172-c435-417d-ac92-eda1c675d0ca.jpg",
    accent: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.5)",
  },
  {
    id: 34,
    title: "СКАЗКА В СЕТИ: НЕ ВСЁ ЗОЛОТО, ЧТО БЛЕСТИТ",
    hashtag: "#СКАЗКА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/21b202e8-ce69-499b-b16c-bc9b59aa4cc7.jpg",
    accent: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.5)",
  },
  {
    id: 35,
    title: "РОДИТЕЛЬСКИЙ КОНТРОЛЬ: ЛЮБОВЬ В НАСТРОЙКАХ",
    hashtag: "#СЕМЬЯ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/95873dbd-e203-4ec9-8015-225be80015dd.jpg",
    accent: "from-orange-400 to-amber-500",
    glow: "rgba(251,146,60,0.5)",
  },
  {
    id: 36,
    title: "ЗАКОН СПОРТЗАЛА: ТЕЛО — ТОЖЕ ТВОЙ ПРОФИЛЬ",
    hashtag: "#СПОРТ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/01779ee1-38ee-4904-a9b1-3ac1765a8c84.jpg",
    accent: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.5)",
  },
  {
    id: 37,
    title: "ДОМАШНЕЕ ЗАДАНИЕ: ЭТО НЕ НАКАЗАНИЕ",
    hashtag: "#ДЗ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/c05a206f-cd8f-4939-a871-3a75bfeb394c.jpg",
    accent: "from-yellow-400 to-orange-500",
    glow: "rgba(251,191,36,0.5)",
  },
  {
    id: 38,
    title: "ЛЮБИМЫЕ РОДИТЕЛИ — ТВОЙ ПЕРВЫЙ ЛАЙК",
    hashtag: "#РОДИТЕЛИ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/f9b1ba9e-2529-4348-9e48-aa4ca7a15c95.jpg",
    accent: "from-rose-400 to-pink-500",
    glow: "rgba(251,113,133,0.5)",
  },
  {
    id: 39,
    title: "ОФФЛАЙН-РЕЖИМ НА ПРИРОДЕ: ПЕРЕЗАГРУЗКА",
    hashtag: "#ПРИРОДА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/4b2f3d95-a658-4ca7-a003-7219d25b8f88.jpg",
    accent: "from-lime-400 to-green-500",
    glow: "rgba(163,230,53,0.5)",
  },
  {
    id: 40,
    title: "АНГЛИЙСКИЙ ЯЗЫК: ТВОЙ ПАРОЛЬ В МИР",
    hashtag: "#ENGLISH",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/43885ced-fe29-471d-91fc-9282370e194a.jpg",
    accent: "from-sky-400 to-indigo-500",
    glow: "rgba(56,189,248,0.5)",
  },
  {
    id: 41,
    title: "ДРУЖБА НАВСЕГДА — НЕ ТОЛЬКО В СТОРИС",
    hashtag: "#ДРУЖБА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/05b9a102-5398-4e97-a5b4-90074b832e43.jpg",
    accent: "from-fuchsia-400 to-pink-500",
    glow: "rgba(232,121,249,0.5)",
  },
  {
    id: 42,
    title: "КЛЯТВА БУДУЩЕГО ПЯТИКЛАССНИКА",
    hashtag: "#КЛЯТВА",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/8c8b947d-0fda-4819-a27e-949dc04b8676.jpg",
    accent: "from-yellow-400 to-amber-500",
    glow: "rgba(251,191,36,0.6)",
  },
  {
    id: 43,
    title: "СЛОВО КЛАССНОГО РУКОВОДИТЕЛЯ",
    hashtag: "#УЧИТЕЛЬ",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/e3178030-060f-4a79-a95b-55933c0b535b.jpg",
    accent: "from-orange-400 to-red-500",
    glow: "rgba(249,115,22,0.55)",
  },
  {
    id: 26,
    title: "",
    hashtag: "",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/fbe9f76f-4997-4617-a180-41ecb2b2719c.jpg",
    accent: "",
    glow: "rgba(139,92,246,0.4)",
  },
  {
    id: 27,
    title: "",
    hashtag: "",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/161ae637-ba4f-4355-8471-5c3f79787ef3.jpg",
    accent: "",
    glow: "rgba(6,182,212,0.4)",
  },
  {
    id: 28,
    title: "",
    hashtag: "",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/2d72f0d5-a60c-4415-b83f-b2b6532b5f84.jpg",
    accent: "",
    glow: "rgba(236,72,153,0.4)",
  },
  {
    id: 29,
    title: "",
    hashtag: "",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/65be2e70-711e-41ef-a3d8-bfaf532d82cd.jpg",
    accent: "",
    glow: "rgba(52,211,153,0.4)",
  },
  {
    id: 30,
    title: "",
    hashtag: "",
    image: "https://cdn.poehali.dev/projects/567a8a5e-dc7f-4f46-aabe-86d6dcd0b05d/files/bedd2e1c-2581-41a5-bde5-7b297d11512b.jpg",
    accent: "",
    glow: "rgba(99,102,241,0.4)",
  },
]

export default function Index() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const touchStartY = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const wheelCooldown = useRef(false)

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
      if (wheelCooldown.current) return
      if (e.deltaY > 30) {
        goNext()
        wheelCooldown.current = true
        setTimeout(() => { wheelCooldown.current = false }, 600)
      } else if (e.deltaY < -30) {
        goPrev()
        wheelCooldown.current = true
        setTimeout(() => { wheelCooldown.current = false }, 600)
      }
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
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${slide.glow} 0%, transparent 65%)`,
            mixBlendMode: "screen",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5">
        <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white text-xs font-bold tracking-widest uppercase">Началка.TV</span>
        </span>

      </header>

      {/* Main slide content */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-20 sm:pb-24 px-6 sm:px-12"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        {slide.hashtag && (
          <div className="mb-4">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.accent} text-sm sm:text-base font-bold tracking-widest`}>
              {slide.hashtag}
            </span>
          </div>
        )}

        {slide.title && (
          <h1
            className="text-white text-center font-black leading-tight mb-8 text-balance"
            style={{ fontSize: "clamp(1.4rem, 4.5vw, 4rem)", textShadow: `0 0 60px ${slide.glow}, 0 2px 20px rgba(0,0,0,0.8)` }}
          >
            <LineShadowText shadowColor="white" className="italic">
              {slide.title}
            </LineShadowText>
          </h1>
        )}
        {!slide.title && <div className="mb-8" />}


      </div>




    </div>
  )
}