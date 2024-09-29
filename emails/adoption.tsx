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

  petType: string;
  petName: string;
  breed: string;
}



export const AdoptionSentEmail = ({
  name,
  petName,
  petType,
  breed,
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Adoption Application Sent!</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            

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
                  <b>Name of Pet: </b> {petName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Breed: </b> {breed}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Animal: </b> {petType}
                </Text>

                <Text style={paragraph}>
                  Thank you so much for choosing to adopt through Pawdopt! We're
                  thrilled to let you know that your application has been
                  received, and we couldn’t be happier to introduce you to your
                  potential new family member!
                </Text>

                <Text style={paragraph}>
                  <b>A Message from {petName} </b>
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  “Hi {name}! I’m so excited that you’ve taken an interest in
                  me! I may not be able to type this myself (because, you know,
                  paws), but the lovely humans at Pawdopt wanted me to tell you
                  that I can’t wait to meet you! I think we could make the
                  perfect team. I’m ready to find my forever home, and I hope
                  that’s with you! Thank you for giving me a chance.”
                </Text>

                <Text style={paragraph}>
                  <b>What Happens next? </b>
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  
                  Our team will review your application carefully
                  to ensure the best match for both you and {petName}. In the
                  meantime, feel free to visit our website for more details
                  about the adoption process or contact us if you have any
                  questions. 
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  We’ll be in touch soon with the next steps. Fingers
                  (and paws) crossed! 🐾 With excitement and warm regards, 
                  
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                The
                Pawdopt Team
                  
                </Text>

                

                
              </Column>
            </Row>
          </Section>
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
