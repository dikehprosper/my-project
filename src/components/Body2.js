import React, { useEffect, useState } from 'react'
import { AiOutlineStar } from "react-icons/ai"
import { RiErrorWarningFill } from "react-icons/ri"
import logo28 from "./images/logo28.png"
import logo29 from "./images/logo29.jpeg"
import logo30 from "./images/logo30.jpeg"
import logo31 from "./images/logo31.jpeg"
import logo32 from "./images/logo32.jpeg"
import logo33 from "./images/logo33.jpeg"
import logo34 from "./images/logo34.jpeg"
import logo35 from "./images/logo35.jpeg"
import logo36 from "./images/logo36.jpeg"
import logo37 from "./images/logo37.png"
import logo38 from "./images/logo38.jpeg"
import logo39 from "./images/logo39.png"
import logo40 from "./images/logo40.jpeg"
import logo41 from "./images/logo41.jpeg"
import logo42 from "./images/logo42.jpeg"
import logo43 from "./images/logo43.jpeg"
import logo44 from "./images/logo44.jpeg"
import logo45 from "./images/logo45.jpeg"
import logo46 from "./images/logo46.jpeg"
import logo47 from "./images/logo47.jpeg"
import logo48 from "./images/logo48.jpeg"
import logo49 from "./images/logo49.jpeg"
import logo50 from "./images/game00.jpeg"
import logo51 from "./images/game01.jpeg"
import logo52 from "./images/game02.jpeg"
import logo53 from "./images/game03.jpeg"
import logo54 from "./images/game05.jpeg"
import logo55 from "./images/game06.jpeg"
import logo56 from "./images/game07.jpeg"
import logo57 from "./images/game08.jpeg"
import logo58 from "./images/game09.jpeg"
import logo59 from "./images/game10.jpeg"
import logo60 from "./images/game11.jpeg"
import logo61 from "./images/game12.jpeg"
import logo62 from "./images/game13.jpeg"
import logo63 from "./images/game14.jpeg"
import logo64 from "./images/game15.jpeg"
import logo65 from "./images/game16.jpeg"
import logo66 from "./images/game17.jpeg"
import logo67 from "./images/game18.jpeg"
import logo68 from "./images/game19.jpeg"
import logo69 from "./images/game20.jpeg"
import logo70 from "./images/game21.jpeg"
import logo71 from "./images/game22.jpeg"
import logo72 from "./images/game23.jpeg"
import logo73 from "./images/game24.jpeg"
import logo74 from "./images/game25.jpeg"
import logo75 from "./images/game26.jpeg"
import logo76 from "./images/game27.jpeg"
import logo77 from "./images/game28.jpeg"
import logo78 from "./images/game29.jpeg"
import logo79 from "./images/game30.jpeg"
import logo80 from "./images/game31.jpeg"
import logo81 from "./images/game32.jpeg"
import logo82 from "./images/game33.jpeg"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Marquee from "react-fast-marquee";
import data from './data.json';
import data1 from './data1.json';

const Body2 = () => {

    window.onload = function () {
        var left = document.querySelector(".marque2");
        setInterval(function () {
            left.scrollBy({
                left: 998,
                top: 0,
                behavior: "smooth"
            });
        }, 6000); // repeat every 5 seconds (5000 milliseconds)
    };
    function ScrollRight() {
        var left = document.querySelector(".marque2");
        left.scrollBy({
            left: -998,
            top: 0,
            behavior: "smooth"
        });
    }
    function ScrollLeft() {
        var left = document.querySelector(".marque2");
        left.scrollBy({
            left: 998,
            top: 0,
            behavior: "smooth"
        });
    }


    const [randomNumber, setRandomNumber] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const statement = data[Math.floor(Math.random() * data.length)];
            const statement1 = data1[Math.floor(Math.random() * data1.length)];
            setRandomNumber(`Someone has just won ${statement} on ${statement1}`);
        };

        // Fetch data every 17 seconds
        const intervalId = setInterval(fetchData, 10000);

        // Clean up interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [randomNumber]);

    function getTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0'); // add leading zero if necessary
        const minutes = now.getMinutes().toString().padStart(2, '0'); // add leading zero if necessary

        return `${hours}:${minutes}`;
    }

    setInterval(() => {
        const timeString = getTime();
        console.log(timeString); // or do something else with the time string
    }, 1000);



    return (
        <div className='body2' >

            <div style={{ position: 'relative' }}> <img src={logo28} alt="logo14" className='logo28' />
                <div style={{ fontSize: "12px", color: "#ffffff80", position: 'absolute', top: "14.5px", marginLeft: "15px", padding: "3px", fontWeight: "500", background: "black" }}>{getTime()}</div></div>

            <div className='marque2' position="relative">
                <div style={{
                    position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.2"
                }} ></div>
                <div style={{
                    position: "absolute", top: "151px", left: "48px", marginRight: "10px",
                    padding: "6px", borderRadius: "17.2px", backgroundColor: "#2e2f37a6", border: "1px solid rgba(128, 128, 128, 0.445)", display: "flex", alignItems: "center", justifyContent: "center"
                }} onClick={ScrollRight} > <IoIosArrowBack style={{ fontSize: "20px", color: "white" }} /></div>
                <img src={logo37} alt="Logo37" style={{ height: "226px", borderRadius: "4px" }} />
                <img src={logo29} alt="Logo29" style={{ borderRadius: "4px", marginLeft: "10px", }} />
                <img src={logo30} alt="Logo30" style={{ marginLeft: "10px", borderRadius: "4px", }} />
                <img src={logo31} alt="Logo31" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo32} alt="Logo32" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo33} alt="Logo33" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo34} alt="Logo34" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo35} alt="Logo35" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo36} alt="Logo36" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo29} alt="Logo29" style={{ borderRadius: "4px", marginLeft: "10px", }} />
                <img src={logo30} alt="Logo30" style={{ marginLeft: "10px", borderRadius: "4px", }} />
                <img src={logo31} alt="Logo31" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo32} alt="Logo32" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo33} alt="Logo33" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo34} alt="Logo34" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo35} alt="Logo35" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo36} alt="Logo36" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo29} alt="Logo29" style={{ borderRadius: "4px", marginLeft: "10px", }} />
                <img src={logo30} alt="Logo30" style={{ marginLeft: "10px", borderRadius: "4px", }} />
                <img src={logo31} alt="Logo31" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo32} alt="Logo32" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo33} alt="Logo33" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo34} alt="Logo34" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo35} alt="Logo35" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo36} alt="Logo36" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo29} alt="Logo29" style={{ borderRadius: "4px", marginLeft: "10px", }} />
                <img src={logo30} alt="Logo30" style={{ marginLeft: "10px", borderRadius: "4px", }} />
                <img src={logo31} alt="Logo31" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo32} alt="Logo32" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo33} alt="Logo33" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo34} alt="Logo34" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo35} alt="Logo35" style={{ marginLeft: "10px", borderRadius: "4px" }} />
                <img src={logo36} alt="Logo36" style={{ marginLeft: "10px", borderRadius: "4px" }} />


                <div style={{
                    position: "absolute", top: "151px", right: "48px",
                    padding: "6px", borderRadius: "17.2px", backgroundColor: "#2e2f37a6", border: "1px solid rgba(128, 128, 128, 0.445)", display: "flex", alignItems: "center", justifyContent: "center"
                }} onClick={ScrollLeft}> <IoIosArrowForward style={{ fontSize: "20px", color: "white" }} /></div>

            </div>

            <div style={{ backgroundColor: "white", margin: "16px 16px 14px 14px", overflow: "hidden", borderRadius: "3px" }}><Marquee speed={120} style={{ width: "200%", fontWeight: "500", fontSize: "19px", color: "white", height: "40px", background: "linear-gradient(to bottom,  #474953 0,#585b6b)" }} >
                {randomNumber && <>{randomNumber} </>}
            </Marquee>
            </div>

            <div style={{ backgroundColor: "black", margin: "16px 16px 14px 14px", overflow: "hidden", }}>
                <div style={{ backgroundColor: "#2e2f37", fontSize: "15.7px", opacity: '0.8', fontWeight: "500", padding: "13px 10px", color: "white", marginBottom: "0.5px" }}>  New</div>
                <div style={{ backgroundColor: "#2e2f37", fontSize: "18px", fontWeight: "500", flexWrap: "wrap", padding: "10px 10px 10px 10px", color: "white", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gap: "7px" }}>
                    <div className='container'> <img src={logo38} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>

                    <div className='container'> <img src={logo39} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px", }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo40} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo41} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo42} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo43} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo44} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo45} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo46} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo47} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo48} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo49} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo50} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo51} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo52} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo53} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo54} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo55} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo56} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo57} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo58} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo59} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo60} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo61} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo62} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo63} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo64} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo65} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo66} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo67} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo68} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo69} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo70} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo71} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo72} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo73} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo74} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo75} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo76} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo77} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo78} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo79} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo80} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo81} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>
                    <div className='container'> <img src={logo82} alt="Logo38" style={{ height: "126px" }} />
                        <div class="overlay" position="relative" >
                            <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", top: "0", width: "90%", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                                <RiErrorWarningFill style={{ opacity: "0.5" }} />
                                <AiOutlineStar style={{ opacity: "0.5" }} />
                            </div>


                            <button className='button1'>Play Now</button>
                            <button className='button2'>Demo</button>
                        </div></div>


                </div>
            </div>

        </div>
    )
}

export default Body2