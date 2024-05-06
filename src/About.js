import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./pexels-dariabuntaria-2422427.jpg";

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img src={Logo} alt="placeholder" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1>Welcome to our company!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            venenatis tellus in metus. Vitae et leo duis ut. Commodo ullamcorper
            a lacus vestibulum. Lobortis elementum nibh tellus molestie.
            Volutpat blandit aliquam etiam erat velit scelerisque. Risus nec
            feugiat in fermentum posuere urna nec. Eu ultrices vitae auctor eu
            augue ut lectus arcu bibendum. Sagittis id consectetur purus ut
            faucibus pulvinar elementum. Felis imperdiet proin fermentum leo vel
            orci porta non pulvinar. Ac felis donec et odio pellentesque diam.
            Est sit amet facilisis magna. Faucibus a pellentesque sit amet.
            Vulputate odio ut enim blandit. At varius vel pharetra vel turpis.
            Quis lectus nulla at volutpat diam ut venenatis tellus. Magna eget
            est lorem ipsum dolor sit amet. Ornare aenean euismod elementum nisi
            quis. Sit amet nisl suscipit adipiscing bibendum est ultricies.
            Turpis massa sed elementum tempus egestas. Urna porttitor rhoncus
            dolor purus non enim praesent. Vel quam elementum pulvinar etiam non
            quam lacus suspendisse.
          </p>
          <p>
            {" "}
            Mi quis hendrerit dolor magna eget est. At lectus urna duis
            convallis. Et pharetra pharetra massa massa ultricies mi. Amet nisl
            purus in mollis nunc sed id semper. Quis imperdiet massa tincidunt
            nunc pulvinar sapien et. Ullamcorper velit sed ullamcorper morbi
            tincidunt. Aliquam malesuada bibendum arcu vitae elementum. Nunc sed
            velit dignissim sodales ut eu sem integer vitae. Elit sed vulputate
            mi sit amet mauris commodo. Molestie a iaculis at erat pellentesque
            adipiscing commodo. Integer feugiat scelerisque varius morbi enim
            nunc faucibus a pellentesque. Venenatis urna cursus eget nunc
            scelerisque. Leo urna molestie at elementum eu. At quis risus sed
            vulputate odio ut enim blandit. Vitae auctor eu augue ut lectus.
            Rutrum quisque non tellus orci ac auctor augue mauris augue.
            Pellentesque diam volutpat commodo sed egestas egestas. Varius duis
            at consectetur lorem. Et tortor at risus viverra adipiscing.
          </p>
          <p>
            Placerat in egestas erat imperdiet sed euismod. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Viverra mauris in
            aliquam sem fringilla ut morbi tincidunt. Amet justo donec enim
            diam. Eu scelerisque felis imperdiet proin fermentum leo vel. Quis
            viverra nibh cras pulvinar mattis nunc sed. Dignissim enim sit amet
            venenatis urna. Ut faucibus pulvinar elementum integer enim neque
            volutpat ac tincidunt. Posuere morbi leo urna molestie at elementum
            eu. Congue eu consequat ac felis donec et. Diam volutpat commodo sed
            egestas. Purus sit amet volutpat consequat. Ultricies lacus sed
            turpis tincidunt id aliquet risus feugiat in. Facilisi nullam
            vehicula ipsum a arcu cursus vitae congue mauris. Porta lorem mollis
            aliquam ut porttitor. Urna neque viverra justo nec ultrices dui
            sapien. Fermentum odio eu feugiat pretium nibh. Cras adipiscing enim
            eu turpis egestas pretium aenean. Blandit cursus risus at ultrices
            mi tempus imperdiet nulla. Cursus turpis massa tincidunt dui ut
            ornare lectus sit amet. Diam vulputate ut pharetra sit amet aliquam
            id diam.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
