import Image from "next/image";

export default function Home() {
  return (
    <body background="/background/top.jpg">
      <a href="/select" className="top-button">
        <img src="/button/let's-play.jpg" alt="play"></img>
      </a>
    </body>
  );
}
