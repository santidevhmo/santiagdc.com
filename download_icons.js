import fs from "fs";
import https from "https";
import os from "os";
import path from "path";
const techStackData = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
  {
    key: "claudecode",
    title: "Claude Code",
    href: "https://www.anthropic.com/claude-code",
    categories: ["Tools", "AI"],
    theme: true,
  },
];

const baseUrl = "https://assets.chanhdai.com/images/tech-stack-icons/";
const downloadDir = path.join(os.homedir(), "Downloads", "tech-stack-icons");

// Create download directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadFile(url, filename) {
  return new Promise((resolve) => {
    const filePath = path.join(downloadDir, filename);
    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`✓ Downloaded: ${filename}`);
            resolve();
          });
        } else {
          console.log(
            `✗ Failed to download: ${filename} (${response.statusCode})`
          );
          fs.unlink(filePath, () => {}); // Delete empty file
          resolve(); // Continue with other downloads
        }
      })
      .on("error", (err) => {
        console.log(`✗ Error downloading ${filename}:`, err.message);
        fs.unlink(filePath, () => {}); // Delete empty file
        resolve(); // Continue with other downloads
      });
  });
}

async function downloadAllIcons() {
  console.log("Starting download of tech stack icons...\n");

  const downloads = [];

  for (const tech of techStackData) {
    if (tech.theme) {
      // Download both light and dark versions
      const lightUrl = `${baseUrl}${tech.key}-light.svg`;
      const darkUrl = `${baseUrl}${tech.key}-dark.svg`;

      downloads.push(downloadFile(lightUrl, `${tech.key}-light.svg`));
      downloads.push(downloadFile(darkUrl, `${tech.key}-dark.svg`));
    } else {
      // Download single version
      const url = `${baseUrl}${tech.key}.svg`;
      downloads.push(downloadFile(url, `${tech.key}.svg`));
    }
  }

  await Promise.all(downloads);

  console.log(`\n🎉 Download complete! Icons saved to: ${downloadDir}`);
}

downloadAllIcons().catch(console.error);
