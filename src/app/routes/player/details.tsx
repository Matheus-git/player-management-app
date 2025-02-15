import { ContentLayout } from "@/components/layouts";
import { PlayerDetails } from "@/features/players/details/PlayerDetails";

const DetailsPlayerRoute = () => {
  return (
    <ContentLayout
      title="Detalhes do jogador"
      goBack
    >
      <PlayerDetails />
    </ContentLayout>
  );
};

export default DetailsPlayerRoute;
