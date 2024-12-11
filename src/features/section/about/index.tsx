import Image from "next/image";

import { GlobeIcon, LuggageIcon, PlaneIcon } from "lucide-react";

const About = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            Making Travel Planning Effortless
          </h1>
          <p className="max-w-xl text-lg">
            Discover tools to design itineraries, manage bookings, and explore
            unique destinations—all in one place
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Image
            height={384}
            width={700}
            src="/travelers.svg"
            alt="traveler"
            className="size-full max-h-96 rounded-2xl object-contain"
          />
          <div className="bg-muted flex flex-col rounded-2xl p-10">
            <p className="text-muted-foreground text-sm font-bold">
              OUR MISSION
            </p>
            <p className="text-lg font-medium">
              We believe that travel planning should be seamless and inspiring.
              Our mission is to empower adventurers worldwide to craft their
              dream trips without stress, enabling unforgettable journeys with
              ease.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Empowering Your Journey, Simplifying Travel
            </h2>
            <p className="text-muted-foreground">
              From dreaming to exploring, we take the hassle out of travel
              planning so you can focus on what matters—making memories.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <LuggageIcon className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Customised Itineraries
              </h3>
              <p className="text-muted-foreground">
                We empower travellers to create personalised plans tailored to
                their interests, budgets, and schedules.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <PlaneIcon className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Seamless Bookings
              </h3>
              <p className="text-muted-foreground">
                Book flights, hotels, and activities all in one place with our
                easy-to-use tools.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <GlobeIcon className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Explore New Destinations
              </h3>
              <p className="text-muted-foreground">
                Discover unique spots and local favourites to make your trips
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
