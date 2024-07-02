import { useState } from 'react';

import Header from '../../components/Header/Header';
import Routers from '../../routers/router';
import Footer from '../../components/Footer/Footer';
import withRouter from '../../hoc/withRouter';

const SiteLayout = ({ location, navigate }) => {
    const [isError, setIsError] = useState(false);

    return !isError ? (
        <>
            <Header />
            <Routers />
            <Footer />
        </>
    ) : (
        <div>Error appeared</div>
    );
};

export default withRouter(SiteLayout);
