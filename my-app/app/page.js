'use client'
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickClose = () => {
    setIsVisible(false);
  };

  const handleStarClick = () => {
    setIsVisible(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200">
      <div className="flex justify-center items-center h-screen bg-gray-100 relative">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-[500px] h-[600px] text-center">
          <img
            src="/shirt.jpg"
            alt="Product Image"
            className="w-full h-[350px] object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <div
              className="text-yellow-500 mb-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleStarClick}
            >
              ★★★★☆
            </div>
            <div className="text-2xl text-green-600">$99.99</div>
          </div>
        </div>
        {(isHovered || isVisible) && (
          <div className="absolute w-[400px] h-[300px] bg-slate-900 p-5">
            <div className="flex justify-between items-center mb-5">
              <div className="flex gap-3">
                <div className="text-yellow-500 mb-2">★★★★☆</div>
                <h2 className="text-white">3.8 out of 5</h2>
              </div>
              <IoClose color="white" size="30" onClick={handleClickClose} />
            </div>
            <div className="flex items-center gap-8 mb-5">
              <h2 className="text-white text-sm text-yellow-500">5★</h2>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-5">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[170px] h-5"></div>
              </div>
              <h2 className="text-white">46%</h2>
            </div>
            <div className="flex items-center gap-8 mb-5">
              <h2 className="text-white text-sm text-yellow-500">4★</h2>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-5">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[140px] h-5"></div>
              </div>
              <h2 className="text-white">34%</h2>
            </div>
            <div className="flex items-center gap-8 mb-5">
              <h2 className="text-white text-sm text-yellow-500">3★</h2>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-5">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[70px] h-5"></div>
              </div>
              <h2 className="text-white">5%</h2>
            </div>
            <div className="flex items-center gap-8 mb-5">
              <h2 className="text-white text-sm text-yellow-500">2★</h2>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-5">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[70px] h-5"></div>
              </div>
              <h2 className="text-white">5%</h2>
            </div>
            <div className="flex items-center gap-8 mb-5">
              <h2 className="text-white text-sm text-yellow-500">1★</h2>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-5">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[120px] h-5"></div>
              </div>
              <h2 className="text-white">10%</h2>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
