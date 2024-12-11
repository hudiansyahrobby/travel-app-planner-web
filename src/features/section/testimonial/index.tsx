"use client";

import { useEffect, useState } from "react";

import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    text: "This app made planning my trip so easy! From booking flights to finding hidden gems at my destination, everything was seamless. Highly recommend it for any traveller!",
    name: "Alex Johnson",
    role: "Frequent Traveller",
    avatar: "/person-1.jpg",
  },
  {
    id: "testimonial-2",
    text: "I love how organised everything is! The itinerary feature helped me maximise my time and enjoy every moment of my holiday. It’s like having a personal travel assistant in your pocket!",
    name: "Samantha Lee",
    role: "Adventure Enthusiast",
    avatar: "/person-2.jpg",
  },
  {
    id: "testimonial-3",
    text: "This app is a game-changer! I discovered unique experiences and places I wouldn’t have found otherwise. It made my trip unforgettable!",
    name: "Michael Taylor",
    role: "Travel Blogger",
    avatar: "/person-3.jpg",
  },
];

const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-32">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="container mx-auto flex flex-col items-center text-center">
                <p className="mb-8 max-w-4xl font-medium md:px-8 lg:text-3xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <Avatar className="mb-2 size-12 md:size-24">
                  <AvatarImage
                    src={testimonial.avatar}
                    className="object-cover"
                  />
                  <AvatarFallback>{testimonial.name}</AvatarFallback>
                </Avatar>
                <p className="mb-1 text-sm font-medium md:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground mb-2 text-sm md:text-lg">
                  {testimonial.role}
                </p>
                <div className="mt-2 flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="container mx-auto flex justify-center py-16">
        {testimonials.map((testimonial, index) => (
          <Button
            key={testimonial.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              api?.scrollTo(index);
            }}
          >
            <div
              className={`size-2.5 rounded-full ${index === current ? "bg-primary" : "bg-gray-300"}`}
            />
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
