import { Section } from "@/app/_components/Section";
// import { PaginationControls } from "@/app/PaginationControls";

export default function MoreLikeThis({ params }: { params: { id: number } }) {
  return (
    <div>
      <Section
        title="More like --->>>"
        endpoint={`movie/${params.id}/recommendations`}
      />
      {/* <PaginationControls /> */}
    </div>
  );
}
