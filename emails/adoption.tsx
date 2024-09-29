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

interface WelcomeEmailProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AdoptionSentEmail = ({name}: WelcomeEmailProps) => {
  

  return (
    <Html>
      <Head />
      <Preview>Adoption Application Sent!</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`${baseUrl}/static/yelp-logo.png`} />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-header.png`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank you for your Application!
                </Heading>

                <Text style={paragraph}>
                  <b>Name of Pet: </b>
                  
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Breed: </b>
                  
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Animal: </b>
                  
                </Text>
                

                <Text style={paragraph}>
                  If this was you, there's nothing else you need to do.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn't you or if you have additional questions, please
                  see our support page.
                </Text>
              </Column>
            </Row>
            
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`${baseUrl}/static/yelp-footer.png`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};



export default AdoptionSentEmail;

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
