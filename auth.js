import React, { useState } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../utils/customAxios";
import axios from "axios";
import sha256 from 'crypto-js/sha256';
import { isFailure } from "../utils/requestFunction";

export const login = createAsyncThunk(
  'auth/login',
   async ({ userId, password }, { rejectWithValue }) => {
    
    const dataForSaltAndUuid = {
      header: {
        trId: process.env.REACT_APP_TRID_PUBLIC_SALTUUID,
      },
      body: {
        userId,
      },
    };

    const dataForUid = {
      header: {
        // trId: "500201",
        trId: process.env.REACT_APP_TRID_PC_AGENT_PUF_GET_INFORMATION,
        rtnCode: "000000",
        rtnMessage : "",
        userId: "leesh"
      },
      body: {
        mfa: {
          challenge: "8904441573e7874233e5199298ced025de9fd973028a34af76b18ccc39ffb54e",
          sessionId: "325fbee402e639d4dafdf24945726cb393b3f23a11ee31a67ae009615206dd24",
          mfaOption: 1,
          token: {
            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJVSUQiOiJEVkNfVVNCX0lDVEtfSkpTMDAwMSIsImlzcyI6IklDVEsiLCJSRUdfREFURSI6MTY5NTYxODUwOCwiVVNFUl9JRCI6ImxlZXNoIiwiQUNDRVNTX0xFVkVMIjoiV0lOX0FHRU5UX1JFR0lTVEVSX0FDQ0VTUyIsIlNFU1NJT05fSUQiOiJjYjY5OGRmYTA5ZmVjZGU3OWY4NGJmNzJkYzk0YTI0YzA0OTM1MTY2MDY3OTg1ZmY3MDJiMzYyMzAwYzEyMzExIiwiZXhwIjoxNjk1OTE4NTA4LCJTRVEiOiI1NTQ2YWNhNWE5Y2NiNmI5ZjRmMTkzZDg4ODFhMzhkMjE4MTY0ODYxNDQzMGExNGYzYzIwMTVlNzQ3MmY3NTYwIiwiVVNFUl9MRVZFTCI6IlVTRVIifQ.72jFxeLJ0GszTBgrgGrstvcVURG6E1X5yF-RWfOhk_emHiZDKOqrhUAA9vYTOQvsxilgGg1r-XVFtHJsxAxGfw",
            expired: "1695275359728",
            expiredCount: "96000"
          }
        }
      }
    };
  
    let saltAndUuid;
    let uId;
    let mfaToken;
    
    try {
      // public/saltuuid
      const { data : response } = await Axios.post('/public/login/challenge', dataForSaltAndUuid);
      saltAndUuid = response;

      // console.log(response);
      if (saltAndUuid.body.mfaOption !== 0) {
        
        const { data : responseUid } = await axios.post('https://192.168.1.29:8082/puf/get-information', dataForUid);
        uId = responseUid.body.uid;

      }

        // if (isFailure(saltAndUuid)) return rejectWithValue(saltAndUuid.header);
      } catch (err) {
        return rejectWithValue(err.response.data);
      }

      if (isFailure(saltAndUuid)) {
        return saltAndUuid;

      } else {
        const { salt, uuid, mfaOption } = saltAndUuid?.body;
        const passwordHash = sha256(uuid + sha256(password + salt)).toString();
  
        const dataForLogin = {
          header: {
            trId: process.env.REACT_APP_TRID_PUBLIC_LOGIN,
          },
          body: { 
            userId,
            uuid,
            passwordHash,
            uId : mfaOption === 0 ? null : uId, 
          },
        };
  
        try {
          const { data: tokenAndUser } = await Axios.post('/public/login/req', dataForLogin);
          // if (isFailure(tokenAndUser)) return rejectWithValue(tokenAndUser.header); 
                
          if (mfaOption !== 0) {
            const dataForMfa = { 
              header: {
                // trId: "500202",
                trId: process.env.REACT_APP_TRID_PC_AGENT_PUF_WEBLOGIN,
                rtnCode: "000000",
                rtnMessage: ""
              },
      
              body: {
                mfa: tokenAndUser.body.mfa,
                userId : userId
              }     
            }
                    
          const { data : responseMfa } = await axios.post('https://192.168.1.29:8082/puf/weblogin', dataForMfa);
          mfaToken = responseMfa
          
          if (mfaOption === 2) {
            let newToken = { token: mfaToken.body?.browserToken } 
            let newTokenAndUser = { ...tokenAndUser, 
            body : {...tokenAndUser.body,
              ...newToken
            }}
        
            return newTokenAndUser;  
          } else {
            // console.log("mfaToken is 1 or 3", mfaToken)
            return mfaToken;

          }
        }

          else {
            return tokenAndUser;

          }
        }             
         catch (err) {
          return rejectWithValue(err.response.data);
        }
      }
    } 
  );

  export const logout = createAsyncThunk(
    'auth/logout',
    async ( body, { rejectWithValue }) => {
      const data = {
        header: {
          trId: process.env.REACT_APP_TRID_USER_LOGOUT,
        },
        body,
      };
  
      try {
        const { data: response } = await Axios.post('/public/logout', data);
        // if (isFailure(response)) {
        //   return rejectWithValue(response.header);
        // }
        return response;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  ); 


// 사용자 정보 변경  
  export const editUser = createAsyncThunk(
    'user-info/change',
    async ( body, { rejectWithValue }) => {
      const data = {
        header: {
          trId: process.env.REACT_APP_TRID_USER_INFO_CHANGE,
        },
        body,
      };
  
      try {
        const { data: response } = await Axios.post('/user-info/change', data);
        // if (isFailure(response)) {
        //   return rejectWithValue(response.header);
        // }
        
        return response;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  
// 보안관리 > 패스워드 변경
export const changePassword = createAsyncThunk(
  'password/change',
  async ( body, { rejectWithValue }) => {
    const data = {
      header: {
        trId: process.env.REACT_APP_TRID_USER_PASSWORD_CHANGE,
      },
      body,
    };

    try {
      const { data: response } = await Axios.post('/user/password-change', data);
      // if (isFailure(response)) {
      //   return rejectWithValue(response.header);
      // }
      
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);