import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex-b">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src={"/icons/bookmark.svg"}
            alt={"bookmark"}
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <h2 className=" text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="my-flex gap-2">
        <Image
          src={"/icons/clock.svg"}
          alt={"duration"}
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} mins duration</p>
      </div>
      ☺
      <Link href={`/companions/${id}`}>
        <Button className="btn-primary w-full justify-center ">
          Launch Lesson
        </Button>
      </Link>
    </article>
  );
};
export default CompanionCard;
