import LoadingComponent from "app/layout/LoadingComponent";
import { useStore } from "app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";


export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: selectedActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !selectedActivity) return <LoadingComponent />;
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
                    <Button as={Link} to={`/manage/${selectedActivity.id}`} color="blue" content="edit" />
                    <Button as={Link} to={'/activities'} color="grey" content="cancel" />
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
});