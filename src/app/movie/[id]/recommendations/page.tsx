import { Section } from "@/app/_components/Section";

export default function MoreLikeThis({ params }: { params: { id: number } }) {
  return (
    <Section
      title="More like --->>>"
      endpoint={`movie/${params.id}/recommendations`}
    />
  );
}
