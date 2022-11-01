import Head from "next/head"

export function Monkey(){
  return(

    <Head>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'/>
<script src='//s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js?r=182'/>

    </Head>
  )

}





<form>
	<div class="svgContainer">
		<div>

		</div>
	</div>
	
	<div class="inputGroup inputGroup1">
		<label for="loginEmail" id="loginEmailLabel">Email</label>
		<input type="email" id="loginEmail" maxlength="254" />
		<p class="helper helper1">email@domain.com</p>
	</div>
	<div class="inputGroup inputGroup2">
		<label for="loginPassword" id="loginPasswordLabel">Password</label>
		<input type="password" id="loginPassword" />
		<label id="showPasswordToggle" for="showPasswordCheck">Show
			<input id="showPasswordCheck" type="checkbox"/>
			<div class="indicator"></div>
		</label>
	</div>
	<div class="inputGroup inputGroup3">
		<button id="login">Log in</button>
	</div>	
</form>




