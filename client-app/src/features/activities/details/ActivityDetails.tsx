import LoadingComponent from "app/layout/LoadingComponent";
import { useStore } from "app/stores/store";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";


export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: selectedActivity, openForm, cancelSelectedActivity} = activityStore;

    if (!selectedActivity) return <LoadingComponent />;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{selectedActivity.title}</Card.Header>
                <Card.Meta>
                    <span>{selectedActivity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {selectedActivity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm(selectedActivity.id)} color="blue" content="edit" />
                    <Button onClick={cancelSelectedActivity} color="grey" content="cancel" />
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}