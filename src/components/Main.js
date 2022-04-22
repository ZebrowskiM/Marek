import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/stockphotocoding.jpeg'
import pic03 from '../images/pic03.jpg'
import resume from '../images/MarekZebrowskiResume.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        


        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Professional</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <h3>Current Projects</h3>
            <h5>StockGenie</h5>
            I am currently working on API that would do basic technical analysis on cryptocurrencies and stocks.
             My longer term vision is to also extend this to options contracts and possibly futures. 
             <a href = "https://github.com/ZebrowskiM/StockGenie" target = "_blank"> Click Here for the github</a>
          </p>
          <p>
            <h3>Contracting &amp; Consulting </h3>
            <dl>
              <dt>
                Contracting
              </dt>
              <dd>
              Whether you are looking to enhance your current development team to meet deadlines or
                are a small business looking for someone who can take their prospective tech 
                endeavors from start to finish, I can meet your software needs.
              </dd>
              <dt>
                Consulting 
              </dt>
              <dd>
              Whether you are looking for an architect or a project manager to navigate technical challenges
               in the ever evolving landscape of technology, I am here to help.
                With Experience guiding developers and Agile teams throughout the SDLC.
            </dd>
            <dt>Contact</dt>
            <dd>
              <a href = "mailto: Marek@zebrowski.dev">Email</a>
            </dd>
            </dl>
          </p>
          <p>
            <h3> Resume </h3>
            Feel free to contact me with offers or opportunities. 
            <br></br>
            <a href={resume} download> Click here for Resume</a>{` `} 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
          <h3>About Me</h3>
          Hi my name is Marek Zebrowski and I am based out of Florida. I have worked in tech start ups for just under 4 yrs now working with various industries.
          I have recently taken a liking toward .Net, Crypto, Stocks, and Artificial Intelligence.
          I enjoy new challenges and working with different teams so if you have a challenge and need a developer throw it my way.
          If you see a project that I am working or have worked that you would like to contribute to or have questions feel free to contact me. 
          </p>
          <h3>Industries</h3>
            <ui>
              <li>Integrations</li>
              <li>Workflow Automation</li>
              <li>Accounting Automation</li>
              <li>Insurance Services</li>
              <li>Material handling</li>
              <li>Document Management</li>
              <li>Medical Devices</li>
              <li>Warehouse Management and Control Systems </li>
            </ui>
          <p>
          
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://getform.io/f/badfb599-a0c9-4c9f-81c8-8f1cfb729f9a">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>

    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
