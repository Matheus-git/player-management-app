import { ContentLayout } from "@/components/layouts";
import { EditPlayer } from "@/features/players/edit/PlayerEdit";

const EditPlayerRoute = () => {
  return (
    <ContentLayout title="Edição do jogador">
      <EditPlayer />
    </ContentLayout>
  );
};

export default EditPlayerRoute;
