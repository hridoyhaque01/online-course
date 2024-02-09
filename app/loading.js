import loader from "@/public/loader.gif";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white-100 dark:bg-black-900 flex items-center justify-center z-[999999]">
      <div>
        <Image src={loader} width={500} alt="loader" />
      </div>
    </div>
  );
}
