import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Home/NavigationBar";
import TalentCard from "../components/Home/TalentCard";
import { getAllUsers } from "../services/UsersAPI";
import { getAuth } from "firebase/auth";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);

  const auth = getAuth();
  const userAuth = auth.currentUser;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedPrice, selectedReview]);

  const applyFilters = () => {
    let tempUsers = [...users];

    if (selectedCategory) {
      tempUsers = tempUsers.filter(
        (user) => user.actor_role === selectedCategory
      );
    }

    if (selectedPrice) {
      const [minPrice, maxPrice] = parsePriceRange(selectedPrice);
      tempUsers = tempUsers.filter(
        (user) =>
          user.video_price >= minPrice &&
          (maxPrice === null || user.video_price <= maxPrice)
      );
    }

    if (selectedReview) {
      tempUsers = tempUsers.filter(
        (user) => Math.floor(user.avg_rating) === selectedReview
      );
    }

    setFilteredUsers(tempUsers);
  };

  const parsePriceRange = (price) => {
    if (price === "$0 - $25") return [0, 25];
    if (price === "$25 - $50") return [25, 50];
    if (price === "$50 - $75") return [50, 75];
    if (price === "$75 - $100") return [75, 100];
    if (price === "$100+") return [100, null];
    return [0, null];
  };

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
            <div className="text-xl font-semibold">
              Hi, {userAuth.email.split("@")[0]}!
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <TalentCard
                key={user.id}
                id={user.id}
                profileImgUrl={user.profile_img_url}
                username={user.username}
                role={user.description}
                rating={user.avg_rating}
                price={user.video_price}
              />
            ))}
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
