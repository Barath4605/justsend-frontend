import React from 'react';
import Navbar from "../components/homepage-components/Navbar.jsx";
import Buttons from "../components/homepage-components/Buttons.jsx";
import TextEditor from "../components/senderpage-components/TextEditor.jsx";
import GeneratedCode from "../components/senderpage-components/GeneratedCode.jsx";
import toast from 'react-hot-toast'
import QuickLink from "../components/QuickLink.jsx";
import {useNavigate} from "react-router-dom";


const Sender = () => {

    async function handleSend() {
        if (!text.trim()) {
            toast.error("message is empty")
            return
        }

        const res = await fetch("http://localhost:8080/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        })

        if (!res.ok) {
            toast.error("failed to send")
            return
        }

        const data = await res.json()
        // data = { code, expiryAt }

        toast.success("code generated")
        setGenerated(data)
        setMessageSent(true)
    }


    const [text, setText] = React.useState("");
    const[messageSent, setMessageSent] = React.useState(false);
    console.log(text);

    const nav = useNavigate();

    function checkValidMessage() {
        const plain = text.replace(/<[^>]*>/g, "").trim()
        console.log(plain);
        if(plain === "") {
            toast.error("Cannot send empty Message!");
            setMessageSent(false);
        } else {
            setMessageSent(true);
            toast.success("Message stored successfully!");
        }
    }

  return (
      <section className="bg-linear-to-br from-black via-zinc-900 to-zinc-700
                          min-h-screen flex flex-col">
          <Navbar />

          {!messageSent ? (
              <div className="text-white w-[80%] m-auto lg:w-[60%]">
                  <QuickLink toLink="HOME" onClickFunc={() => nav("/")}/>
                  <h1 className="text-4xl lg:my-2 lg:text-6xl font-semibold tracking-[3px] lg:w-[90%] font-[Montserrat]">Send Text</h1>
                  <TextEditor onChange={setText} />
                  <div className="my-2">
                      <Buttons onClickFunc={() => checkValidMessage()} ButtonType="Send Message" />
                  </div>
              </div>
          ) :
              <GeneratedCode customFunc={() => setMessageSent(false)} />}
      </section>
  );
};

export default Sender;
