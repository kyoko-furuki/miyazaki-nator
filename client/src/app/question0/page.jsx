import Link from "next/link";

export default function Page() {
  return (
    <div>
      <img src="/aishou/who.jpg" alt="お相手は派？"></img>
      <Link href="/question" class="yes">
        <img src="/aishou/man.jpg" alt="男性"></img>
      </Link>
      <Link href="/question2" class="yes3">
        <img src="/aishou/woman.jpg" alt="女性"></img>
      </Link>
    </div>
  );
}
