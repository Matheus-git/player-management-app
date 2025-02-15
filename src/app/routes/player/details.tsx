import { ContentLayout } from "@/components/layouts";
import { DetailsPlayer } from "@/features/players/details/details";

const DetailsPlayerRoute = () => {
  return (
    <ContentLayout title="Detalhes do jogador">
      <DetailsPlayer />
    </ContentLayout>
  );
};

export default DetailsPlayerRoute;
