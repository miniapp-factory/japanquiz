'use client';
import { Button } from '@/components/ui/button';
import { Share } from '@/components/share';
import { url } from '@/lib/metadata';

export default function Results({ score, total }: { score: number; total: number }) {
  const percent = Math.round((score / total) * 100);
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold">Results</h2>
      <p>You scored {score} out of {total} ({percent}%)</p>
      <Button onClick={() => window.location.reload()}>Retake Quiz</Button>
      <Share text={`I scored ${percent}% on the Japan Manners Quiz! ${url}`} />
    </div>
  );
}
