import React from "react";
import ChatBot from "react-simple-chatbot";

import { Segment } from "semantic-ui-react";
function Chatbot(){
  const steps =[
    {
    id: 'Greet',
    message :'Hello welcome to ladybug',
    trigger:'Ask Name'
    },
    {
      id:'Ask Name',
      message:'let us have your name pretty lady',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'hi {previousValue},Please select your preference',
      trigger:'preference'
    },
    {
      id:'preference',
      options:[
        { value:'RENT',label:'RENT',trigger:'RENT'},
        { value:'SELL',label:'SELL',trigger:'SELL'},
        { value:'DONATE',label:'DONATE',trigger:'DONATE'},
      ],
    },
    {
        id: 'RENT',
        message: 'WHAT WOULD YOU LIKE TO RENT',
        trigger: 'choice1',
        options: [
          { value: 'CLOTHES', label: 'CLOTHES', trigger: 'CLOTHES' },
          { value: 'ACCESORIES', label: 'ACCESORIES', trigger: 'ACCESORIES' },
          { value: 'FOOTWARE', label: 'FOOTWARE', trigger: 'FOOTWARE' },
        ]
      },      
    {
      id:'CLOTHES',
      message:'HERE IS YOUR PAGE',
      end:true,
    },
    {
      id:'ACCESORIES',
      message:'HERE IS YOUR PAGE',
      end:true,
    },
    {
      id:'FOOTWARE',
      message:'HERE IS YOUR PAGE',
      end:true,
    },
    {
      id:'SELL',
      message:'WE WILL TAKE YOU TO THE PAGE',
      end:true,
    },
    {
      id:'DONATE',
      message:'WHAT WOULD YOU LIKE TO DONATE',
      trigger:'choice2',
      options:[
        {value:'CLOTHES1',label:'CLOTHES',trigger:'CLOTHES1'},
        {value:'ACCESORIES1',label:'ACCESORIES',trigger:'ACCESORIES1'},
        {value:'FOOTWARE1',label:'FOOTWARE',trigger:'FOOTWARE1'},
      ]
    },
    {
      id:'CLOTHES1',
      message:'HERE IS YOUR PAGE',
      end:true,
    },
    {
      id:'ACCESORIES1',
      message:'HERE IS YOUR PAGE',
      end:true,
    },
    {
      id:'FOOTWARE1',
      message:'HERE IS YOUR PAGE',
      end:true,
    },

  ];
  return(
  <>
  <Segment floated="right">
    <ChatBot steps={steps}/>
    </Segment>
    </>
    );
}

export default Chatbot;