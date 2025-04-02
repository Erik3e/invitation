import React from "react";
import CeremonyDetails from "./ceremony-details/CeremonyDetails";
import ReceptionDetails from "./reception-details/ReceptionDetails";
import RsvpForm from "./rsvp-form/RsvpForm";
import TopImage from "./top-image/TopImage";
import MiddleImage from "./middle-image/MiddleImage";

import topImg from "../../assets/images/top-image.jpg";
import InvitationText from "./invitation-text/InvitationText";
import WeddingProgram from "./wedding-program/WeddingProgram";

import "./WeddingInvitation.css";
const WeddingInvitation = () => (
  <div className="wedding-invitation">
    {/* <h1>Հարսանյաց հրավիրատոմս</h1> */}
    <TopImage src={topImg} />
    <InvitationText />
    <WeddingProgram />
    <MiddleImage />
    <CeremonyDetails />
    <ReceptionDetails />
    <RsvpForm />
  </div>
);

export default WeddingInvitation;
