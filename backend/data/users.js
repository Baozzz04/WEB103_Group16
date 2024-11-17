const userData = [
  {
    email: "john.doe@example.com",
    password: "hashed_password_1",
    username: "JohnDoe",
    role: 1,
    phone: "123-456-7890",
    description: "Professional actor with 10 years of experience.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/qYRZMSRup_avatar-giL13V9L.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/v/wm-WcrIQqauYR.mp4",
      "https://cdn.cameo.com/video/653842453687a6593d363a46-processed.mp4",
    ],
    purchased_video_url: [
      "https://cdn.cameo.com/video/6533a1fc26a5bb93c55c9669-processed.mp4",
    ],
    video_price: 50,
    created_at: "2023-01-15",
    completed_orders: [1, 2],
    avg_rating: 4.9,
    comments: [
      {
        email: "customer1@example.com",
        rating: 4.5,
        comment: "Amazing performance! Really enjoyed it.",
      },
      {
        email: "customer2@example.com",
        rating: 4.8,
        comment: "Professional and timely.",
      },
      {
        email: "customer3@example.com",
        rating: 5.0,
        comment: "Fantastic video, exceeded expectations.",
      },
    ],
    actor_role: "Actors",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "jane.smith@example.com",
    password: "hashed_password_2",
    username: "JaneSmith",
    role: 1,
    phone: "234-567-8901",
    description: "Award-winning comedian known for stand-up performances.",
    profile_img_url:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Jane-Smith.Mr-and-Mrs-Smith.webp",
    profile_video_url: [
      "https://cdn.cameo.com/video/6731cdccae6e788c2269b356-processed.mp4",
    ],
    purchased_video_url: ["https://example.com/videos/comedy_customer1.mp4"],
    video_price: 40,
    created_at: "2023-02-10",
    completed_orders: [3],
    avg_rating: 4.2,
    comments: [
      {
        email: "customer4@example.com",
        rating: 4.3,
        comment: "Hilarious! Kept me laughing throughout.",
      },
      {
        email: "customer5@example.com",
        rating: 4.5,
        comment: "Very entertaining, would love to see more.",
      },
      {
        email: "customer6@example.com",
        rating: 4.1,
        comment: "Good, but a bit shorter than expected.",
      },
    ],
    actor_role: "Comedians",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "alex.lee@example.com",
    password: "hashed_password_3",
    username: "AlexLee",
    role: 1,
    phone: "345-678-9012",
    description: "Fitness trainer creating motivational workout videos.",
    profile_img_url:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Alex_Lee_official_photo.jpg",
    profile_video_url: ["https://cdn.cameo.com/v/wm-WcrIQqauYR.mp4"],
    purchased_video_url: [],
    video_price: 30,
    created_at: "2023-03-05",
    completed_orders: [],
    avg_rating: 4.0,
    comments: [
      {
        email: "customer7@example.com",
        rating: 4.0,
        comment: "Great workout tips! Very motivational.",
      },
      {
        email: "customer8@example.com",
        rating: 3.8,
        comment: "Good, but could use more variety in exercises.",
      },
      {
        email: "customer9@example.com",
        rating: 4.2,
        comment: "Excellent trainer, very inspiring!",
      },
    ],
    actor_role: "Athletes",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "sarah.connor@example.com",
    password: "hashed_password_4",
    username: "SarahConnor",
    role: 2,
    phone: "456-789-0123",
    description: "Enthusiastic content creator specializing in tech reviews.",
    profile_img_url:
      "https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_%28Linda_Hamilton%29.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/6731cdccae6e788c2269b356-processed.mp4",
    ],
    purchased_video_url: ["https://example.com/videos/tech_customer1.mp4"],
    video_price: 45,
    created_at: "2023-04-01",
    completed_orders: [4],
    avg_rating: 4.5,
    comments: [
      {
        email: "customer10@example.com",
        rating: 4.5,
        comment: "Very informative, learned a lot!",
      },
      {
        email: "customer11@example.com",
        rating: 4.6,
        comment: "Great review, clear and concise.",
      },
      {
        email: "customer12@example.com",
        rating: 4.3,
        comment: "Good, but could use more examples.",
      },
    ],
    actor_role: "Creators",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "michael.jordan@example.com",
    password: "hashed_password_5",
    username: "MichaelJordan",
    role: 1,
    phone: "567-890-1234",
    description: "Former basketball player offering inspirational talks.",
    profile_img_url:
      "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
    profile_video_url: ["https://cdn.cameo.com/v/wm-WcrIQqauYR.mp4"],
    purchased_video_url: [
      "https://example.com/videos/inspiration_customer1.mp4",
    ],
    video_price: 100,
    created_at: "2023-05-20",
    completed_orders: [5, 6],
    avg_rating: 4.8,
    comments: [
      {
        email: "customer13@example.com",
        rating: 5.0,
        comment: "Absolutely inspiring!",
      },
      {
        email: "customer14@example.com",
        rating: 4.7,
        comment: "Motivational, loved every second.",
      },
      {
        email: "customer15@example.com",
        rating: 4.9,
        comment: "Powerful message, very uplifting.",
      },
    ],
    actor_role: "Athletes",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "emma.watson@example.com",
    password: "hashed_password_6",
    username: "EmmaWatson",
    role: 1,
    phone: "678-901-2345",
    description: "Film actress known for iconic roles.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/EtCJMcYQn_avatar-1730477840797.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/6731cdccae6e788c2269b356-processed.mp4",
    ],
    purchased_video_url: [],
    video_price: 75,
    created_at: "2023-06-12",
    completed_orders: [],
    avg_rating: 2.3,
    comments: [
      {
        email: "customer16@example.com",
        rating: 3.0,
        comment: "Decent video, but could be better.",
      },
      {
        email: "customer17@example.com",
        rating: 2.5,
        comment: "Not as engaging as I expected.",
      },
      {
        email: "customer18@example.com",
        rating: 2.0,
        comment: "Could improve in delivery.",
      },
    ],
    actor_role: "Actors",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "steve.jobs@example.com",
    password: "hashed_password_7",
    username: "SteveJobs",
    role: 1,
    phone: "789-012-3456",
    description: "Tech visionary sharing innovation strategies.",
    profile_img_url:
      "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg",
    profile_video_url: ["https://cdn.cameo.com/v/wm-WcrIQqauYR.mp4"],
    purchased_video_url: [
      "https://example.com/videos/innovation_customer1.mp4",
    ],
    video_price: 90,
    created_at: "2023-07-07",
    completed_orders: [7, 8],
    avg_rating: 3.5,
    comments: [
      {
        email: "customer19@example.com",
        rating: 3.7,
        comment: "Interesting insights on innovation.",
      },
      {
        email: "customer20@example.com",
        rating: 3.5,
        comment: "Could be more in-depth.",
      },
      {
        email: "customer21@example.com",
        rating: 3.2,
        comment: "Good, but expected more examples.",
      },
    ],
    actor_role: "Creators",
    purchased_by_emails: ["nnbao04@gmail.com"],
  },
  {
    email: "mark.zuckerberg@example.com",
    password: "hashed_password_8",
    username: "MarkZuckerberg",
    role: 2,
    phone: "890-123-4567",
    description: "Social media entrepreneur providing business insights.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/EtCJMcYQn_avatar-1730477840797.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/6731cdccae6e788c2269b356-processed.mp4",
    ],
    purchased_video_url: [],
    video_price: 60,
    created_at: "2023-08-15",
    completed_orders: [9],
    avg_rating: 3.9,
    comments: [
      {
        email: "customer22@example.com",
        rating: 4.0,
        comment: "Great business insights!",
      },
      {
        email: "customer23@example.com",
        rating: 3.8,
        comment: "Good advice, though a bit general.",
      },
      {
        email: "customer24@example.com",
        rating: 4.1,
        comment: "Valuable tips for entrepreneurs.",
      },
    ],
    actor_role: "International",
  },
];

export default userData;
