import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="h-[274px] w-full rounded-lg" />
      </section>
      <section className="mt-6 flex flex-col w-full sm:mt-20">
        <Skeleton className="h-10 w-56" />
        <div className="mt-12 flex flex-wrap w-full justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[400px] w-full sm:w-[356px]" />
          <Skeleton className="h-[400px] w-full sm:w-[356px]" />
          <Skeleton className="h-[400px] w-full sm:w-[356px]" />
        </div>
      </section>
    </main>
  );
};

export default Loading;
