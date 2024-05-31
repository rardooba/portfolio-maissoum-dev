"use client"
/* eslint-disable @next/next/no-img-element */
import { Section } from "../../organisms/_components/Section";

export const Gallery = () => {
  return (
    <Section className="flex justify-center">
      <div className="grid md:grid-cols-3 gap-4 w-full">
        <div className="grid gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/1.jpg"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/2.jpg"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/4.jpg"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/5.jpg"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/6.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/7.JPG"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/8.JPG"
              alt=""
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/9.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
