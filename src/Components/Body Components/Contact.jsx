import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BsSendFill } from 'react-icons/Bs'
import { IoMdCheckmark } from 'react-icons/Io'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import emailjs from '@emailjs/browser';

const Contact = ({HandleContact, activeScroll}) => {

      const ref= useRef(null)
      const isInView = useInView(ref, {amount: 0.5})


      useEffect(()=>{
        if (isInView && !activeScroll){
          HandleContact()
        }
           
      }, [isInView])

      const [sendMail, setSendMail] = useState(false)

      useEffect(()=>{
        if (sendMail){
          const mailTimer = setTimeout(()=>{
            setSendMail(false)
          }, 5500)
      
          return()=>clearTimeout(mailTimer)
        }
      },[sendMail] )


      

      const schema = yup.object().shape({
        email: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().required()
      })

      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      })


      const sendIt = (e) => {
        // e.preventDefault()

        // emailjs.sendForm('service_gx0qx5s', 'template_sonopaf', e.target, 'SZpjDJ73Fhc7PuJ85')
        //   .then((result) => {
        //     console.log(result.text);
        //   }, (error) => {
        //     console.log(error.text);
        //   });
    
        // e.target.reset() 
    
        const formElement = document.querySelector('form'); // Adjust the selector based on your HTML structure
        emailjs.sendForm('service_gx0qx5s', 'template_sonopaf', formElement, 'SZpjDJ73Fhc7PuJ85')
          .then((result) => {
            console.log(result.text);
          })
          .catch((error) => {
            console.log(error.text);
          });

          setTimeout(()=>{
            formElement.reset()
          }, 3800)
 
      }

      const onSubmit = (data) => {
        console.log(data)
        sendIt(data)
        setSendMail(true)

       }

  
    

  return (
    <div ref={ref} id='contact' className='flex-[1] md:flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 flex flex-col items-center my-16 dark:bg-black transition-all duration-500 pt-16 pb-16'>
      <div  className='flex flex-col items-center w-full'>

        <p className='text-[30px] small:text-[36px] w-[80%] break-words text-white text-center pt-8 font-body '>Contact Richard</p>
        <form  className='w-full small:w-[80%] md:min-w-[470px] md:w-[60%] bg-gray-700 transition-all duration-500 dark:bg-black mt-8 p-8 pb-0 flex flex-col items-center rounded-2xl' onSubmit={handleSubmit(onSubmit)} >
          <div className='w-full relative'>
            <input id='email-address' placeholder='richardaboagye100@gmail.com' type='text' name='email-address' className='w-full  h-8 border-0 border-b border-[#94A3B8] peer outline-0 bg-transparent py-1 pr-3 text-gray-400  focus:border-[#009D66] placeholder-transparent' {...register("email")}/>
            {errors.email?.message && (<p className="text-red-700 font-semibold text-right text-[12px] absolute bottom-[-18px] right-0">Sender's Email Address is Required</p>)}
            <label for="email-address" className='absolute left-0 py-1 pr-3 -top-5  cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5 ease-in-out text-xs peer-focus:text-[#009D66]  transition-all duration-300 uppercase peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm'>Email</label>
          </div>

          <div className='my-12 w-full relative'>
            <input placeholder='For your perusal' name='subject' autoComplete='off' id='subject' type="text" className='w-full h-8 border-0 border-b border-[#94A3B8]  peer outline-0 bg-transparent py-1 pr-3 text-gray-400 focus:border-[#009D66] placeholder-transparent' {...register("subject")} />
            {errors.subject?.message && (<p className="text-red-700 font-semibold text-right text-[12px] absolute bottom-[-18px] right-0">Enter The Message Subject</p>)}
            <label for="subject" className='absolute left-0 py-1 pr-3 -top-5 cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5  ease-in-out peer-focus:text-[#009D66] font-semibold transition-all duration-300 uppercase  text-xs peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm'>Subject </label>

          </div>

          <div className='mb-12 w-full relative'>
            <textarea placeholder='this is the message' name='message' id='message' className='w-full h-[150px] box-border resize-none border-0 border-b border-[#94A3B8]  peer outline-0 bg-transparent py-1 pr-3 text-gray-400 focus:border-[#009D66] placeholder-transparent' {...register("message")} />
            {errors.message?.message && (<p className="text-red-700 font-semibold text-right text-[12px] absolute bottom-[-12px] right-0"> Enter The Message Here</p>)}
            <label for="message" className='absolute left-0 py-1 pr-3 text-xs cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5  ease-in-out peer-focus:text-[#009D66] transition-all duration-300 -top-5 peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm uppercase'>Message</label>
          </div>

          <motion.div className={`${sendMail ? "w-[20%] delay-700 transition-all duration-1000" : " w-full delay-200 transition-all duration-1000"}`}>

            <motion.button whileTap={{ scale: 0.9 }}  type='submit' className={`bg-[#009D66] mb-12 font-bold py-2 px-4   text-white flex justify-center items-center w-full rounded-full border-[#009D66] download-inner-shadow border-t relative `} ><p className={`${sendMail && " duration-700 transition-all translate-x-[-200px] opacity-0 delay-200"}`}>SEND</p>
              < motion.div initial={sendMail && {
                opacity: 1,
                // x: 200,
                y: 0
              }}

                animate={sendMail && {
                  opacity: 0,
                  // x: 0,
                  y: -30,
                  transition: { duration: 0.85, delay: 1.9 }
                }}
                className='absolute'>
                <BsSendFill className={`${sendMail ? "opacity-1 transition-all duration-500 translate-x-0 text-white delay-500" : "text-white opacity-0 translate-x-[200px] transition-all duration-700 delay-500"}`} />
              </motion.div>

              <motion.div className={`${sendMail ? "opacity-1 delay-[3s] text-xl p-0 m-0 translate-y-0 transition-all duration-500" : "translate-y-[30px] p-0 m-0 opacity-0"} border-[#009D66] border bg-[#009D66] inset-0 rounded-full absolute flex justify-center items-center p-0`}>
                <IoMdCheckmark className={`${sendMail ? "opacity-1 delay-[3.6s] text-xl p-0 m-0 translate-y-0 transition-all duration-500" : "translate-y-[30px] p-0 m-0 opacity-0"}`} />
                <h6 className={`${sendMail ? "opacity-1 delay-[3.6s] pb-1 m-0  translate-y-0 transition-all duration-500" : "translate-y-[30px] opacity-0 pb-1 m-0 "}`}>sent</h6>
              </motion.div>

            </motion.button>

          </motion.div>
          
          {/* <motion.button whileTap={{scale: 0.5}} onClick={() => setSendMail(true)} transition={{ duration: 0.4 }} type='submit' className={`bg-[#009D66] mb-12 font-bold py-2 px-4   text-white flex justify-center items-center rounded-full download-inner-shadow border-[#009D66] border-t relative `}><p className={`${sendMail && " duration-700 transition-all translate-x-[-200px] opacity-0 delay-200"}`}>SEND</p>
            < motion.div initial={sendMail && {
              opacity: 1,
              // x: 200,
              y: 0
            }}

              animate={sendMail && {
                opacity: 0,
                // x: 0,
                y: -30,
                transition: { duration: 0.85, delay: 1.5 }
              }}
              className='absolute'>
              <BsSendFill className={`${sendMail ? "opacity-1 transition-all duration-500 translate-x-0 text-[#009d66] delay-500" : "text-[#009d66] opacity-0 translate-x-[200px] transition-all duration-700"}`} />
            </motion.div>

          </motion.button> */}
        
          {/* <motion.button whileTap={{scale:0.95}} transition={{duration: 0.4}} type='submit' className='bg-[#009D66] mb-12 font-bold py-2 px-4 w-full text-white rounded-full download-inner-shadow border-[#009D66] border-t '>SEND</motion.button> */}
        </form>
        <div className='flex flex-col items-center w-[80%]'>
            <div className='flex items-center justify-center gap-4 w-full mb-9'>
              <div className='w-[15%] border h-0 border-t-gray-500'></div>
              <p className='font-body text-[#009D66]'>OR</p>
              <div className='w-[15%] border h-0 border-t-gray-500'></div>
            </div>
            <p className='font-body text-[#94A3B8] break-words w-[80%] text-center px-2'>www.reactbyrichard@gmail.com</p>
          </div>

      </div>
      

    </div>
  )
}

export default Contact





// import React, { useEffect, useRef, useState } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { BsSendFill } from 'react-icons/Bs'
// import { IoMdCheckmark } from 'react-icons/Io'
// import { useForm } from 'react-hook-form'
// import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"

// const Contact = ({HandleContact, activeScroll}) => {

//       const ref= useRef(null)
//       const isInView = useInView(ref, {amount: 0.5})


//       useEffect(()=>{
//         if (isInView && !activeScroll){
//           HandleContact()
//         }
           
//       }, [isInView])

//       const [sendMail, setSendMail] = useState(false)

//       useEffect(()=>{
//         if (sendMail){
//           const mailTimer = setTimeout(()=>{
//             setSendMail(false)
//           }, 6000)
      
//           return()=>clearTimeout(mailTimer)
//         }
//       },[sendMail] )


//       const [email, setEmail] = useState("")
//       const [subject, setSubject] = useState("")
//       const [message, setMessage] = useState("")
      

//       const schema = yup.object().shape({
//         email: yup.string().email().required(),
//         subject: yup.string().required(),
//         message: yup.string().required()
//       })

//       const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema)
//       })
      

//       const onSubmit = (e) => {
//         // console.log(e)
//         setSendMail(true)
//         console.log(email)

//         const mailTimer = setTimeout(()=>{
//           // setEmail('')
//           // setSubject('')
//           // setMessage('')
//         //  console.log(schema.email["jsksjkg"])
//         }, 4000)
    
//         return()=>clearTimeout(mailTimer)

//       }
    

//   return (
//     <div ref={ref} id='contact'  className='flex-[1] md:flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 flex flex-col items-center my-16 dark:bg-black transition-all duration-500 pt-16 pb-16'>
//       <div  className='flex flex-col items-center w-full'>

//         <p className='text-[30px] small:text-[36px] w-[80%] break-words text-white text-center pt-8 font-body '>Contact Richard</p>
//         <form  className='w-full small:w-[80%] md:min-w-[470px] md:w-[60%] bg-gray-700 transition-all duration-500 dark:bg-black mt-8 p-8 flex flex-col items-center rounded-2xl'  onSubmit={handleSubmit(onSubmit)}>
//           <div className='w-full relative'>
//             <input id='email-address' placeholder='richardaboagye100@gmail.com' type='text' className='w-full  h-8 border-0 border-b border-[#94A3B8] peer outline-0 bg-transparent py-1 pr-3 text-gray-400  focus:border-[#009D66] placeholder-transparent' {...register("email")} value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             {errors.email?.message && (<p className="text-red-700 text-right text-[12px] absolute bottom-[-18px] right-0">Sender's Email Address is Required</p>)}
//             <label for="email-address" className='absolute left-0 py-1 pr-3 -top-5  cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5 ease-in-out text-xs peer-focus:text-[#009D66]  transition-all duration-300 uppercase peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm'>Email</label>
//           </div>

//           <div className='my-12 w-full relative'>
//             <input placeholder='For your perusal' autoComplete='off' id='subject' type="text" className='w-full h-8 border-0 border-b border-[#94A3B8]  peer outline-0 bg-transparent py-1 pr-3 text-gray-400 focus:border-[#009D66] placeholder-transparent' {...register("subject")} value={subject} onChange={(e)=>setSubject(e.target.value)} />
//             {errors.subject?.message && (<p className="text-red-700 text-right text-[12px] absolute bottom-[-18px] right-0">Enter The Message Subject</p>)}
//             <label for="subject" className='absolute left-0 py-1 pr-3 -top-5 cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5  ease-in-out peer-focus:text-[#009D66] transition-all duration-300 uppercase  text-xs peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm'>Subject </label>

//           </div>

//           <div className='mb-12 w-full relative'>
//             <textarea placeholder='this is the message' id='message' className='w-full h-[150px] box-border resize-none border-0 border-b border-[#94A3B8]  peer outline-0 bg-transparent py-1 pr-3 text-gray-400 focus:border-[#009D66] placeholder-transparent' {...register("message")} value={message} onChange={(e)=>setMessage(e.target.value)} />
//             {errors.message?.message && (<p className="text-red-700 text-right text-[12px] absolute bottom-[-12px] right-0"> Enter The Message Here</p>)}
//             <label for="message" className='absolute left-0 py-1 pr-3 text-xs cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5  ease-in-out peer-focus:text-[#009D66] transition-all duration-300 -top-5 peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm uppercase'>Message</label>
//           </div>

//           <motion.div className={`${sendMail ? "w-[20%] delay-700 transition-all duration-1000" : " w-full delay-200 transition-all duration-1000"}`}>

//             <motion.button whileTap={{ scale: 0.9 }}  type='submit' className={`bg-[#009D66] mb-12 font-bold py-2 px-4   text-white flex justify-center items-center w-full rounded-full border-[#009D66] download-inner-shadow border-t relative `} ><p className={`${sendMail && " duration-700 transition-all translate-x-[-200px] opacity-0 delay-200"}`}>SEND</p>
//               < motion.div initial={sendMail && {
//                 opacity: 1,
//                 // x: 200,
//                 y: 0
//               }}

//                 animate={sendMail && {
//                   opacity: 0,
//                   // x: 0,
//                   y: -30,
//                   transition: { duration: 0.85, delay: 1.9 }
//                 }}
//                 className='absolute'>
//                 <BsSendFill className={`${sendMail ? "opacity-1 transition-all duration-500 translate-x-0 text-white delay-500" : "text-white opacity-0 translate-x-[200px] transition-all duration-700 delay-500"}`} />
//               </motion.div>

//               <motion.div className={`${sendMail ? "opacity-1 delay-[3s] text-xl p-0 m-0 translate-y-0 transition-all duration-500" : "translate-y-[30px] p-0 m-0 opacity-0"} border-[#009D66] border bg-[#009D66] inset-0 rounded-full absolute flex justify-center items-center p-0`}>
//                 <IoMdCheckmark className={`${sendMail ? "opacity-1 delay-[3.6s] text-xl p-0 m-0 translate-y-0 transition-all duration-500" : "translate-y-[30px] p-0 m-0 opacity-0"}`} />
//                 <h6 className={`${sendMail ? "opacity-1 delay-[3.6s] pb-1 m-0  translate-y-0 transition-all duration-500" : "translate-y-[30px] opacity-0 pb-1 m-0 "}`}>sent</h6>
//               </motion.div>

//             </motion.button>

//           </motion.div>
          
//           {/* <motion.button whileTap={{scale: 0.5}} onClick={() => setSendMail(true)} transition={{ duration: 0.4 }} type='submit' className={`bg-[#009D66] mb-12 font-bold py-2 px-4   text-white flex justify-center items-center rounded-full download-inner-shadow border-[#009D66] border-t relative `}><p className={`${sendMail && " duration-700 transition-all translate-x-[-200px] opacity-0 delay-200"}`}>SEND</p>
//             < motion.div initial={sendMail && {
//               opacity: 1,
//               // x: 200,
//               y: 0
//             }}

//               animate={sendMail && {
//                 opacity: 0,
//                 // x: 0,
//                 y: -30,
//                 transition: { duration: 0.85, delay: 1.5 }
//               }}
//               className='absolute'>
//               <BsSendFill className={`${sendMail ? "opacity-1 transition-all duration-500 translate-x-0 text-[#009d66] delay-500" : "text-[#009d66] opacity-0 translate-x-[200px] transition-all duration-700"}`} />
//             </motion.div>

//           </motion.button> */}
        
//           {/* <motion.button whileTap={{scale:0.95}} transition={{duration: 0.4}} type='submit' className='bg-[#009D66] mb-12 font-bold py-2 px-4 w-full text-white rounded-full download-inner-shadow border-[#009D66] border-t '>SEND</motion.button> */}
//         </form>
//         <div className='flex flex-col items-center w-[80%]'>
//             <div className='flex items-center justify-center gap-4 w-full mb-9'>
//               <div className='w-[15%] border h-0 border-t-gray-500'></div>
//               <p className='font-body text-[#009D66]'>OR</p>
//               <div className='w-[15%] border h-0 border-t-gray-500'></div>
//             </div>
//             <p className='font-body text-[#94A3B8] break-words w-[80%] text-center px-2'>www.richyaboagye@gmail.com</p>
//           </div>

//       </div>
      

//     </div>
//   )
// }

// export default Contact