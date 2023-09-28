import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../../css/mystyles.css"
import headerPage from "./header"
import footerPage from "./footer"
import draggable from "react-draggable"
import ReactModal from 'react-modal'
import { FaInfoCircle } from 'react-icons/fa'
import { IconContext } from "react-icons"
import { LuPencilLine } from "react-icons/lu"
import { RiMailSendLine } from "react-icons/ri"
import { FaQuestionCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
import { FaGithubAlt } from "react-icons/fa"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <div className="title is-size-3">🐣Egg House</div>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      {/* <div className="columns is-primary is-centered">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title is-1">Hi, Egg House</h1>
        </div>
      </div> */}
      <section className="section">
        <div className="container">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <div className="card m-3">
              <div className="card-header has-background-primary">
              </div>
              <div className="card-content mt-6">
                <div className="title has-text-centered m-3"><span>Hi, </span><span className="has-text-info">I'm Egg</span></div>
                <div className="subtitle is-3 has-text-centered m-4">
                  <span>illustrator</span>
                </div>
                <div className="is-flex is-flex-wrap-wrap is-justify-content-center is-align-content-flex-end mt-6 pt-6">
                  <div className="is-flex is-flex-wrap-wrap is-flex-direction-row is-align-content-flex-end mt-6">
                    <AboutButton />
                    <WorkButton />
                    <FAQButton />
                    <ContactButton />
                    <Example />
                  </div>
                </div>
              </div>
              <div className="card-footer">
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="is-hidden-mobile is-flex is-justify-content-center">
        <div className="has-text-centered m-3">
          <Nao /><span>by nao</span>
        </div>
      </footer>
    </main >
  )
}
// モーダルコンポーネント
const Example = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button m-3" onClick={handleShow}>
        <Info />
      </button>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active" draggable>
          {/* <div className="modal-background"></div> */}
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close" onClick={handleClose}></button>
            </header>
            <section className="modal-card-body">
              Modal Content
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={handleClose}>Save changes</button>
              <button className="button" onClick={handleClose}>Cancel</button>
            </footer>
          </div>
        </div>
      ) : <></>}
    </>
  );
}


// ボタンコンポーネント
const AboutButton = () => {
  return (
    <>
      <button className="button m-3">
        <Info />
      </button>

    </>
  );
}
const WorkButton = () => {
  return (
    <button className="button m-3">
      <Work />
    </button >
  );
}
const FAQButton = () => {
  return (
    <button className="button is-ghost m-3">
      <Faq />
    </button>
  );
}
const ContactButton = () => {
  return (
    <button className="button is-ghost m-3">
      <Contact />
    </button>
  );
}
// アイコンコンポーネント
const Info = () => {
  return (
    <IconContext.Provider value={{ size: '100px' }}>
      <h3><FaInfoCircle /></h3>
    </IconContext.Provider>
  )
}
const Work = () => {
  return (
    <IconContext.Provider value={{ size: '100px' }}>
      <h3><LuPencilLine /></h3>
    </IconContext.Provider>
  )
}
const Faq = () => {
  return (
    <IconContext.Provider value={{ size: '100px' }}>
      <h3><FaQuestionCircle /></h3>
    </IconContext.Provider>
  )
}
const Contact = () => {
  return (
    <IconContext.Provider value={{ size: '100px' }}>
      <h3><RiMailSendLine /></h3>
    </IconContext.Provider>
  )
}
const Nao = () => {
  return (
    <FaGithubAlt />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Egg House</title>
