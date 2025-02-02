import { LifeCycleIssueOne } from '@/components/life-cycle/issues';
import HomePage from '@/pages/home-page';
import LifeCyclePage from '@/pages/life-cycle-page';
import { Route, Routes as RouterRoutes } from 'react-router';

export default function Routes() {
    return (
        <RouterRoutes>
            <Route path="" element={<HomePage />} />
            <Route path="life-cycle" element={<LifeCyclePage />}>
                <Route path="issue-one" element={<LifeCycleIssueOne />} />
            </Route>
        </RouterRoutes>
    );
}
