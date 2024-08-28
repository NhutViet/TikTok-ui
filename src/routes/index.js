import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

// không đăng nhập có thể xem được App
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
// đăng nhập có thể xem được App
const privateRoutes = [];

export { publicRoutes, privateRoutes };
