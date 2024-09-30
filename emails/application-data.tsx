import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ApplicationDataProps {
    name: string;
    email: string;
    contact: string;
    address: string;
    reason: string;
    petType: string;
    petName: string;
    breed: string;
  }
  
  
  
  export const ApplicationDataEmail = ({
    name,
    petName,
    petType,
    breed,
    email,
    contact,
    address,
    reason,
  }: ApplicationDataProps) => {
    return (
      <Html>
        <Head />
        <Preview>Application Data from {name}</Preview>
        <Body style={main}>
          <Container>
            <Section style={content}>
              
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Application from {name}
                  </Heading>
  
                  <Text style={paragraph}>
                    <b>Name of Pet: </b> {petName}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Breed: </b> {breed}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Animal: </b> {petType}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Name of Applicant: </b> {name}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Contact: </b> {contact}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email: </b> {email}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Address: </b> {address}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Reason: </b> {reason}
                  </Text>
  
                  
  
                  
  
                  
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default ApplicationDataEmail;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  