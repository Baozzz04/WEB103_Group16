const userData = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "hashed_password_123",
    username: "johndoe",
    role: 2,
    phone: "+1234567890",
    description: "A professional videographer with 5 years of experience.",
    profile_img_url: "https://example.com/images/johndoe.jpg",
    profile_video_url: "https://example.com/videos/johndoe_intro.mp4",
    video_price: 150,
    created_at: new Date("2024-11-01T12:34:56Z"),
    completed_orders: [1001, 1002, 1003],
    avg_rating: 4,
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "hashed_password_456",
    username: "janesmith",
    role: 1,
    phone: "+1987654321",
    description: "Content creator looking for professional video services.",
    profile_img_url: "https://example.com/images/janesmith.jpg",
    profile_video_url: null,
    video_price: null,
    created_at: new Date("2024-10-20T08:15:30Z"),
    completed_orders: [1004],
    avg_rating: null,
  },
];

export default userData;
