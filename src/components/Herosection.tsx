// import Link from "next/link";

// function Herosection() {
//   return (
//     <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
//       <div className="p-4  relative z-10 w-full text-center">
//         <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//           Mster the art of Music
//         </h1>
//         <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
//           Dive into comprehensive music cources and transform your musical
//           journey today. Whather youre a besginner or looking to refine your
//           sills,join us to unlock true potential.
//         </p>
//         <div className="mt-4">
//           <Link href={"/cources"}>Explore Courcses</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Herosection;
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function Herosection() {
  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 pt-24 md:pt-32">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Cources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
