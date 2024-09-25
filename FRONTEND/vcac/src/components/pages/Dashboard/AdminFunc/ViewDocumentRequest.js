import React from 'react'
import Footer from '../../../layout/Footer'
import { Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import ADashNavbar from '../../../layout/ADashNavbar'

import AdminFunctions from '../../../../Axios/AdminAxios'
import User from './../../User';
import './viewformchild.css';

const adoptionform = sessionStorage.getItem('user')
const temp = JSON.parse(adoptionform)

class ViewDocumentRequest extends React.Component {



  constructor(props) {
    super(props)

    this.state = {
      enquiry: [], response: ''
    }

  }

  componentDidMount() {

    AdminFunctions.getAllDocumentRequest().then((res) => {



      this.setState(() => {
        return {
          enquiry: res.data.data
        }
      })

    })
  }

  saveform(enq) {

    // enq.response = this.state.response
    // if (enq.response == '') {
    //   alert('Please Enter Response')
    // } else {
      console.log("Enq Object  = " + enq.response)
      console.log("Enq is  = " + enq.formNo)


      AdminFunctions.setDocumentResponse(
        {
          id: enq.documentId,
          response: enq.response,
        }

      ).then((res) => {

        console.log(res.data)

      })

      // this.setState(()=>{
      //   return {
      //     response:''
      // }
      // })
      this.props.history.push('/view-document-request')
    // }
  }
  render() {

    return (
      <div>
        <ADashNavbar />
        <div className="py-5">
          <Row>
            <Col md={10}>
              <h4 className="text-center">View Document Request</h4>
              <br />
              <br />
              <div class="horizontal-scroll">
                <table class="my-table"
                  className="table border-dark  table-striped table-hover">
                  <thead>
                    <tr style={{ backgroundColor: '#a9a9a9', width: 100 }}>
                      <th scope="col">Document Id</th>
                      <th scope="col" colSpan="1">
                        Address Proof
                      </th>
                      <th scope="col" colSpan="1">
                        Identity Proof
                      </th>
                      <th scope="col" colSpan="1">
                        Income Proof
                      </th>
                      <th scope="col" colSpan="1">
                        Nationality Certificate
                      </th>
                      <th scope="col" colSpan="1">
                        NonCriminal Certificate
                      </th>
                      <th scope="col" colSpan="1">
                        Parent Name
                      </th>
                      <th scope="col" colSpan="1">
                        Response
                      </th>
                      <th scope="col" colSpan="2">
                        Reply
                      </th>
                      <th scope="col" colSpan="1">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.enquiry.map((enq) => {
                      console.log(enq)
                      return (
                         
                        <tr style={{ height: 100 }}>
                          <th scope="row">{enq.documentId}</th>
                          <td colSpan="1" >
                            <a style={{ color: 'black' }} href={'http://3.110.178.10:8080/' + enq.addressProof} target="_blank" rel="noreferrer" >
                              Address Proof
                            </a>
                            {/* <img height="100" className="thumbnail" src={'http://3.110.178.10:8080/admin/getdocumentrequest' + enq.addressProof} /> */}
                          </td>

                          <td colSpan="1" >
                            <a style={{ color: 'black' }} href={'http://3.110.178.10:8080/' + enq.identityProof} target="_blank" rel="noreferrer" >
                              Identity Proof
                            </a>
                            {/* <img height="100" className="thumbnail" src={'http://3.110.178.10:8080/admin/getdocumentrequest' + enq.identityProof} /> */}
                          </td>


                          <td colSpan="1" >
                            <a style={{ color: 'black' }} href={'http://3.110.178.10:8080/' + enq.incomeProof} target="_blank" rel="noreferrer" >
                              Income Proof
                            </a>
                            {/* <img height="100" className="thumbnail" src={'http://3.110.178.10:8080/admin/getdocumentrequest' + enq.identityProof} /> */}
                          </td>

                          <td colSpan="1" >
                            <a style={{ color: 'black' }} href={'http://3.110.178.10:8080/' + enq.nationalityCertificate} target="_blank" rel="noreferrer" >
                              Nationality Certificate
                            </a>
                            {/* <img height="100" className="thumbnail" src={'http://3.110.178.10:8080/admin/getdocumentrequest' + enq.nationalityCertificate} /> */}
                          </td>

                          <td colSpan="1" >
                            <a style={{ color: 'black' }} href={'http://3.110.178.10:8080/' + enq.nonCriminal_certificate} target="_blank" rel="noreferrer" >
                              Non Criminal
                            </a>
                            {/* <img height="100" className="thumbnail" src={'http://3.110.178.10:8080/admin/getdocumentrequest' + enq.nonCriminal_certificate} /> */}
                          </td>
                          <th scope="row">{enq.user.name}</th>
                          <td colSpan="1">
                            <button id="btn" disabled={enq.response}
                                 className="btn btn-success btn-round btn-just-icon btn-sm"
                              onClick={(e) => {
                                this.setState(() => {
                                  enq.response = "Approved"
                                  this.saveform(enq)
                                })

                              }}>Approved</button><br />

                            <button disabled={enq.response}
                              className="btn btn-danger btn-round btn-just-icon btn-sm"
                              onClick={() => {

                                this.setState(() => {
                                  enq.response = "Declined"
                                  this.saveform(enq)
                                })

                              }}>Declined</button>
                          </td>

                          <td colSpan="1">{enq.response}</td>

                          <td colSpan="1">
                             <button disabled={!enq.response}
                              className="btn btn-danger btn-round btn-just-icon btn-sm"
                              onClick={() => {

                                this.setState(() => {
                                  enq.response = ""
                                  this.saveform(enq)
                                })

                              }}>clear response</button>
                              </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
        <NavLink className="nav-link" exact to="/admin-dash">
          <button type="submit" className="btn btn-primary btn-block" style={{ maxWidth: 100 }}>
            Back
          </button><br></br><br></br>
        </NavLink> <Footer />
      </div>
    )
  }
}

export default ViewDocumentRequest
