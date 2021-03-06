import React, { Component } from 'react'

export const Profile = ({couple_key, email, first_name,last_name,birthday,anniversary,photo,photo_couple}) => (
    <div id='profile'>
        <div className='card-header p-2 border mt-1'>Profile</div>
        <div className='card-body border'>
            <div className='clearfix'>
                <p className="mb-0">You</p>
                <img className="img-thumbnail rounded float-left mr-2"
                     style={{width:"70px", height:"70px"}}
                     src={photo}></img>
                    <b>{first_name} {last_name}</b><br></br>
                    Birthday: {birthday}<br></br>
                    Email: {email}<br></br>

                <p className="mb-0 mt-2">Your partner</p>
                <img className="img-thumbnail rounded float-left mr-2"
                     style={{width:"70px", height:"70px"}}
                     src={photo_couple}></img>
                     Anniversary: {anniversary} <br></br>
                     Couple key: {couple_key} <br></br>
            </div>
        </div>
    </div>
)
    



            

