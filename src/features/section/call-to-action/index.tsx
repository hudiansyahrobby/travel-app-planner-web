import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { callToActionIcons } from "./config";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
        <div className="md:-space-x-26 container relative mx-auto flex flex-col items-start md:flex-row md:items-center">
          <div className="bg-background z-20 -mx-[calc(theme(container.padding))] mb-8 w-[calc(100%+2*theme(container.padding))] shrink-0 px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  Welcome to Our World of Travel
                </h1>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
          <div className="h-full min-h-full w-full">
            <div className="relative flex h-[480px] w-full flex-col gap-16 overflow-hidden pb-8 pt-12 md:py-32">
              {callToActionIcons.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute flex gap-x-24 whitespace-nowrap odd:-translate-x-24",
                    i % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                  )}
                  style={{ top: `${i * 10}rem` }}
                >
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="border-background bg-background size-24 rounded-xl border shadow-xl"
                    >
                      <div className="bg-muted/20 size-full p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {callToActionIcons.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute top-0 ml-24 flex gap-x-24 whitespace-nowrap odd:-translate-x-24",
                    i % 2 === 0
                      ? "animate-marquees"
                      : "animate-marquees-reverse"
                  )}
                  style={{ top: `${i * 10}rem` }}
                >
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="border-background bg-background size-24 rounded-xl border shadow-xl"
                    >
                      <div className="bg-muted/20 size-full p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
