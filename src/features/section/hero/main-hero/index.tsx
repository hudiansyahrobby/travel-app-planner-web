import React from "react";

import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const MainHero = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Plan Your Dream Trips With Ease
          </h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            Explore tools to create personalized travel itineraries, manage
            bookings, and discover amazing destinations. Your ultimate travel
            companion starts here.
          </p>
        </div>
        <Button size="lg" className="mt-10">
          Get Started Now
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            <Avatar className="size-14 border bg-white p-2">
              <AvatarImage src="/globe.svg" alt="globe" />
            </Avatar>

            <Avatar className="p- size-14 border bg-white p-3">
              <AvatarImage src="/calendar.svg" alt="calendar" />
            </Avatar>

            <Avatar className="size-14 border bg-white p-2">
              <AvatarImage src="/plane.svg" alt="plane" />
            </Avatar>

            <Avatar className="size-14 border bg-white p-2">
              <AvatarImage src="/suitcase.svg" alt="suitcase" />
            </Avatar>

            <Avatar className="size-14 border bg-white p-2">
              <AvatarImage src="/hotel.svg" alt="hotel" />
            </Avatar>
          </span>
          <div>
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-muted-foreground text-left font-medium">
              Loved by over 200 travellers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
