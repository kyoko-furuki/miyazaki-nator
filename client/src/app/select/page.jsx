import Link from "next/link";

export default function Page() {
  return (
    <div>
      <img src="/background/select.jpg" alt="select"></img>
      <Link href="/rensou1" class="rensou">
        <img src="/button/select-rensou.jpg" alt="連想モード"></img>
      </Link>
      <Link href="/question0" class="aishou">
        <img src="/button/select-aishou.jpg" alt="相性モード"></img>
      </Link>
    </div>
  );
}
