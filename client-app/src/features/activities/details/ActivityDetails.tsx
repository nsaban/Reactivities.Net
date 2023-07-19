import { Activity } from "app/models/activity";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm(activity.id)} color="blue" content="edit" />
                    <Button onClick={cancelSelectActivity} color="grey" content="cancel" />
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}