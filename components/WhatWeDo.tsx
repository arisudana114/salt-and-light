"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function WhatWeDo() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: "corporate",
      title: "Event Organizer",
      description:
        "We handle every detail of your event from start to finish — planning, coordination, and seamless execution. Whether it’s a corporate gathering, wedding, or private celebration, our team ensures everything runs smoothly, leaving you free to enjoy the moment.",
    },
    {
      id: "weddings",
      title: "Event Decoration",
      description:
        "Our creative decoration team transforms ordinary spaces into extraordinary experiences. From elegant themes to modern concepts, we design visual atmospheres that reflect your vision and captivate every guest.",
    },
    {
      id: "concerts",
      title: "Craft",
      description:
        "We specialize in crafting custom product displays that highlight your brand’s story and aesthetic. Every element — from materials to layout — is designed to enhance visibility, engagement, and the overall presentation of your products.",
    },
    {
      id: "private",
      title: "Workshop",
      description:
        "We design and manage engaging workshops that bring ideas to life through hands-on experiences. From creative sessions to professional training, our workshops are built to inspire, educate, and connect participants in meaningful ways.",
    },
  ];

  return (
    <section className="bg-white text-gray-900 md:py-24 mt-6 px-6 md:min-h-[640px] sm:mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="max-w-2xl text-gray-600">
            We offer a full suite of event management and creative production
            services to make every moment unforgettable — from concept to
            execution.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 md:gap-24 md:mt-32">
          {services.map((service) => (
            <div key={service.id}>
              <Button
                onClick={() => setActiveModal(service.id)}
                className="md:text-lg md:py-6 md:px-8 rounded-full border border-gray-800 text-gray-800 bg-transparent hover:bg-green-600/30 hover:text-black hover:border-green-600/30 transition cursor-pointer"
              >
                {service.title}
              </Button>

              <Dialog
                open={activeModal === service.id}
                onOpenChange={() => setActiveModal(null)}
              >
                <DialogContent className="sm:max-w-lg max-w-full sm:rounded-2xl rounded-none sm:h-auto h-screen/s sm:my-0 my-0">
                  <DialogHeader>
                    <DialogTitle>{service.title}</DialogTitle>
                    <DialogDescription className="text-gray-700 mt-2">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-end mt-4">
                    <DialogClose asChild>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
