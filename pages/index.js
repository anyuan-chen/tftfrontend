import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <header className="w-screen h-32 flex items-center justify-center border-b border-border">
        <Link href="/">
          <a className="font-display font-semibold text-3xl text-white">tftally</a>
        </Link>
      </header>
      <section className="flex flex-col items-center justify-center">
        <h1 className="font-display font-semibold text-4xl text-white pt-20 text-center">Your Statistics for Teamfight Tactics</h1>
        <form>
          <input type="text" className="rounded"></input>
        </form>
      </section>
    </div>
  );
}
