const userData = [
  {
    email: "john.doe@example.com",
    password: "hashed_password_1",
    username: "JamesBuckley",
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
      "https://cdn.cameo.com/video/6534cb489737222362cff4b6-processed.mp4",
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
    username: "AdamnKilla",
    role: 1,
    phone: "234-567-8901",
    description: "Award-winning comedian known for stand-up performances.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/EtCJMcYQn_avatar-1730477840797.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/673a5b675ca0f1b061a390d2-processed.mp4",
      "https://cdn.cameo.com/video/673a530bfccec25de7f65e7a-processed.mp4",
      "https://cdn.cameo.com/video/673a1bcdfccec25de7f3b3f1-processed.mp4",
      "https://cdn.cameo.com/video/673a12ab59e5d216047b9dfe-processed.mp4",
    ],
    purchased_video_url: [
      "https://cdn.cameo.com/video/6739cef1f8d7b4049f6ebc03-processed.mp4",
      "https://cdn.cameo.com/video/6739bee3c7b367c963d5c8a5-processed.mp4",
    ],
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
    username: "JordanLawley",
    role: 1,
    phone: "345-678-9012",
    description: "Fitness trainer creating motivational workout videos.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/public/nBB9uLI20.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/61651386599a61001ddc9fba-processed.mp4",
      "https://cdn.cameo.com/video/64a671fd585b08e4fd4985b5-processed.mp4",
      "https://cdn.cameo.com/video/61fd2cea6d0891f561d747bc-processed.mp4",
    ],
    purchased_video_url: [
      "https://cdn.cameo.com/video/video-60a6b39a4bca2a001dfc8503-qPUGDf245-SHNR8UpJ2-no-wm.mp4",
    ],
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
    username: "BobanMarjanovic",
    role: 1,
    phone: "567-890-1234",
    description: "Former basketball player offering inspirational talks.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/2srS1jT5-5C3B46AC-9641-45C4-993D-5A562C6B4BB8.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/v/wm-L2tiDaulME.mp4",
      "https://cdn.cameo.com/video/665f40f2fd651f2904f95fae-processed.mp4",
      "https://cdn.cameo.com/video/65fa71344ff4fe891c33df6b-processed.mp4",
    ],
    purchased_video_url: [
      "https://cdn.cameo.com/video/652d7a09b0816e43b98a8b34-processed.mp4",
      "https://cdn.cameo.com/video/650f987b26512432ad025ed6-processed.mp4",
      "https://cdn.cameo.com/video/64613064d509e7831f50c317-processed.mp4",
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
    username: "Paul",
    role: 1,
    phone: "678-901-2345",
    description: "Film actress known for iconic roles.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/fKc7x46Dx_avatar-1713349693901.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/6739f319117721796aeb9342-processed.mp4",
      "https://cdn.cameo.com/video/6739a0f5662b3e5420d240e5-processed.mp4",
      "https://cdn.cameo.com/video/67392aa889b822f5f85046c9-processed.mp4",
      "https://cdn.cameo.com/video/6739218bc7b367c963cfe4e9-processed.mp4",
    ],
    purchased_video_url: [
      "https://cdn.cameo.com/video/6737c598c92435d8eec4ab87-processed.mp4",
      "https://cdn.cameo.com/video/67372c3da041a1ca0ef27840-processed.mp4",
    ],
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
    username: "NigelFarage",
    role: 1,
    phone: "789-012-3456",
    description: "Tech visionary sharing innovation strategies.",
    profile_img_url:
      "https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=84,height=84/https://cdn.cameo.com/resizer/TxPxcfzwn_avatar-C86StPZ5K.jpg",
    profile_video_url: [
      "https://cdn.cameo.com/video/intro-video-603f87ab772d55001d2ac2a5-TpKLaNU-o-0JV9-Ylms-wm.mp4",
      "https://cdn.cameo.com/video/6737446d470960471bd2f16e-processed.mp4",
      "https://cdn.cameo.com/video/67353e11476b2e1d15a7b5a6-processed.mp4",
      "https://cdn.cameo.com/video/6735215d07f6fb0879a24abe-processed.mp4",
    ],
    purchased_video_url: [
      "https://cdn.cameo.com/video/672fb5bd2809c32ea03381ea-processed.mp4",
      "https://cdn.cameo.com/video/672c95f0b7516726d34b1b86-processed.mp4",
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
