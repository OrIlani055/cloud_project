import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import { PostData } from "./services/PostData";

class LoginGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {
            let postData;
            if (type === "google" && res.w3.U3) {
                postData = {
                    Name: res.w3.ig,
                    Provider: type,
                    Email: res.w3.U3,
                    Provider_id: res.El,
                    Token: res.Zi.access_Token,
                    Provider_pic: res.w3.paa
                };
            }

            PostData("signup", postData).then(result => {
                let responseJson = result;
                if (responseJson.userData) {
                    sessionStorage.setItem("userData", JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
            });
        }
        /**constructor(props) {
                                          //constructor, will be called when the Form is created

                                          super(props); //call father constructor
                                          this.state = {
                                              first_name: [],
                                              password: [],
                                              loginSuccess: false,
                                              user: null
                                          };

                                          this.handleChangeName = this.handleChangeName.bind(this);
                                          this.handleChangePass = this.handleChangePass.bind(this);
                                          this.handleSubmit = this.handleSubmit.bind(this);
                                      }

                                      handleChangeName(event) {
                                          this.setState({ first_name: event.target.value });
                                      }

                                      handleChangePass(event) {
                                          this.setState({ password: event.target.value });
                                      }

                                      async handleSubmit(event) {
                                          event.preventDefault();
                                          let response = {};
                                          try {
                                              let URL = "https://arielelogin.free.beeceptor.com/login";
                                              URL += "?first_name=" + this.state.first_name;
                                              URL += "&password=" + this.state.password;
                                              //console.log(`calling URL = ${URL}`)
                                              response = await fetch(URL);
                                          } catch (error) {
                                              console.log("fetch error");
                                          }
                                          const myJson = await response.json();
                                          if (!response.ok) {
                                              console.log("fail");
                                          } else {
                                              console.log("ok");
                                              console.log(JSON.stringify(myJson));
                                              this.setState({ loginSuccess: true, user: {...myJson } });
                                          }
                                      }*/

    render() {
            if (this.state.redirectToReferrer) {
                return <Redirect to = { "/Profile" }
                />;
            }

            const responseGoogle = response => {
                console.log(response);
                this.signup(response, "google");
            };
            /**        if (this.state.loginSuccess) {
                return ( <
                    Redirect to = {
                        { pathname: "/Profile", state: { user: this.state.user } }
                    }
                    />
			 );
	 */

            return ( <
                div className = "row "
                id = "Body" >
                <
                div className = "medium-12 columns" >
                <
                GoogleLogin clientId = "679551707407-mku3udkbq6159fko3b9sm8c8ivo3vcrd.apps.googleusercontent.com"
                buttonText = "Login"
                onSuccess = { responseGoogle }
                onFailure = { responseGoogle }
                />{" "} <
                a href = "/signup"
                className = "button seccess" > { " " }
                Signup { " " } <
                /a>{" "} <
                /div>{" "} <
                /div>
            );
        }
        /** 
                                                          /> <
                                                          FormGroup >
                                                          <
                                                          TextField autoFocus label = "first_name"
                                                          type = "text"
                                                          placeholder = "first_name"
                                                          value = { this.state.first_name }
                                                          onChange = { this.handleChangeName }
                                                          required /
                                                          >
                                                          { " " } <
                                                          TextField label = "password"
                                                          type = "password"
                                                          placeholder = "password"
                                                          value = { this.state.password }
                                                          onChange = { this.handleChangePass }
                                                          required /
                                                          >
                                                          { " " } <
                                                          Button onClick = { this.handleSubmit } > Submit < /Button>{" "} < /
                                                          FormGroup >
                                          			);
                                          			*/
}

export default LoginGoogle;