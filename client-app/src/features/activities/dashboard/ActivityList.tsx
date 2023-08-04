import { useStore } from 'app/stores/store';
import { observer } from 'mobx-react-lite';
import { Header } from 'semantic-ui-react';
import ActivityListItem from './ActivityListItem';
import { Fragment } from 'react';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivites } = activityStore;

    return (
        <>
            {groupedActivites.map(([group, activties]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {activties.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </>

    )
})