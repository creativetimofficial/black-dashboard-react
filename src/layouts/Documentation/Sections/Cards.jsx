import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  CardImgOverlay,
  Button
} from "reactstrap";

const codeExample = `<Card style={{width: '20rem'}}>
    <CardImg top src="img-src" alt="..."/>
    <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button color="primary">Go somewhere</Button>
    </CardBody>
</Card>`;

const codeExampleBody = `<Card>
    <CardBody>
        This is some text within a card body.
    </CardBody>
</Card>`;

const codeExampleTitle = `<Card style={{width: '20rem'}}>
    <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <CardLink href="/#/">Card link</CardLink>
        <CardLink href="/#/">Another link</CardLink>
    </CardBody>
</Card>`;

const codeExampleImg = `<Card style={{width: '20rem'}}>
    <CardImg top src="..." alt="..." />
    <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
    </CardBody>
</Card>`;

const codeExampleList = `<Card style={{width: '20rem'}}>
    <ListGroup flush>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
</Card>`;

const codeExampleHeader = `<Card>
    <CardHeader>Featured</CardHeader>
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>`;

const codeExampleText = `<Card style={{width: '20rem'}}>
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>
<Card style={{width: '20rem'}} className="text-center">
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>
<Card style={{width: '20rem'}} className="text-right">
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>`;

const codeExampleImgCaps = `<Card>
    <CardImg top src="..." alt="..."></CardImg>
    <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
    </CardBody>
</Card>
<Card>
    <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
    </CardBody>
    <CardImg bottom src="..." alt="..."></CardImg>
</Card>`;

const codeExampleImgOverlay = `<Card className="bg-dark text-white">
    <CardImg src="..." alt="..."/>
    <CardImgOverlay>
        <CardTitle>Card Title</CardTitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <CardText>Last updated 3 mins ago</CardText>
    </CardImgOverlay>
</Card>`;

class Cards extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Short Description and Usage
        </h1>
        <p className="bd-lead">
          Bootstrap's cards provide a flexible and extensible content container
          with multiple variants and options.
        </p>
        <h2>Example</h2>
        <p>
          Below is an example of a basic card with mixed content and a fixed
          width. Cards have no fixed width to start, so they’ll naturally fill
          the full width of its parent element. This is easily customized with
          our various sizing options (see below).
        </p>
        <div className="bd-example">
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16164ef782f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16164ef782f%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="..."
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Content Types</h2>
        <p>
          Cards support a wide variety of content, including images, text, list
          groups, links, and more. Below are examples of what’s supported.
        </p>
        <h3>Body</h3>
        <p>
          The building block of a card is the <code class="highlighter-rouge">CardBody</code>. Use it
          whenever you need a padded section within a card.
        </p>
        <div className="bd-example">
          <Card>
            <CardBody>This is some text within a card body.</CardBody>
          </Card>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleBody}
        </SyntaxHighlighter>
        <h3>Titles, text, and links</h3>
        <div className="bd-example">
          <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="/#/">Card link</CardLink>
              <CardLink href="/#/">Another link</CardLink>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleTitle}
        </SyntaxHighlighter>
        <h3>Images</h3>
        <div className="bd-example">
          <Card style={{ width: "20rem" }}>
            <CardImg
              top
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161650a55ea%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161650a55ea%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.203125%22%20y%3D%2297.35%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="..."
            />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardImg, CardBody, CardText } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleImg}
        </SyntaxHighlighter>
        <h3>List groups</h3>
        <p>Create lists of content in a card with a flush list group.</p>
        <div className="bd-example">
          <Card style={{ width: "20rem" }}>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, ListGroup, ListGroupItem } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleList}
        </SyntaxHighlighter>
        <h3>Header and footer</h3>
        <p>Add an optional header and/or footer within a card.</p>
        <div className="bd-example">
          <Card>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button href="/#" color="primary">
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleHeader}
        </SyntaxHighlighter>
        <h2>Text alignment</h2>
        <p>
          You can quickly change the text alignment of any card—in its entirety
          or specific parts—with our text align classes.
        </p>
        <div className="bd-example">
          <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button href="/#" color="primary">
                Go somewhere
              </Button>
            </CardBody>
          </Card>
          <Card style={{ width: "20rem" }} className="text-center">
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button href="/#" color="primary">
                Go somewhere
              </Button>
            </CardBody>
          </Card>
          <Card style={{ width: "20rem" }} className="text-right">
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button href="/#" color="primary">
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleText}
        </SyntaxHighlighter>
        <h2>Images</h2>
        <p>
          Cards include a few options for working with images. Choose from
          appending “image caps” at either end of a card, overlaying images with
          card content, or simply embedding the image in a card.
        </p>
        <h3>Image caps</h3>
        <p>
          Similar to headers and footers, cards can include top and bottom
          “image caps”—images at the top or bottom of a card.
        </p>
        <div className="bd-example">
          <Card>
            <CardImg
              top
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161650a55ec%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161650a55ec%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="..."
            />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg
              bottom
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161650a55ec%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161650a55ec%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="..."
            />
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleImgCaps}
        </SyntaxHighlighter>
        <h3>Image overlays</h3>
        <p>
          Turn an image into a card background and overlay your card’s text.
          Depending on the image, you may or may not need additional styles or
          utilities.
        </p>
        <div className="bd-example">
          <Card className="bg-dark text-white">
            <CardImg
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161650a55ec%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161650a55ec%22%3E%3Crect%20width%3D%22843%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22109.35%22%3E843x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="..."
              style={{ height: "270px", width: "100%", display: "block" }}
            />
            <CardImgOverlay>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>Last updated 3 mins ago</CardText>
            </CardImgOverlay>
          </Card>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Card, CardImgOverlay, CardTitle, CardText, CardImg } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleImgOverlay}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For props, please read the{" "}
          <a
            href="https://reactstrap.github.io/components/card/"
            target="_blank"
            rel="noopener noreferrer"
          >
            official reactstrap documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Cards;
