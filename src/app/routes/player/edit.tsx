import { ContentLayout } from "@/components/layouts";
import { PlayerEdit } from "@/features/players/edit/PlayerEdit";

const EditPlayerRoute = () => {
  return (
    <ContentLayout
      title="Edição do jogador"
      goBack
    >
      <PlayerEdit />
    </ContentLayout>
  );
};

export default EditPlayerRoute;
