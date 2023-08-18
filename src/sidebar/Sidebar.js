import React from 'react'
import logo from '../assets/Microsoft_To-Do_icon.png'
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";


import { AiFillCalendar, AiFillBook, AiFillContacts, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { FaNotesMedical } from "react-icons/fa";
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase';
import { collection, addDoc, QuerySnapshot, collectionGroup } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { updateemail } from '../LoginSlice';
import { UseSelector } from 'react-redux';
import { getDocs, where, query } from 'firebase/firestore';
import PostSlice, { addposts } from '../PostSlice';
import { onAuthStateChanged } from 'firebase/auth';




const Sidebar = () => {



    const dispatch = useDispatch();

    const [din, Setdin] = useState(new Date());

    const [mahina, Setmahina] = useState(din.getMonth() + 1);

    const [saal, Setsaal] = useState(din.getFullYear());

    const [dhyada, Setdhayada] = useState(din.getDate());

    const [currentbackcolor, Setcurrentbackcolor] = useState('black')

    const [textcolor, Settextcolor] = useState('white');

    const [showmonths, Setshowmonths] = useState(false)

    const [showyears, Setshowyears] = useState(false)

    const [showdays, Setshowdays] = useState(true);

    const [clickedday, Setclickedday] = useState(dhyada)

    const [topictodo, Settopictodo] = useState('')

    const [detailtodo, Setdetailtodo] = useState('')

    const [shownotes, Setshownotes] = useState(false)

    const [getnotes,Setgetnotes] = useState(false)


    var storenotes=useSelector((state)=>state.posts.task);



    

 


    const navigate = useNavigate();

    var eurl = useSelector((state) => state.email.email);

    useEffect(()=>{
        const authhandle=()=>
        {
            console.log('j');
            if(eurl=="")
            {
              
                navigate('/');
            }
        }
        authhandle()
    },[])

    
    /// To get days name
    function getdayname(value) {
        switch (value) {
            case 0: return 'Monday'; break;
            case 1: return 'Tuesday'; break;
            case 2: return 'Wednesday'; break;
            case 3: return 'Thursday'; break;
            case 4: return 'Friday'; break;
            case 5: return 'Saturday'; break;
            case 6: return 'Sunday'; break;
        }
    }


    const checkfordata=(d,m,y)=>{
        
        for(var i=0;i<storenotes.length;i++)
   {
         if(storenotes[i]['Day']==`${d} ${getmonthname(m)} ${y}`)
         {
            return 1;
         }
        }
        return 0;

    }


    //To get month name
    function getmonthname(value) {
        switch (value) {
            case 1: return 'January'; break;
            case 2: return 'February'; break;
            case 3: return 'March'; break;
            case 4: return 'April'; break;
            case 5: return 'May'; break;
            case 6: return 'June'; break;
            case 7: return 'July'; break;
            case 8: return 'August'; break;
            case 9: return 'September'; break;
            case 10: return 'October'; break;
            case 11: return 'November'; break;
            case 12: return 'December'; break;
        }

    }

    //To display days name
    function getdays() {
        const daysdivs = [];
        for (var i = 0; i < 7; i++) {

            daysdivs.push(<div class=" flex justify-center items-center h-10 cursor-pointer" style={{ borderWidth: '2px', borderColor: textcolor, color: textcolor }}>{getdayname(i)}</div>);
        }
        return daysdivs;
    }


    const getlistofdays=()=>{
        const listofdays = [];
        var daysinMonth = (new Date(saal, mahina, 0)).getDate();
        var firstdayofmonth = (new Date(saal, mahina - 1, 1).getDay());
        var heightblock = '';
        if (firstdayofmonth >= 6) {
            if (firstdayofmonth == 6) {
                if (daysinMonth == 31) {
                    heightblock = '78px';
                }
                else {
                    heightblock = '96px'
                }
            }
            else {
                if (daysinMonth >= 30) {
                    heightblock = '78px';
                }
                else {
                    heightblock = '96px'
                }
            }
        }
        else {
            heightblock = '96px';
        }
        for (var i = 0; i < firstdayofmonth - 1; i++) {
            listofdays.push(<div class='flex justify-center items-center cursor-pointer bg-amber-400 invisible hover:bg-red-500' style={{ borderWidth: '2px', borderColor: textcolor, color: textcolor, height: heightblock }}>{i + 1}
            </div>)
            
        }
        for (var i = 0; i < daysinMonth; i++) {
            const rightnowday = i + 1;
            if (i + 1 == dhyada && din.getMonth() + 1 == mahina && din.getFullYear() == saal) {
                listofdays.push(<div class='flex justify-center items-center cursor-pointer  bg-amber-400 hover:bg-red-500 flex-col' style={{ borderWidth: '2px', borderColor: textcolor, color: textcolor, height: heightblock }} onClick={(e) => { Setshowdays(false); Setclickedday(rightnowday) }}><span class=''>{i + 1}</span>
                {checkfordata(rightnowday,mahina,saal)==1 && <span class='flex-1 mt-5' onClick={(e)=>{Setshowdays(false); Setshowmonths(false); Setshowyears(false); Setshownotes(true)}}><FaNotesMedical/></span>}
                </div>)
            }
            else {
                listofdays.push(<div class='flex justify-center items-center  cursor-pointer hover:bg-red-500 flex-col' style={{ borderWidth: '2px', borderColor: textcolor, color: textcolor, height: heightblock }} onClick={(e) => { Setshowdays(false); Setclickedday(rightnowday) }}><span class='' >{i + 1}</span>{checkfordata(rightnowday,mahina,saal)==1 && <span class='flex-1 mt-5' onClick={(e)=>{Setshowdays(false); Setshowmonths(false); Setshowyears(false); Setshownotes(true)}}><FaNotesMedical/></span>}</div>)
            }
        }
        return listofdays;
        }


    const fetchalltaskoftheday=(daynow,monthnow,yearnow)=>{
        const divs=[]
       for(var i=0;i<storenotes.length;i++)
       {
             if(storenotes[i]['Day']==`${daynow} ${getmonthname(monthnow)} ${yearnow}`)
             {
                divs.push(
                    <div>
                        <hr/>
                <div class='text-lg font-bold'>{storenotes[i]['Topic']}</div>
                <div class='text-base font-semibold'>{storenotes[i]['Details']}</div>
                    </div>
                    );
             }
       }
       return divs;
    }

    function handledark() {
        if (currentbackcolor == 'white') {
            Setcurrentbackcolor('black');
            Settextcolor('white');
        }
        else {
            Setcurrentbackcolor('white');
            Settextcolor('black');
        }
    }


    function handlemonths() {
        const monthsdiv = []
        for (var i = 0; i < 12; i++) {
            const monthnumber = i + 1;
            monthsdiv.push(<div class='flex justify-center items-center cursor-pointer h-24  hover:bg-red-500' style={{ color: textcolor }} onClick={(e) => {
                Setmahina(monthnumber)
                Setshowmonths(false);
                Setshowdays(true);
            }}>{getmonthname(i + 1)}</div>);
        }
        return monthsdiv;
    }


    function handleyears() {
        const yearsdiv = [];
        for (var i = 0; i < 16; i++) {
            const yearnumber = saal + i;
            yearsdiv.push(<div class='flex justify-center items-center cursor-pointer h-24  hover:bg-red-500' style={{ color: textcolor }} onClick={(e) => {
                Setsaal(yearnumber);
                Setshowyears(false);
                Setshowdays(true);
            }}>{saal + i}</div>)
        }
        return yearsdiv;
    }

    const handlelogout = async () => {
        try {

            await signOut(auth).then((usercred) => {
                window.localStorage.removeItem('isloggedin');
                dispatch(updateemail(''));
                navigate('/')
            })
            // Successful sign-in, you can navigate to another page or update UI
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle error, display error message, etc.
        }
    }


    const handlesave = async (d, m, y) => {


        if (detailtodo == '' && topictodo == '') {
            alert('Doesn\'t support empty notes')
        }
        else {


            try {
                await addDoc(collection(db, 'TodoTasks'), {
                    Day: `${d} ${m} ${y}`,
                    Details: detailtodo,
                    Topic: topictodo,
                    email: eurl,
                });
                dispatch(addposts({Details:detailtodo,Day: `${d} ${m} ${y}`, Topic: topictodo,
                email: eurl,}))

               
            } catch (e) {
                console.log('error is: ' + e);
            }
        }

        Setdetailtodo('')
        Settopictodo('')
        Setshowdays(true)
    }





    return (
        <div class='flex'>
            <aside class='bg-gray-900 w-64 h-screen py-10 float-left'>
                <div class='flex items-center justify-center h-10 w-auto py-5 bg-gray- cursor-pointer'>
                    <img src={logo} alt="LOGO" class="h-10 w-10" />
                    <span class='ml-3 text-gray-50 font-semibold text-2xl' onClick={(e) => { Setshowdays(true);  Setshownotes(false); Setshowmonths(false);Setshowyears(false);Setgetnotes(false);}}>ToDoApp</span>
                </div>
                
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" style={{ color: textcolor }}></hr>
                
                <div class='flex items-start justify-start h-10 w-auto py-5 mt-6 cur'>
                    <CiDark class='ml-8' style={{ color: "white" }} size={32} />
                    <span class=' text-white font-semibold text-lg'>Light Mode</span>
                    <label class='relative inline-flex items-center cursor-pointer'>
                        <input type="checkbox" value="" class="sr-only peer" defaultchecked />
                        <div class="w-11 h-6 bg-gray-200 mt-1 ml-2 rounded-full peer-checked:after:translate-x-full  peer-checked:after:border-white peer:after:content-[''] after:absolute after:top-0.7 after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600" onClick={(e) => { handledark() }}></div>
                    </label>
                </div>
            </aside>

            <div class=' w-screen h-screen' style={{ background: currentbackcolor }}>
                <div class='ml-24 mt-10 font-serif text-xl cursor-pointer flex mr-10' style={{ color: textcolor }} onClick={(e) => { Setshowdays(true); Setshownotes(false); Setshowmonths(false);Setshowyears(false);Setgetnotes(false)}}><span class='flex-1'>Calendar</span><span onClick={(e)=>{Setsaal(din.getFullYear()); Setmahina(din.getMonth()+1); Setdhayada(din.getDate())}}>Go to Today</span><span class='flex-1 text-end' onClick={(e) => { handlelogout() }}>Logout</span></div>
                <hr class='h-px bg-gray-200 border-0 dark:bg-gray-700' />
                <div class='ml-20 mt-10 flex gap-12 mb-10'>
                    <button class='w-8 h-7 rounded-full justify-center flex items-center' style={{ borderWidth: '2px', borderColor: textcolor }} onClick={(e) => {
                        Setgetnotes(false)
                        if (mahina - 1 == 0) {
                            Setmahina(12);
                            Setsaal(saal - 1);
                        }
                        else {

                            Setmahina(mahina - 1);
                        }
                    }}>
                        <AiOutlineLeft style={{ color: textcolor }} />
                    </button>
                    <div style={{ color: textcolor, cursor: 'pointer' }}><span onClick={(e) => { Setshowyears(false); Setshowmonths(true); Setshowdays(false); Setgetnotes(false) }}>{getmonthname(mahina)},</span><span onClick={(e) => {
                        Setshowmonths(false);
                        Setshowyears(true);
                        Setshowdays(false);
                        Setgetnotes(false)
                    }}> {saal}</span></div>
                    <button class='w-8 h-7 rounded-full justify-center flex items-center' style={{ borderWidth: '2px', borderColor: textcolor }} onClick={(e) => {
                        Setgetnotes(false)
                        if (mahina + 1 == 13) {
                            Setmahina(1)
                            Setsaal(saal + 1);
                        }
                        else {
                            Setmahina(mahina + 1);
                        }
                    }}>
                        <AiOutlineRight style={{ color: textcolor }} />
                    </button>
                </div>
                <div class='flex justify-center flex-col gap-y-2'>
                    {showmonths == false && showyears == false && showdays == false && shownotes == true && <div class='bg-slate-600 h-96 w-96 m-auto flex flex-col text-center gap-y-3 text-white overflow-y-auto'>
                        <div class='mt-5'>{getmonthname(mahina)} {clickedday}, {saal}</div>
                       
                        {fetchalltaskoftheday(clickedday,mahina,saal)}
                        </div>}
                    {showmonths == false && showyears == false && showdays == false && shownotes == false && <div class='bg-slate-600 h-96 w-96 m-auto flex flex-col text-center gap-y-3 text-white'>
                        <div class='mt-5'>{getmonthname(mahina)} {clickedday}, {saal}</div>
                        <textarea class='h-10 bg-slate-800 mx-3 pl-4 pt-2 font-bold' placeholder='Topic of Task' onChange={(e) => { Settopictodo(e.target.value) }} value={topictodo} />
                        <textarea class='h-40 text-white bg-slate-800 mx-3 pl-4 pt-2 overflow-y-auto' placeholder='Details of Task' onChange={(e) => { Setdetailtodo(e.target.value) }} value={detailtodo} />
                        <button class='mt-5 bg-green-600 text-white w-20 h-10 rounded-full m-auto font-semibold' onClick={(e) => {
                            e.preventDefault();
                            Setshowdays(true)
                            Setshowmonths(false)
                            Setshowyears(false)
                            handlesave(clickedday, getmonthname(mahina), saal);
                        }}
                        >Done</button>
                    </div>}
                   
                    {showmonths == false && showyears == true && showdays == false && shownotes == false &&
                        <div class='w-full flex flex-col'>
                            <div class='flex'> <AiOutlineLeft class='flex-1 h-10 cursor-pointer' style={{ color: textcolor }} onClick={(e) => {
                                Setsaal(saal - 16)
                            }} /><span class='text-3xl font-bold' style={{ color: textcolor }}>{saal}-{saal + 15}</span><AiOutlineRight class='flex-1 h-10 cursor-pointer' style={{ color: textcolor }} onClick={(e) => {
                                Setsaal(saal + 16)
                            }} /></div>

                            <div class='grid grid-cols-4 gap-y-3 gap-x-2 pl-10 pr-5'>
                                {handleyears()}
                            </div>
                        </div>}
                    {showmonths == true && showyears == false && shownotes == false && showdays == false && <div class='grid grid-cols-3 gap-y-3 gap-x-2 w-full pl-10 pr-5'>{handlemonths()}</div>}
                    <div class="grid grid-cols-7 gap-y-2 gap-x-2 w-full pl-10 pr-5">
                        {showmonths == false && showyears == false && showdays == true && shownotes == false && getdays()}</div>
                    <div class='grid grid-cols-7 gap-y-2 gap-x-2 w-full pl-10 pr-5'>
                        {showmonths == false && showyears == false && showdays == true && shownotes == false &&getlistofdays()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
