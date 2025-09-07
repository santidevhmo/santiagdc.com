import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Santiago",
  lastName: "Aguirre",
  displayName: "Santiago Aguirre",
  username: "santiagdc",
  gender: "male",
  pronouns: "he/him",
  bio: "Creative Software Engineer",
  flipSentences: [
    "Creative Software Engineer",
    "1 triathlon, 2 marathons, and a never-ending passion for coding.",
  ],
  address: "Hermosillo, Sonora, Mexico",
  phoneNumber: "KzUyIDY2MiAzNjcgMDc1Ng==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "c2FudGlhZ3VpcnJlZ2RjQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://santiagdc.com",
  jobTitle: "Creative Software Engineer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Tim Care MX",
      website: "https://www.timcaremx.com/",
    },
    // , {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  about: `
Hello, World! I'm Santiago Aguirre: a Creative Software Engineer who loves turning ideas into high-quality products that make a difference.

With a Bachelor's Degree in Digital Business Transformation and an international exchange program in Sweden, I've developed a blend of skills in computer science and full stack development with tech consulting expertise like modeling business processes, fixing bottlenecks, and implementing tech-driven solutions to address business challenges.

4+ years of experience in coding, 11+ websites developed, and with an ongoing Internship at a Startup, I'm currently specialized in building high-quality web applications using modern front-end and back-end technologies. 

Beyond work, I love blending my technical and creative skills to turn innovative ideas into high-quality products, with a focus on solving real problems and creating meaningful impact on people.

Let's connect and collaborate!
  `,
  avatar: "https://pub-239550f7c4ef47228c2ee01c89b35545.r2.dev/TwitterPic.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1755355653",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  keywords: [
    "santiago aguirre",
    "creative full stack developer",
    "creative developer",
  ],
  dateCreated: "2025-08-30", // YYYY-MM-DD
};
