import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        className="w-full max-w-2xl"
        src="/rifa-1.png"
        alt="rifa"
        width={180}
        height={37}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/2.png"
        alt="rifa"
        width={180}
        height={37}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/3.png"
        alt="rifa"
        width={180}
        height={37}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/4.png"
        alt="rifa"
        width={180}
        height={37}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/5.png"
        alt="rifa"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
