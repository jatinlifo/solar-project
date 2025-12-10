"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Article Container */}
      <div className="max-w-5xl mx-auto px-5 md:px-10 py-12">

        {/* Company Info */}
        <div className="mb-10 border-l-4 border-[#CEA42A] pl-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#CEA42A]">
            SHREEJEE ENTERPRISES
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Trusted Partner in Electrical, Solar & Power Solutions
          </p>
        </div>

        {/* Article Content */}
        <div className="space-y-7 text-gray-300 text-base md:text-lg leading-relaxed">

          <p>
            SHREEJEE ENTERPRISES is a professionally managed company delivering
            reliable electrical and solar energy solutions for residential,
            commercial, and industrial projects. With the growing demand for
            energy efficiency and sustainability, modern power systems are
            transforming the way electricity is generated, stored, and consumed.
          </p>

          <p>
            Electrical infrastructure today is no longer limited to simple wiring
            and switchboards. Smart electrical systems include automated load
            management, energy-efficient appliances, inverter-based air
            conditioners, and advanced safety equipment. These technologies not
            only enhance safety but also significantly reduce electricity
            consumption.
          </p>

          <p>
            Solar energy has emerged as one of the most powerful renewable energy
            sources in the world. By installing high-efficiency solar panels,
            homes and businesses can generate clean electricity while reducing
            dependence on traditional power grids. SHREEJEE ENTERPRISES provides
            end-to-end solar solutions, including system design, installation,
            and long-term maintenance.
          </p>

          <p>
            Battery energy storage systems play a vital role in ensuring
            uninterrupted power supply. These systems store excess solar energy
            during the day and supply electricity during power cuts or peak demand
            hours. Advanced lithium-ion batteries offer faster charging,
            superior backup, and longer operational life.
          </p>

          <p>
            Electric vehicle charging infrastructure is another rapidly growing
            segment. With the rise of electric vehicles, safe and fast charging
            stations are becoming essential. SHREEJEE ENTERPRISES supports the
            future of mobility by offering reliable EV charging solutions for
            homes, offices, and commercial spaces.
          </p>

          <p>
            The future of energy lies in smart grids, intelligent monitoring
            systems, and fully automated power management. With innovation,
            experience, and technical expertise, SHREEJEE ENTERPRISES is committed
            to delivering sustainable, cost-effective, and future-ready energy
            solutions.
          </p>

        </div>

        {/* Author / Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <div className="md:flex md:justify-between">
            <Button variant="accent" asChild className="mb-10 md:mb-0">
              <Link to="/">Back</Link>
            </Button>
            <div className="">
              <p className="text-sm text-gray-400">
                Article Published by
              </p>
              <p className="text-lg font-semibold text-[#CEA42A] mt-1">
                SHREEJEE ENTERPRISES
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Electrical • Solar • Power Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
