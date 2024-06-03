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
              alt="Temple majestueux au cœur de la steppe mongole"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/2.jpg"
              alt="Silhouette admirant le lever de soleil depuis le sommet du mont Agung à Bali"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/3.jpg"
              alt="Figure contemplative dominant les collines du Nevada"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/4.jpg"
              alt="Œuvre sacrée sculptée dans la pierre en Thaïlande"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/5.jpg"
              alt="Figure solitaire se perdant dans l’immensité du désert du Sahara"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/6.jpg"
              alt="Temple ancestral enveloppé de neige dans le paysage hivernal du Japon"
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
              alt="Paysage montagneux époustouflant vu d’en haut en Sibérie"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-110"
              src="./assets/gallery/9.jpg"
              alt="Moment de sérénité au cœur des vastes steppes mongoles"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
