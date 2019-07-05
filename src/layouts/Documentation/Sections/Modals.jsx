/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

const codeExampleModalDemoDep = `constructor(props) {
    super(props);
    this.state = {
        modalDemo: false,
    };
    this.toggleModalDemo = this.toggleModalDemo.bind(this);
}
toggleModalDemo(){
    this.setState({
        modalDemo: !this.state.modalDemo
    });
}`;

const codeExampleModalDemo = `<Button color="primary" onClick={this.toggleModalDemo}>
    Launch demo modal
</Button>
<Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        Modal title
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-hidden="true"
        onClick={this.toggleModalDemo}
      >
        <i className="tim-icons icon-simple-remove" />
      </button>
    </div>
    <ModalBody>
        <p>Woohoo, you're reading this text in a modal!</p>
    </ModalBody>
    <ModalFooter>
        <Button color="secondary" onClick={this.toggleModalDemo}>
            Close
        </Button>
        <Button color="primary">
            Save changes
        </Button>
    </ModalFooter>
</Modal>`;

const codeExampleModalLongDep = `constructor(props) {
    super(props);
    this.state = {
        modalDemo: false,
    };
    this.toggleModalDemo = this.toggleModalDemo.bind(this);
}
toggleModalDemo(){
    this.setState({
        modalDemo: !this.state.modalDemo
    });
}`;

const codeExampleModalLong = `<Button color="primary" onClick={this.toggleModalDemo}>
    Launch demo modal
</Button>
<Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">
        Modal title
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-hidden="true"
        onClick={this.toggleModalLong}
      >
        <i className="tim-icons icon-simple-remove" />
      </button>
    </div>
    <ModalBody>
        ...
    </ModalBody>
    <ModalFooter>
        <Button color="secondary" onClick={this.toggleModalDemo}>
            Close
        </Button>
        <Button color="primary">
            Save changes
        </Button>
    </ModalFooter>
</Modal>`;

const codeExampleModalSizeDep = `constructor(props) {
    super(props);
    this.state = {
        modalMini: false,
        modalLarge: false
    };
    this.toggleModalMini = this.toggleModalMini.bind(this);
    this.toggleModalLarge = this.toggleModalLarge.bind(this);
}
toggleModalLarge(){
    this.setState({
        modalLarge: !this.state.modalLarge
    });
}
toggleModalMini(){
    this.setState({
        modalMini: !this.state.modalMini
    });
}`;
const codeExampleModalSize = `<Button color="primary" onClick={this.toggleModalLarge}>
    Launch demo modal
</Button>
<Modal isOpen={this.state.modalLarge} toggle={this.toggleModalLarge} size="lg">
    <ModalHeader className="justify-content-center" toggle={this.toggleModalLarge}>
        Large modal
    </ModalHeader>
    <ModalBody>
        ...
    </ModalBody>
</Modal>
<Button color="primary" onClick={this.toggleModalMini}>
    Launch demo modal
</Button>
<Modal isOpen={this.state.modalMini} toggle={this.toggleModalMini} size="sm">
    <ModalHeader className="justify-content-center" toggle={this.toggleModalMini}>
        Small modal
    </ModalHeader>
    <ModalBody>
        ...
    </ModalBody>
</Modal>`;

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLong: false,
      modalDemo: false,
      modalLogin: false,
      modalTooltips: false,
      popover: false,
      modalMini: false,
      modalLarge: false
    };
    this.toggleModalDemo = this.toggleModalDemo.bind(this);
    this.toggleModalLong = this.toggleModalLong.bind(this);
    this.toggleModalLogin = this.toggleModalLogin.bind(this);
    this.toggleModalTooltips = this.toggleModalTooltips.bind(this);
    this.toggleModalMini = this.toggleModalMini.bind(this);
    this.toggleModalLarge = this.toggleModalLarge.bind(this);
  }
  toggleModalDemo() {
    this.setState({
      modalDemo: !this.state.modalDemo
    });
  }
  toggleModalLong() {
    this.setState({
      modalLong: !this.state.modalLong
    });
  }
  toggleModalLogin() {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  }
  toggleModalTooltips() {
    this.setState({
      modalTooltips: !this.state.modalTooltips
    });
  }
  toggleModalLarge() {
    this.setState({
      modalLarge: !this.state.modalLarge
    });
  }
  toggleModalMini() {
    this.setState({
      modalMini: !this.state.modalMini
    });
  }
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Modals
        </h1>
        <p className="bd-lead">
          Use reacstrap's modal component to add dialogs to your site for
          lightboxes, user notifications, or completely custom content.
        </p>
        <h2>Examples</h2>
        <h3>Live demo</h3>
        <div className="bd-example">
          <Button color="primary" onClick={this.toggleModalDemo}>
            Launch demo modal
          </Button>
          <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={this.toggleModalDemo}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
            </div>
            <ModalBody>
              <p>Woohoo, you're reading this text in a modal!</p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModalDemo}>
                Close
              </Button>
              <Button color="primary">Save changes</Button>
            </ModalFooter>
          </Modal>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import{ Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleModalDemoDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleModalDemo}
        </SyntaxHighlighter>
        <h3>Scrolling long content</h3>
        <div className="bd-example">
          <Button color="primary" onClick={this.toggleModalLong}>
            Launch demo modal
          </Button>
          <Modal isOpen={this.state.modalLong} toggle={this.toggleModalLong}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={this.toggleModalLong}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
            </div>
            <ModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModalLong}>
                Close
              </Button>
              <Button color="primary">Save changes</Button>
            </ModalFooter>
          </Modal>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import{ Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleModalLongDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleModalLong}
        </SyntaxHighlighter>
        <h3>Embedding YouTube videos</h3>
        <p>
          Embedding YouTube videos in modals requires additional JavaScript not
          in Bootstrap to automatically stop playback and more.{" "}
          <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">
            See this helpful Stack Overflow post
          </a>{" "}
          for more information.
        </p>
        <h2>Optional sizes</h2>
        <p>
          Modals have two optional sizes, available via modifier classes to be
          placed on <code class="highlighter-rouge">size</code> prop of the{" "}
          <code class="highlighter-rouge">{`<Modal>`}</code> tag. These sizes
          kick in at certain breakpoints to avoid horizontal scrollbars on
          narrower viewports.
        </p>
        <div className="bd-example">
          <Button color="primary" onClick={this.toggleModalLarge}>
            Launch demo modal
          </Button>
          <Modal
            isOpen={this.state.modalLarge}
            toggle={this.toggleModalLarge}
            size="lg"
          >
            <ModalHeader
              className="justify-content-center"
              toggle={this.toggleModalLarge}
            >
              Large modal
            </ModalHeader>
            <ModalBody>...</ModalBody>
          </Modal>
          <Button color="primary" onClick={this.toggleModalMini}>
            Launch demo modal
          </Button>
          <Modal
            isOpen={this.state.modalMini}
            toggle={this.toggleModalMini}
            size="sm"
          >
            <ModalHeader
              className="justify-content-center"
              toggle={this.toggleModalMini}
            >
              Small modal
            </ModalHeader>
            <ModalBody>...</ModalBody>
          </Modal>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import{ Button, Modal, ModalHeader, ModalBody } from 'reactstrap';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleModalSizeDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleModalSize}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/modals/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap modal documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default Modals;
