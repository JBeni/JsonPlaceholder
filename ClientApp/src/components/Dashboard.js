import React, { useEffect, useState } from "react";
import * as endpointService from "../services/endpoint.service";
import TypographyCard from './reusable/TypographyCard';
import Loader from "./loader/Loader";

export default function Dashboard() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await getPosts();
        })();
    }, []);

    const getPosts = async () => {
        var response = await endpointService.getPostsData();
        setPosts(response);
        setLoading(false);
    }

    if (loading === false) {
        return (
            <div className="container col-md-10 rounded mt-5 mb-5">
                <h4 className="d-flex justify-content-center mt-3 mb-4 display-5">Posts</h4>
                <div className="row d-flex justify-content-center mb-1">
                    {
                        posts.map((item) => {
                            return (
                                <TypographyCard className="mb-3" key={item.id} id={item.id} title={item.title} body={item.body} />
                            );
                        })
                    }
                </div>
            </div>
        );
    } else {
        return (
            <Loader />
        );
    }
}
