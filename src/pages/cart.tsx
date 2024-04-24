import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Cart() {
  return (
    <main
      className={`flex min-h-screen max-h-screen h-full flex-col w-full items-start justify-start bg-gray-50 ${inter.className}`}
    >

    </main>
  );
}
