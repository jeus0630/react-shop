import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

const Box = styled.div`
      padding : 20px;
`;

const Title = styled.h1`
    
`

export default function Detail(props){

    useEffect(()=>{
        console.log(1111111111);
    });

    const {id} = useParams();
    const navigate = useNavigate();
    const target = props.shoes.find(el=>{
        return el.id == id;
    })

    const Alert = styled.div`
        display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
  height: 60px;
      background: yellow;
      font-size: 20px;
    `;

    return (
        <div className="container">
        <Box>
            <Title className="red">Detail Page</Title>
        </Box>
        <Alert></Alert>
        <div className="row">
            <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${target.id+1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{target.title}</h4>
                <p>{target.content}</p>
                <p>{target.price}</p>
                <button className="btn btn-danger">주문하기</button>
                <button className="btn btn-danger" onClick={()=> navigate(-1)}>뒤로가기</button>
            </div>
        </div>
    </div>)

}