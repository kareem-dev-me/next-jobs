export const conversations = [
  {
    id: "janne",
    name: "Janne Cooper",
    preview: "I want to apply for the Social Media Assistant role",
    time: "12 mins ago",
    unread: true,
  },
  {
    id: "john",
    name: "John Doe",
    preview: "Is this still available?",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: "sarah",
    name: "Sarah Lee",
    preview: "Thank you for the interview invitation",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "miguel",
    name: "Miguel Chen",
    preview: "Can we reschedule to Thursday?",
    time: "Mon",
    unread: false,
  },
];

export const threads: Record<
  string,
  { from: "them" | "me"; text: string; time: string }[]
> = {
  janne: [
    {
      from: "them",
      text: "Hi Maria, I want to apply for the Social Media Assistant role at Nomad.",
      time: "10:12",
    },
    {
      from: "me",
      text: "Hi Janne, thanks for reaching out. Please send your portfolio and we will review it this week.",
      time: "10:18",
    },
    {
      from: "them",
      text: "I just shared the link. Looking forward to hearing from you.",
      time: "10:21",
    },
  ],
  john: [
    {
      from: "them",
      text: "Is the Brand Designer role still available?",
      time: "08:40",
    },
    {
      from: "me",
      text: "Yes, we are still reviewing applications until Friday.",
      time: "09:02",
    },
  ],
  sarah: [
    {
      from: "them",
      text: "Thank you for the interview invitation. I confirmed for Wednesday at 2pm.",
      time: "Yesterday",
    },
  ],
  miguel: [
    {
      from: "them",
      text: "Can we reschedule to Thursday morning?",
      time: "Mon",
    },
    {
      from: "me",
      text: "Thursday 10:00 works. I will send a new invite.",
      time: "Mon",
    },
  ],
};
