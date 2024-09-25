import React from 'react'

import { Row, Col } from 'reactstrap'
import PDashNavbar from '../../../layout/PDashNavbar';
import ParentFunctions from '../../../../Axios/ParentAxios'
import Footer from '../../../layout/Footer'
import { NavLink, Link } from 'react-router-dom'
class ViewDocumentsResponseStatus extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      enquiries: []
    }
  }

  componentDidMount() {
    const documentsmaster = sessionStorage.getItem('user')
    const temp = JSON.parse(documentsmaster)
    ParentFunctions.viewDocumentResponse(temp.id).then((res) => {
      console.log(res.data)
      this.setState(() => {
        return {
          enquiries: res.data.data
        }
      })
    })

    console.log(this.state.enquiries)
  }
  render() {

    return (
      <div>
        <PDashNavbar />
        <div className="py-5">
          <Row>

            <Col md={10}>
              <h4 className="text-center">Documents Response Status</h4>
              <br />
              <table
               className="table border-dark  table-striped table-hover">
                <thead>
                  <tr style={{ backgroundColor: '#a9a9a9' }}>
                    <th scope="col" style={{color:'blue'}}>Document Id</th>
                    <th scope="col" colSpan="1" style={{color:'blue'}}>
                      Address Proof
                    </th>
                    <th scope="col" colSpan="1" style={{color:'blue'}}>
                      Identity Proof
                    </th>
                    <th scope="col" colSpan="1" style={{color:'blue'}}>
                      Income Proof
                    </th>
                    <th scope="col" colSpan="1" style={{color:'blue'}}>
                      Nationality Certificate
                    </th>
                    <th scope="col" colSpan="1" style={{color:'blue'}}>
                      NonCriminal Certificate
                    </th>

                    <th scope="col" colSpan="2" style={{color:'blue'}}>
                      Response
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.enquiries.map((enq) => {
                    return (
                      <tr>
                        <th scope="row">{enq.documentId}</th>

                        <td colSpan="1" >
                        <a style={{color:'black'}} href={'http://3.110.178.10:8080/' + enq.addressProof} target="_blank" rel="noreferrer" >
                        Address Proof
                        </a>
                         </td>

                        <td colSpan="1" >
                        <a style={{color:'black'}} href={'http://3.110.178.10:8080/' + enq.identityProof} target="_blank" rel="noreferrer" >
                        Identity Proof
                        </a>
                         </td>

                        <td colSpan="1" >
                        <a style={{color:'black'}} href={'http://3.110.178.10:8080/' + enq.incomeProof} target="_blank" rel="noreferrer" >
                        Income Proof
                          </a>
                        </td>

                        <td colSpan="1" >
                          <a style={{color:'black'}} href={'http://3.110.178.10:8080/' + enq.nationalityCertificate} target="_blank" rel="noreferrer" >
                          Nationality Certificate
                          </a>
                        </td>


                        <td colSpan="1" >
                        <a style={{color:'black'}} href={'http://3.110.178.10:8080/' + enq.nonCriminal_certificate} target="_blank" rel="noreferrer" >
                            Non Criminal
                        </a>
                        </td>

                        <td scope="col" colSpan="3">
                          {enq.response != null ? enq.response : 'Not Yet Responded By Admin'}
                          {enq.response != "" ? "" : 'Not Yet Responded By Admin'}
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </Col>
          </Row>
        </div>
        <NavLink className="nav-link" exact to="/parentdash">
          <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
            Back
          </button><br></br><br></br>
        </NavLink>
        <Footer />
      </div>
    )
  }
}


export default ViewDocumentsResponseStatus
