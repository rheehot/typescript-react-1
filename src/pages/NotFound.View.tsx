import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";

function NotFoundView(props: any) {

    return (
        <div>
            <Helmet>
                <title>Not Found | my site</title>
            </Helmet>
            <h2 className="font-semibold text-2xl mb-3">Page Not Found.</h2>
            <h4 className="font-medium text-base mb-5">
                해당 경로는 존재하지 않습니다.
            </h4>
            <Link className="hover:underline text-lime-600" to="/">
                메인 페이지로 이동 &rarr;
            </Link>
        </div>
    );
}

export default NotFoundView;