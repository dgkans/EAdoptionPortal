import React from 'react'
import Footer from '../../../layout/Footer'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import ParentFunctions from '../../../../Axios/ParentAxios'
import { Row, Col } from 'reactstrap'
import DashMenuBar from '../ParentDashMenuBar';
import PDashNavbar from '../../../layout/PDashNavbar';
import { Form, FormGroup, Label, Input } from 'reactstrap'

const AdoptionForm = ({ match }) => {

  const [user, setUser] = useState('')
  const [user1, setUser1] = useState(JSON.parse(sessionStorage.getItem('user')))
  console.log(user1)
  const history = useHistory()
  const childID = match.params.childId;

  const onAdoption = (e) => {

    e.preventDefault()
    if (e.target.elements.applicantGender.value == "Select Gender") {
      alert('Please Select Applicant Gender')
    } else if (e.target.elements.spouseGender.value == "Select Gender") {
      alert('Please Select Spouse Gender')
    } else {
      const adoptionReason = e.target.elements.adoptionReason.value
      const annualIncome = e.target.elements.annualIncome.value
      const applicantGender = e.target.elements.applicantGender.value
      const biologicalChildren = e.target.elements.biologicalChildren.value
      const childId = childID
      const companyDetails = e.target.elements.companyDetails.value
      const nationality = e.target.elements.nationality.value
      const occupation = e.target.elements.occupation.value
      const pancard = e.target.elements.pancard.value
      const permanentAddress = e.target.elements.permanentAddress.value
      const qualification = e.target.elements.qualification.value
      const spouseGender = e.target.elements.spouseGender.value
      const spouseName = e.target.elements.spouseName.value

      const addAdoptionForm = {
        adoptionReason: adoptionReason,
        annualIncome: annualIncome,
        applicantGender: applicantGender,
        biologicalChildren: biologicalChildren,
        childId: childId,
        companyDetails: companyDetails,
        nationality: nationality,
        occupation: occupation,
        pancard: pancard,
        permanentAddress: permanentAddress,
        qualification: qualification,
        spouseGender: spouseGender,
        spouseName: spouseName,
        user_id: user1.id,
      }
      ParentFunctions.addoptionForm(addAdoptionForm).then((res) => {
        history.push('/parentdash')
      })
    }
  }
  return (
    <div>
      <PDashNavbar /> <br></br><br></br><br></br>
      <div style={{ width: '100%' }}>
        <div className="py-5">
          <Row>
            <Col md={2}>
              <div>
                <DashMenuBar />
              </div>
            </Col>
            <Col md={10}>
              <div id="addform">
                <h3 className="text-center text-white pt-0">Add Adoption Details</h3>
                <div className="container">
                  <div
                    id="addform-row"
                    className="row justify-content-center align-items-center">
                    <div id="addform-column" className="col-md-6">
                      <div id="addform-box" className="col-md-12">
                        <form
                          id="addform-form"
                          className="form"
                          onSubmit={onAdoption}>
                          <div className="form-group">

                            <h4> Child Id : {childID}
                            </h4>
                            <br></br>

                          </div>
                          <div className="form-group">
                            <label htmlFor="applicantGender" className="text">
                              Select Applicant Gender
                            </label>
                            <br></br>
                            <Col sm={12}>
                              <Input type="select" name="applicantGender" id="applicantGender" >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </Input>
                            </Col>
                          </div>


                          <div className="form-group">
                            <label htmlFor="spouseGender" className="text">
                              Select Spouse Gender:
                            </label>
                            <br></br>
                            <Col sm={12}>
                              <Input type="select" name="spouseGender" id="spouseGender">
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </Input>
                            </Col>
                          </div>


                          <div className="form-group">
                            <label htmlFor="spouseName" className="text">
                              Enter Spouse Name :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="spouseName"
                              name="spouseName"
                              required
                            ></input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="biologicalChildren" className="text">
                              Enter Biological Children :
                            </label>
                            <br></br>
                            <input
                              type="number"
                              className="form-control"
                              id="biologicalChildren"
                              name="biologicalChildren"
                              required
                            ></input>
                          </div>


                          <div className="form-group">
                            <label htmlFor="adoptionReason" className="text">
                              Enter Adoption Reason :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="adoptionReason"
                              name="adoptionReason"
                              required
                            ></input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="nationality" className="text">
                              Enter Nationality :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="nationality"
                              name="nationality"
                              required
                            ></input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="qualification" className="text">
                              Enter Qualification :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="qualification"
                              name="qualification"
                              required
                            ></input>
                          </div>


                          <div className="form-group">
                            <label htmlFor="occupation" className="text">
                              Enter Occupation :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="occupation"
                              name="occupation"
                              required
                            ></input>
                          </div>


                          <div className="form-group">
                            <label htmlFor="companyDetails" className="text">
                              Enter Company Details :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="companyDetails"
                              name="companyDetails"
                              required
                            ></input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="annualIncome" className="text">
                              Enter Annual Income(In ₹)  :
                            </label>
                            <br></br>
                            <input
                              type="number"
                              className="form-control"
                              id="annualIncome"
                              name="annualIncome"
                              required
                            ></input>
                          </div>


                          <div className="form-group">
                            <label htmlFor="pancard" className="text">
                              Enter Pancard No. :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="pancard"
                              name="pancard"
                              required
                            ></input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="permanentAddress" className="text">
                              Enter Permanent Address :
                            </label>
                            <br></br>
                            <input
                              type="text"
                              className="form-control"
                              id="permanentAddress"
                              name="permanentAddress"
                              required
                            ></input>
                          </div>



                          <div className="mb-3">
                            <input
                              onChange={(e) => {
                                setUser(e.target.value)
                              }}
                              type="hidden"
                              className="form-control"
                            />
                          </div>

                          <div>
                            <br></br>
                            <input
                              style={{ marginLeft: 160 }}
                              type="submit"
                              name="submit"
                              className="btn btn-info btn-md"
                              value="submit"></input>

                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div></div><Footer />
    </div>
  );
};

export default AdoptionForm