import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        className="w-full max-w-2xl"
        src="/Diapositiva1.jpeg"
        alt="rifa"
        width={1000}
        height={1000}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/Diapositiva2.jpeg"
        alt="rifa"
        width={1000}
        height={1000}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/Diapositiva3.jpeg"
        alt="rifa"
        width={1000}
        height={1000}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/Diapositiva4.jpeg"
        alt="rifa"
        width={1000}
        height={1000}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/Diapositiva5.jpeg"
        alt="rifa"
        width={1000}
        height={1000}
        priority
      />
      <Image
        className="w-full max-w-2xl"
        src="/Diapositiva6.jpeg"
        alt="rifa"
        width={1000}
        height={1000}
        priority
      />
    </main>
  );
}
