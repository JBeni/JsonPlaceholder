import React, { useEffect, useState } from "react";
import { Chart, Dataset } from 'react-rainbow-components';
import * as endpointService from '../services/endpoint.service';
import Loader from "./loader/Loader";

export default function TodosComp(props) {
    const [loading, setLoading] = useState(true);
    const [labels, setLabels] = useState([]);
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        (async () => {
            await getTodosData();
        })();
    }, []);

    async function getTodosData() {
        var response = await endpointService.getTodosData();

        if (response?.length > 0 || response !== undefined) {
            var labels = [];
            var dataset = [];
            for (var i = 0; i < response.length; i++) {
                labels.push(`Todo ${response[i].id}`);
                dataset.push(response[i].title.replace(/[^a-zA-Z]/g, '').length);
            }
            setLabels(labels);
            setDataset(dataset);
            setLoading(false);
        }
    }

    const renderDataset = () => {
        return <Dataset title="Data" values={dataset} />;
    }

    if (loading === false) {
        return (
            <>
                <div className="row d-flex justify-content-center mt-3">
                    <h4 className="d-flex justify-content-center">Todos Bar Chart</h4>
                    <div className="d-flex justify-content-center col-md-6">
                        <Chart labels={labels} type="bar">
                            {renderDataset()}
                        </Chart>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <Loader />
        );
    }
}
