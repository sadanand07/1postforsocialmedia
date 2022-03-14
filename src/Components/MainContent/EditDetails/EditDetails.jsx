import React from "react";
import url from "../../../Navigation/Url";
import styles from "./EditDetails.module.scss";
import { useRef,useState,useEffect } from "react";

function EditDetails() {
  const imRef = useRef();

  const [image, setimage] = useState()

  const [imageurl, setimageurl] = useState()


  function changeHandler(e) {
    console.log(e.target.files[0]);

    setimage(e.target.files[0])
  }

  useEffect(() => {
    
    if(image){
      setimageurl(URL.createObjectURL(image))
    }

  }, [image])
  


  return (
    // Content In Login Page
    <section className={styles.Addlinks}>
      {/* Profile Details */}
      <div className={styles.content}>
        {/* Left Side Message */}
        <div className={styles.message}>
          <h2 className={styles.title}>Edit profile details</h2>
        </div>
        <div className={styles.profilecard}>
          <div className={styles.profileimg}>
            <input
              type="file"
              accept=".jpg,.png"
              style={{ display: "none" }}
              ref={imRef}
              onChange={changeHandler}
            />
            <img
              className={styles.image}
              src={imageurl?imageurl:url.imageUrl + "/account/Male.png"}
              alt="Account"
              
            />
            <span
              onClick={() => {
                imRef.current.click();
              }}
            >
              upload
              <br />
              profile
            </span>
          </div>

          <div className={styles.profgrp}>
            <div className={styles.profdetails}>
              <p>
                Username :{" "}
                <input
                  className={styles.profinput}
                  type="text"
                  placeholder="Username"
                />{" "}
              </p>
            </div>
            <div className={styles.profdetails}>
              <p>
                Email Address :{" "}
                <input
                  className={styles.profinput}
                  type="email"
                  placeholder="Email address"
                />{" "}
              </p>
            </div>
            <div className={styles.profdetails}>
              <p>
                {" "}
                Mobile number :{" "}
                <input
                  className={styles.profinput}
                  type="number"
                  placeholder="mobile number"
                />{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Login Form */}
        <form className={styles.loginForm}>
          {/* Input Fields */}
          <div className={styles.inputField}>
            <div className={styles.group}>
              <p className={styles.title}>Facebook App id</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Facebook App id"
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Instagram App id</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Instagram App id"
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Linkdin App id</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Linkdin App id"
              />
            </div>
            <div className={styles.group}>
              <p className={styles.title}>Twitter App id</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Twitter App id"
              />
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.btn}>Update</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditDetails;
