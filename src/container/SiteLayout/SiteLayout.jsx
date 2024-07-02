import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Routers from '../../routers/router';
import Footer from '../../components/Footer/Footer';
import withRouter from '../../hoc/withRouter';

const SiteLayout = ({ location, navigate }) => {
    const [isError, setIsError] = useState(false);
    const { userId } = useSelector((state) => state.login.loggedInData.userInfo.data);

    return !isError ? (
        <>
            <Header userId={userId} />
            <Routers />
            <Footer />
        </>
    ) : (
        <div>Error appeared</div>
    );
};

export default withRouter(SiteLayout);
