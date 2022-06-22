import { useAuth } from '../useAuth/useAuth';

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated && <Component />;
};

export default PrivateRoute;