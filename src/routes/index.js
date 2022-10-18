import { HeaderOnly } from "~/components/Layouts";
import { FollowingPage, HomePage, ProfilePage, SearchPage, UploadPage } from "~/pages";

const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/following', component: FollowingPage},
    {path: '/profile', component: ProfilePage},
    {path: '/upload', component: UploadPage, layout: HeaderOnly},
    {path: '/search', component: SearchPage, layout: null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
