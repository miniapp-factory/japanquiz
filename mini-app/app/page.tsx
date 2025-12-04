import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import Quiz from "@/components/quiz/Quiz";

export { generateMetadata };

export default function Home() {
  return <Quiz />;
}
