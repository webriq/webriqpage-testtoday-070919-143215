import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import MySwiper from '../components/Swiper'
import SampleForm from '../components/Form'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div>
          <p>This is the homepage</p>
          <Link to="/blog">Go to Blog</Link>
          <br />
          <br />
          <SampleForm
            form_name="Newsletter Form"
            form_id="70d058a4-6abc-43a4-b43f-0c12b07d08fd"
            form_classname="form-newsletter"
            scriptSrc="http://localhost:3000/js/initReactForms"
          >
            <div className="form-row">
              <div className="col-12 mb-3">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="Name"
                    id="name"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="Email Address"
                    id="email_address"
                  />
                  <label htmlFor="email_address">
                    Enter Your Email Address
                  </label>
                </div>
                <small className="text-dark form-text mt-2">
                  We will never share your email with anyone else.
                </small>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <button className="btn btn-primary hvr-shadow" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </SampleForm>
          <br />
          <br />
          <h1>Sample Form</h1>
          <br />
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
