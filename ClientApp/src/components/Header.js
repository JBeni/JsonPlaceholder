import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
} from "mdb-react-ui-kit";
import { initialUserValues } from "../services/helper.service";
import * as endpointService from "../services/endpoint.service";
import Loader from "./loader/Loader";

export default function Header() {
    const [user, setUser] = useState(initialUserValues);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await getUser();
        })();
    }, []);

    const getUser = async () => {
        var response = await endpointService.getUserData();
        setUser(response);
        setLoading(false);
    };

    if (loading === false) {
        return (
            <>
                <h4 className="d-flex justify-content-center mt-3 mb-4 display-5">User Details</h4>
                <div className="d-flex justify-content-center">
                    <MDBBtn
                        type="submit"
                        color="secondary"
                        style={{ marginRight: '10px' }}
                        onClick={() => { }}
                    >
                        TODOS
                    </MDBBtn>
                    <MDBCard style={{ maxWidth: "22rem" }}>
                        <MDBCardBody>
                            <MDBCardText>
                                <strong>Name</strong>: {user.name}
                            </MDBCardText>
                            <MDBCardText>
                                <strong>Username</strong>: {user.username}
                            </MDBCardText>
                            <MDBCardText>
                                <strong>Email</strong>: {user.email}
                            </MDBCardText>
                            <MDBCardText>
                                <strong>Phone</strong>: {user.phone}
                            </MDBCardText>
                            <MDBCardText>
                                <strong>Website</strong>: {user.website}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ marginLeft: '20px', maxWidth: "22rem" }}>
                        <MDBCardBody>
                            <MDBCardText>
                                <strong>User Address</strong>
                            </MDBCardText>
                            <MDBCardText>
                                {user.address.city} City, Street {user.address.street},
                                Suite {user.address.suite}, ZipCode {user.address.zipcode}
                            </MDBCardText>
                            <MDBCardText>
                                <strong>Company Details</strong>
                            </MDBCardText>
                            <MDBCardText>
                                {user.company.name} Company, {user.company.catchPhrase}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </>
        );
    } else {
        return (
            <Loader />
        );
    }
}
