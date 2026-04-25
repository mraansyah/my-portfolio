import { useWelcome } from "./useWelcome"

const renderText = (text: string, className: string, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))
}

const Welcome = () => {
  const { titleRef, subtitleRef } = useWelcome();

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText("Hey, I'm Rafiansyah! Welcome to my",
          "text-3xl font-georama", 100)}
      </p>
      <h1 ref={titleRef}>
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>
          This portfolio is design for desktop/tabled screens only.
        </p>
      </div>
    </section>
  )
}

export default Welcome
