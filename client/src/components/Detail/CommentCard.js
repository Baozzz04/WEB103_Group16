// import React from "react";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// export default function CommentCard({
//   username,
//   comment,
//   rating,
//   isEditable,
//   onDelete,
// }) {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;

//   return (
//     <div className="w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
//       <div className="flex items-center justify-between mb-2">
//         <h3 className="text-lg font-semibold text-black">{username}</h3>
//         <div className="flex gap-1">
//           {[...Array(fullStars)].map((_, index) => (
//             <FaStar key={index} className="text-yellow-400 text-sm" />
//           ))}
//           {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
//         </div>
//       </div>

//       <p className="text-gray-800 text-sm mb-2">{comment}</p>

//       {isEditable && (
//         <div className="flex space-x-4 justify-end text-sm">
//           <button className="text-red-500 font-semibold" onClick={onDelete}>
//             Delete
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function CommentCard({
  username,
  comment,
  rating,
  isEditable,
  onDelete,
  onEdit,
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-black">{username}</h3>
        <div className="flex gap-1">
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 text-sm" />
          ))}
          {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
        </div>
      </div>

      <p className="text-gray-800 text-sm mb-2">{comment}</p>

      {isEditable && (
        <div className="flex space-x-4 justify-end text-sm">
          <button className="text-blue-500 font-semibold" onClick={onEdit}>
            Edit
          </button>
          <button className="text-red-500 font-semibold" onClick={onDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
