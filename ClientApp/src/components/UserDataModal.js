import React from "react";
import {
    MDBBtn,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCard,
    MDBCardBody,
    MDBCardText,
} from "mdb-react-ui-kit";

export default function UserDataModal(props) {
    const closeModal = (e) => {
		e.preventDefault();
        props.handleUserDataModal(false);
	};

    return (
        <>
            <MDBModalDialog>
                <MDBModalContent style={{ width: '900px' }}>
                    <MDBModalHeader>
                        <MDBModalTitle className="display-6">User Details</MDBModalTitle>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={closeModal}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className="d-flex justify-content-center">
                            <MDBCard style={{ maxWidth: "22rem" }}>
                                <MDBCardBody>
                                    <MDBCardText>
                                        <strong>Name</strong>: {props.userData.name}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <strong>Username</strong>: {props.userData.username}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <strong>Email</strong>: {props.userData.email}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <strong>Phone</strong>: {props.userData.phone}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <strong>Website</strong>: {props.userData.website}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                            <MDBCard style={{ marginLeft: '20px', maxWidth: "22rem" }}>
                                <MDBCardBody>
                                    <MDBCardText>
                                        <strong>User Address</strong>
                                    </MDBCardText>
                                    <MDBCardText>
                                        {props.userData.address.city} City, Street {props.userData.address.street},
                                        Suite {props.userData.address.suite}, ZipCode {props.userData.address.zipcode}
                                    </MDBCardText>
                                    <MDBCardText>
                                        <strong>Company Details</strong>
                                    </MDBCardText>
                                    <MDBCardText>
                                        {props.userData.company.name} Company, {props.userData.company.catchPhrase}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={closeModal}>
                            Close
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </>
    );
}
