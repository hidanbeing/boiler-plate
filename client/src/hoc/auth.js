import axios from "axios";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authrUser } from "../_actions/User_actions";


export default function Auth(SpecificComponent, option, adminRoute = null){
   /**
    * option
    * null -> 아무나 출입 가능
    * true -> 로그인 한 유저만 출입 가능
    * false -> 로그인 한 유저는 출입 불가능
    */

    function AuthenticationCheck(props){

        const dispatch = useDispatch()

        const navigate = useNavigate()

        useEffect(()=>{
            dispatch(authrUser()).then(res => {
                //console.log("auth? ",res);
                if (!res.payload.isAuth){
                    // login yet
                    if (option){
                        navigate('/login');
                    }
                }
                else{
                    // login
                    if (adminRoute && !res.payload.isAdmin){
                        navigate("/");
                    }else{
                        if (option == false){
                            navigate("/");
                        }
                    }
                }
            })
        },[]);
        return <SpecificComponent/>;   
    }
    return AuthenticationCheck;
}