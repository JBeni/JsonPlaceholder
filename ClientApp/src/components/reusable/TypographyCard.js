import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

export default function TypographyCard(props) {
    return (
        <MDBTypography note noteColor="primary">
            <strong>Post Id: {props.id}</strong>
            <br/>
            <strong>{props.title}</strong> {props.body}
        </MDBTypography>
    );
}
