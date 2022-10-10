import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import a from "../../Styles/Home/home.module.css";
import b from "../../Styles/Home/logo.module.css";
const Middlesection = () => {
  const navigate = useNavigate();
  return (
    <div className={a.image_container}>
      <div className={b.smallscreen_div}>
        <div className={b.main_div}>
          <div className={b.small_div}>
            <div className={b.text_div1}>
              <h1>Free time tracking software</h1>
            </div>
            <div className={b.text_div}>
              <h2>Happy to see you</h2>
            </div>
            <div className={b.text_div}>
              <h2>again!</h2>
            </div>
            <div className={b.text_div}>
              <h2>Book TimeCamp</h2>
            </div>
            <div className={b.text_div}>
              <h2>set-up call</h2>
            </div>
            <div className={b.text_div1}>
              <h1>✓ Showing how TimeCamp works in 15 minutes</h1>
            </div>
            <div className={b.text_div1}>
              <h1>✓ Best practices from 5000+ implementations</h1>
            </div>
            <div className={b.text_div1}>
              <h1>✓ Help with dedicated setup</h1>
            </div>
            <div className={b.btn_reveiw}>
              <div className={b.buttan_chakra}>
                <Button className={b.btn}>Book a demo</Button>
              </div>
              <h4 className={b.text}>or</h4>
              <div className={b.buttan_chakra}>
                <Button className={b.btn} onClick={() => navigate("/signin")}>
                  Go to App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={a.image_div}>
        <div className={a.above_imagediv}>
          <div className={a.happy_box}>
            <div className={a.inner_div}>
              <div className={a.text_div1}>
                <h1>Free time tracking software</h1>
              </div>
              <div className={a.text_div}>
                <h2>Happy to see you</h2>
              </div>
              <div className={a.text_div}>
                <h2>again!</h2>
              </div>
              <div className={a.text_div}>
                <h2>Book TimeCamp</h2>
              </div>
              <div className={a.text_div}>
                <h2>set-up call</h2>
              </div>
              <div className={a.text_div1}>
                <h1>✓ Showing how TimeCamp works in 15 minutes</h1>
              </div>
              <div className={a.text_div1}>
                <h1>✓ Best practices from 5000+ implementations</h1>
              </div>
              <div className={a.text_div1}>
                <h1>✓ Help with dedicated setup</h1>
              </div>
              <div className={a.btn_reveiw}>
                <div>
                  <Button className={a.btn}>Book a demo</Button>
                </div>
                <h4 className={a.text}>or</h4>
                <div>
                  <Button className={a.btn} onClick={() => navigate("/signin")}>
                    Go to App
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={a.outer}>
            <div className={a.circle_image}></div>
            <div className={a.review_company}>
              <h2>Adam Wagner, Co-owner and Chief Strategy Officer</h2>
              <p>
                „TimeCamp proved to be an essential management tool that gives
                us clear insight into a project’s efficiency and helps to avoid
                an overblown workload for our team.”
              </p>

              <img
                src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
                alt=""
                className={a.logo_raindroup}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middlesection;
