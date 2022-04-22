import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import withWidth from 'material-ui/utils/withWidth';
import "./conversation.css"
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';

export class Conversation extends Component {
  render() {
    return (
  
  <>
  
   
   <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      <div className="card-body">
        <div className ="container">
          
      <div className="row chat-top">
           
        <div className="col-sm-4 border-right border-secondary">
          
        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face3.jpg")} alt="profile" />
        
        
        <span className="float-right mt-2">
          

            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-fill mx-3" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical mr-2" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </span>
        </div>
        
        <div className="col-sm-8">
        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" />
          <span className="ml-2">Rahul Kumar</span>
          <span className="float-right mt-2">
            <svg width="1em" height="1em" viewBox="0 0 1 16" className="bi bi-search" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
              <path fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical mx-3" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </span>
        
</div>
        </div>
        <div className="row">
        
               
              

        <div className="col-sm-4 contacts">
        {/* <div className="search" >
         
          <input type="text" className="form-control"  placeholder="Search or start new chat..."/> */}
          {/* <button type="button" className="btn btn-primary" style={{ color: "blue", backgroundColor: "white", bordercolor: "blue", border: "1px solid #0099CC" }}> < SearchIcon/></button> */}
          {/* < SearchIcon/> */}
          {/* </div> */}
        <div className="contact-table-scroll">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" /></td>
                  <td>Rahul Kumar <br/> <small>Nothing</small></td>
                  <td><small>11:55 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face2.jpg")} alt="profile" /></td>
                  <td>Jack <br/> <small>Bye tata</small></td>
                  <td><small>10:09 PM</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face4.jpg")} alt="profile" /></td>
                  <td>Bullywood Mafia <br/> <small>hii</small></td>
                  <td><small>Monday</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face5.jpg")} alt="profile" /></td>
                  <td>Sumit Jha<br/> <small>hello</small></td>
                  <td><small>9/22/20</small></td>
                </tr>
                <tr>
                  <td><img className="img-sm rounded-circle" src={require("../../assets/images/faces/face3.jpg")} alt="profile" /></td>
                  <td>News Channel <br/> <small>hiii</small></td>
                  <td><small>Sunday</small></td>
                </tr>
                
               
                
              </tbody>
            </table>
          </div>


        </div>
        <div className="col-sm-8 message-area">
        <div className="message-table-scroll">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <p className="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">Hello Rahul</p><br/>
                  </td>
                </tr>
               
                <tr>
                  <td>
                     <p className="bg-light p-2 mt-2 mr-3 shadow-sm text-black float-right rounded">Hello Sagar.. How are You
                    </p>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">I'm fine
                      </p>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                    <p className="bg-primary p-2 mt-2 mr-5 shadow-sm text-white float-left rounded">Hello Rahul</p><br/>
                  </td>
                </tr>
               
                <tr>
                  <td>
                     <p className="bg-light p-2 mt-2 mr-3 shadow-sm text-black float-right rounded">Hello Sagar.. How are You
                    </p>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">I'm fine
                      </p>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">n how r u</p>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <p className="bg-light rounded p-2 mt-2 mr-5 shadow-sm text-black float-right">im fine
                    </p>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">okk</p>
                   </td>
                </tr>
                <tr>
                  <td>
                    <p className="bg-light rounded p-2 mt-2 mr-5 shadow-sm text-black float-right">What r u doing</p>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <p className="bg-primary rounded p-2 mt-2 mr-5 shadow-sm text-white float-left">Nothing</p>
                  </td> 
                </tr>
                
              </tbody>
            </table>
         
            </div>
          <div className="row message-box p-3">
            <div className="col-sm-2 mt-2">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fill-rule="evenodd"
                  d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                <path
                  d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-paperclip mx-2" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cash" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z" />
                <path
                  d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
            </div>
            <div className="col-sm-8">
              <form action="">
                <input type="text" className="form-control" placeholder="Write message..."/>
              </form>

              </div>
            
            <div className="col-sm-2 mt-1">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-up" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                <path fill-rule="evenodd"
                  d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
              </svg>
            </div>

            
         
        </div>
      </div>
    </div>

    </div>
  </div>
</div>
</div>
    
               
        </>
              
    );
 }
 }

export default Conversation;