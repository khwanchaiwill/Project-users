import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../axiosWithAuth/axiosWithAuth'
import { connect } from 'react-redux'
import {fetchData} from '../action/fetchdata'
import { useLocation } from 'react-router-dom'

function DashBoard (props){
  const [getUser, setGetUser] = useState([]);
  const location = useLocation()


  // const getUserList = () => {
  //   axiosWithAuth()
  //     .get("http://localhost:8000/api/users")
  //     .then(res => {
  //       console.log(res.data)
  //        setGetUser(res.data)
       
  //     })
  //     .catch(err => console.log(err.response));
  // };

  useEffect(() => {
    props.fetchData(getUser);
  }, [location]);  

  return (
    <div className="movie-list">
      {
        props.user.map(users => (
         
          <div>
              <h1> {users.name} </h1>
              <h4> {users.username} </h4>
          </div>
         
        ))
      }
    </div>
  );
}
const mapStateToProps = state => {
  return {
      loading: state.loading,
      user: state.user,  
      error: state.error,
  } 

}
export default connect(
  mapStateToProps,
  { fetchData}
)(DashBoard);
