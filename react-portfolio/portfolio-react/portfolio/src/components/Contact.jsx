import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Lottie from 'react-lottie';
import contact from "../contact.json";
import "../contact.css";
import { Element } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    //for trigger the useeffect for handlesubmit
    const [trigger, settrigger] = useState(false)


    //for handle response in server and dispaly to Users

    // const [response,setServerResponse] = useState("")

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation');

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();

                    // toast("successfully submitted")

                    settrigger(!trigger)
                }
                form.classList.add('was-validated');
            }, false);
        });

    }, []);
    const [data, setData] = useState({
        firstname: "",
        secondname: "",
        mail: "",
        phonenumber: "",
        textarea: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    
        const handleSubmit = async () => {

           console.log(data)


             await fetch("http://localhost:4001/postdata"

, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            }).then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then((val) => {
                //business logic for handle data in server
                // setServerResponse(val)
                console.log(val)
                if(val){
                    toast("successfully submited")

                }
                


                console.log(val)
            }).catch((err) => {
                console.error(err)
            })

        }
    
   










    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contact,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };



    return (
        <>
            <Element name='/Contact'>
                <div className='container-fluid' style={{ backgroundImage: "linear-gradient(147deg, #0c0b0c 60%,  blue)", overflow: "hidden", paddingTop: "100px" }}>
                    <div className='row'>
                        <div className='col-xl-6 forlottie-center'>
                            <div className='forlottie-contact'>
                                <Lottie options={defaultOptions} />
                            </div>
                        </div>
                        <div className='col-xl-6 forlottie-center'>
                            <p className='text-white mb-5' style={{ fontWeight: "bold", fontSize: "30px" }}>GET IN TOUCH</p>
                            <form className='needs-validation'  noValidate>
                                <div className="row">
                                    <div className="col-lg-6 forsm-margin forsm-center">
                                        <input type="text" placeholder='First Name' className='forinput forlg-padding form-control forlg-margin' id='forfirstname' name="firstname" onChange={handleChange} value={data.firstname}  required />
                                    </div>
                                    <div className="col-lg-6 forsm-center formd-margin forsm-margin">
                                        <input type="text" placeholder='Second Name' className='forinput forlg-padding form-control' id="forsecondname" name="secondname" onChange={handleChange} value={data.secondname} required />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6 forsm-margin forsm-center">
                                        <input type="email" placeholder='Enter mail' className='forinput forsm-center forlg-padding form-control' id="formail" name="mail" onChange={handleChange} value={data.mail} required />
                                    </div>
                                    <div className="col-lg-6 forsm-margin forsm-center formd-margin">
                                        <input type="number" placeholder='Phone number' className='forinput forlg-padding form-control' id="forphonenumber" name="phonenumber" onChange={handleChange} value={data.phonenumber} required />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col fortextarea">
                                        <textarea cols={25} rows={4} name="textarea" className='form-control' id="fortextarea" onChange={handleChange} value={data.textarea} required></textarea>
                                    </div>
                                </div>
                                <button className='btn text-white px-5 forformbtn mt-3' type='button' onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="light"
                    transition:Zoom />
            </Element>
        </>
    );
}

export default Contact;
