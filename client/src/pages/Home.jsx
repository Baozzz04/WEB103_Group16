import React, { useState } from "react";
import NavigationBar from "../components/Home/NavigationBar";
import TalentCard from "../components/Home/TalentCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const togglePrice = (price) => {
    setSelectedPrice(selectedPrice === price ? null : price);
  };

  const toggleReview = (stars) => {
    setSelectedReview(selectedReview === stars ? null : stars);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex flex-row p-6 ml-20 space-x-8">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-400 mr-2"></div>
            <div className="text-xl font-semibold">Hi, Christian</div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
            <TalentCard />
          </div>
        </div>

        <div className="w-1/4">
          <h2 className="font-bold text-2xl mb-4 -ml-4">Filters</h2>

          <div className="mb-6 mr-16">
            <h3 className="text-xl font-semibold mb-2">Category</h3>
            <ul className="space-y-2">
              {[
                "Actors",
                "Athletes",
                "Comedians",
                "Creators",
                "International",
                "Musicians",
              ].map((category) => (
                <li
                  key={category}
                  className="flex items-center gap-1 justify-between ml-6"
                >
                  <span className="text-lg">{category}</span>
                  <span
                    onClick={() => toggleCategory(category)}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 mr-16">
            <h3 className="font-semibold text-xl mb-2">Price</h3>
            <ul className="space-y-2">
              {[
                "$0 - $25",
                "$25 - $50",
                "$50 - $75",
                "$75 - $100",
                "$100+",
              ].map((price) => (
                <li
                  key={price}
                  className="flex items-center gap-1 justify-between ml-6"
                >
                  <span className="text-lg">{price}</span>
                  <span
                    onClick={() => togglePrice(price)}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 cursor-pointer ${
                      selectedPrice === price
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mr-16">
            <h3 className="font-semibold text-xl mb-2">User's Review</h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map((stars) => (
                <li
                  key={stars}
                  className="flex items-center gap-1 justify-between ml-6"
                >
                  <div className="flex">
                    {Array.from({ length: stars }, (_, i) => (
                      <span key={i} className="text-yellow-500">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <span
                    onClick={() => toggleReview(stars)}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 cursor-pointer ${
                      selectedReview === stars
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
