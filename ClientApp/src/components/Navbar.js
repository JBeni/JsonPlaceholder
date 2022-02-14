import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBNavbar,
    MDBModal,
} from "mdb-react-ui-kit";
import { initialUserValues } from "../services/helper.service";
import * as endpointService from "../services/endpoint.service";
import Loader from "./loader/Loader";
import UserDataModal from "./UserDataModal";

export default function Navbar(props) {
    const [showUserModal, setShowUserModal] = useState(false);
    const [user, setUser] = useState(initialUserValues);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await getUser();
        })();
    }, []);

    const displayTodosChart = (e) => {
		e.preventDefault();
        props.handleShowTodos(true);
	};

    const displayUserModal = () => {
        setShowUserModal(true);
	};

    const handleUserDataModal = (value) => {
        setShowUserModal(value);
    }

    const getUser = async () => {
        var response = await endpointService.getUserData();
        setUser(response);
        setLoading(false);
    };

    if (loading === false) {
        return (
            <>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBBtn
                            type="submit"
                            color="secondary"
                            style={{ marginRight: '10px' }}
                            onClick={(e) => displayTodosChart(e)}
                        >
                            TODOS
                        </MDBBtn>

                        <div className="d-flex justify-content-end">
                            <strong className="display-6 mr-2">Welcome,</strong>
                            <MDBBtn
                                type="submit"
                                onClick={(e) => displayUserModal(e)}
                            >
                                {user.email}
                            </MDBBtn>
                        </div>
                    </MDBContainer>
                </MDBNavbar>

                <MDBModal show={showUserModal} setShow={setShowUserModal} tabIndex='-1'>
                    <UserDataModal userData={user} handleUserDataModal={handleUserDataModal.bind(this)} />
                </MDBModal>
            </>
        );
    } else {
        return (
            <Loader />
        );
    }
}
