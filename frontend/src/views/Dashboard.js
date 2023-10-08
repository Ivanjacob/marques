/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import useAxios from "../utils/useAxios";
import jwt_decode from 'jwt-decode';

import BasicSparkLineCustomization from './SparkLine';
import Stacked from './Stacked';
import CircleIcon from '@mui/icons-material/Circle';
import Buttons from '../Inventory/Buttons';


function Dashboard() {

  const [res, setRes] = useState("")
  const api = useAxios()
  const token = localStorage.getItem("authTokens")

  if (token){
    const decode = jwt_decode(token)
    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get("/test/")
  //       setRes(response.data.response)
  //     } catch (error) {
  //       console.log(error)
  //       setRes("Something went wrong")
  //     }
  //   }
  //   fetchData()
  // }, [api])

  // useEffect(() => {
  //   const fetchPostData = async () => {
  //     try {
  //       const response = await api.post("/test/")
  //       setRes(response.data.response)
  //     } catch (error) {
  //       console.log(error)
  //       setRes("Something went wrong")
  //     }
  //   }
  //   fetchPostData()
  // }, [api])

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: 'white',
        margin: '13px',
        padding: '4px',
        borderRadius: '1rem',
        width: '850px',
      }}>

        <div className="flex justify-between" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p className="font-semibold text-xl" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          Revenue Updates</p>
          <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl"  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'gray' }}>
              <span>
                <CircleIcon />
              </span>
              <span>Expense</span>
            </p>
            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'green' }}>
              <span>
                <CircleIcon />
              </span>
              <span>Budget</span>
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', borderRadius: '2rem' }} >
          <div style={{ borderRight: '1px solid border-color', margin: '1rem'}}>
            <div>
              <p>
                <span className="text-3xl font-semibold" style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>$93,438</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs"
                  style={{
                    padding: '0.375rem', // Equivalent to p-1.5
                    cursor: 'pointer', 
                    borderRadius: '9999px', // A large value to make it rounded like rounded-full
                    color: 'white',
                    backgroundColor: 'green',
                    marginLeft: '0.75rem', // Equivalent to ml-3
                    fontSize: '0.75rem' // Equivalent to text-xs
                  }}>
                  23%
                </span>
              </p>
              <p className="text-gray-500 mt-1" style={{ color: '#718096', marginTop: '0.25rem' }}>Budget</p>
            </div>
            <div className="mt-8">
              <p className="text-3xl font-semibold" style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>$48,487</p>

              <p className="text-gray-500 mt-1" style={{ color: '#718096', marginTop: '0.25rem' }}>Expense</p>
            </div>

            <div className="mt-5">
              <BasicSparkLineCustomization id="line-sparkLine" type="Line" height="80px" width="250px" />
            </div>
            <div className="mt-10" style={{ marginTop: '0.5rem' }}>
              <Buttons
                buttonText="Download Report"
              />
            </div>
          </div>

          <div style={{ borderRight: '1px solid border-color', margin: '1rem', paddingRight: '25rem' }}>
            <Stacked width="320px" height="360px" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard