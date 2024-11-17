const orderData = [
  {
    id: 1001,
    completed_date: new Date("2024-11-05"),
    price: 150,
    requested_by: 2,
    rating: 5,
    comments: [
      { rating: 5, comment: "Great work! The video quality was excellent." },
    ],
  },
  {
    id: 1002,
    completed_date: null,
    price: 200,
    requested_by: 2,
    rating: null,
    comments: [],
  },
  {
    id: 1003,
    completed_date: new Date("2024-11-03"),
    price: 150,
    requested_by: 1,
    rating: 4,
    comments: [{ rating: 4, comment: "Satisfied with the result." }],
  },
];

export default orderData;
