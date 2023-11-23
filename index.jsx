import React from "react";

function Signin() {
  return (
    <div className="main">
      <div className="name">
        <h1>facebook</h1>
      </div>

      <div className="submain">
        <div className="create">Create a new account</div>
        <div className="it">It's quick and easy.</div>

        <div className="user">
          <input type="name" placeholder="First name"></input>

          <input type="name" placeholder="Surname"></input>
        </div>

        <br></br>

        <div className="mail">
          <input
            type="email"
            placeholder="Email address or Phone number"
          ></input>
        </div>

        <div className="pass">
          <input type="password" placeholder=" New Password"></input>
        </div>

        <div className="h4">Date of birth </div>

        <div className="date">
        <p id="demo"></p>

        <script>
         const numbers = [4, 9, 16, 25];
             document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);
               </script>

         <label for="user"></label>
          <select name="name" id="user">
          <option value="2023"selected>2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option >2002</option>
            <option value="2001" >
              2001
            </option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option >1993</option>
            <option >1992</option>
            <option >1991</option>
            <option >1990</option>
            <option >1989</option>
            <option >1988</option>
            <option >1987</option>
            <option >1986</option>
            <option >1985</option>
            <option >1984</option>
            <option >1983</option>
            <option >1982</option>
            <option >1981</option>
            <option >1980</option>
            <option >1979</option>
            <option >1978</option>
            <option >1976</option>
            <option >1975</option>
            <option >1974</option>
            <option >1973</option>
            <option >1972</option>
            <option >1971</option>
            <option >1970</option>
            

          </select>

          <label for="user"></label>
          <select name="name" id="user">
            <option value="jan">Jan</option>
            <option value="f">Feb</option>
            <option value="m">Mar</option>
            <option value="a">Apr</option>
            <option value="m">May</option>
            <option value="ju">Jun</option>
            <option value="j">Jul</option>
            <option value="A">Aug</option>
            <option value="s">Sep</option>
            <option value="o">Oct</option>
            <option value="n" selected>
              Nov
            </option>
            <option value="d">Dec</option>
          </select>

          <label for="user"></label>
          <select name="name" id="user">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23" selected>
              23
            </option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>

        <div className="Gen">
          <h4> Gender </h4>
          <div className="gen">
            <div className="genFemale">
              <span>Female</span>
              <input type="radio" name="mygender"></input>
            </div>
            <div className="genmale">
              <span>Male</span>
              <input type="radio" name="mygender"></input>
            </div>
            <div className="gencustom">
              <span>Custom</span>
              <input type="radio" name="mygender"></input>
            </div>
          </div>
          <div className="for">
            People who use our service may have uploaded your contact
            information to 
            <div>
              Facebook.
              <a href="#" id="hyperlink">
                Learn more
              </a>
            </div>
          </div>
          <br></br>
          <div className="term">
            By clicking Sign Up, you agree to our
            <a href="#" id="hyperlink">
              Terms, Privacy Policy
            </a>
            and
            <a href="#" id="hyperlink">
              Cookies Policy.
            </a>
          
            <div>
            You may receive SMS notifications from us and can opt out at any
            time.
              
             </div>
           
          </div>
          <button className="btn">Sign Up</button><br></br><br></br><a href="#" id="hyperlink">
              Already have a account?
            </a>
            <div className="link">
           
              Already have a account?
            
          </div>
        </div>
      </div>
      </div>
  );
}

export default Signin;
