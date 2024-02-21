import {React, useState, useEffect,useCallback} from 'react'
import styles from './StatusBar.module.css'

const statusBar = () => {
  const [currentTime, setCurrentTime] = useState("");
  function checkTime(i){
    if (i < 10){
      i = "0" + i;
    }
    return i;
  }

  const getTime = useCallback(() => {
    console.log("worked");
    var date = new Date();
    var d = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    m = checkTime(m);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var currentDayAndTime = `${days[d].substr(0, 3)} ${h}:${m}`; 
    setCurrentTime(currentDayAndTime);

  }, []);

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, [getTime]);


  return (
    <>
      <div className={styles.wrapper}>

        {/* Inner left section */}
        <div className={styles.wrapper_inner_left}>
          <img className ={styles.appleIcon}src = "\svgs\apple.svg" alt ="apple_icon" ></img>

          <ul className= {styles.left_ul}>
            <li>
              <span>Finder</span>           
            </li>
            <li>
              <span>File</span>           
            </li>
            <li>
              <span>Edit</span>           
            </li>
            <li>
              <span>View</span>           
            </li>
            <li>
              <span>Go</span>           
            </li>
            <li>
              <span>Window</span>           
            </li>
            <li>
              <span>Help</span>           
            </li>
          </ul>
        </div>

        <div className={styles.wrapper_inner_right}>
          <ul className= {styles.right_ul}>
            <li>
              <img src= "/images/statusicons/1.png" alt = "s1"></img>
            </li>
            <li>
              <img src= "/images/statusicons/2.png" alt = "s2"></img>
            </li>
            <li>
              <img src= "/images/statusicons/3.png" alt = "s3"></img>
            </li>
            <li>
              <img src= "/images/statusicons/4.png" alt = "s4"></img>
            </li>
            <li>
              <img src= "/images/statusicons/5.png" alt = "s5"></img>
            </li>
            <li>
              <img src= "/images/statusicons/6.png" alt = "s6"></img>
            </li>
            <li>
              <img src= "/images/statusicons/7.png" alt = "s7"></img>
            </li>
            <li>
              <span className={styles.date}> {currentTime}</span>
            </li>


          </ul>

          
        </div>


      </div>
    
    </>
  )
}

export default statusBar