import COLORS from "src/constains/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		--toastify-toast-width : 400px;
		--toastify-color-dark : #272727;
		--common-shadow : rgb(0 0 0 / 77%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  --saturation-factor: 1;
		margin : 0;
		padding : 0;
		box-sizing : border-box;
		font-size : 16px;


      @media (min-width: 768px) {
        /* font-size: 16px; */
      }

      @media (min-width: 1024px) {
        /* font-size: 16px; */
      }

			/* Custom scrollbar */
		/* width */
		&::-webkit-scrollbar {
			width: 10px;
			height: 10px;
		}
		/* Track */
	&::-webkit-scrollbar-track {
			border-radius : 7px;
			background: rgba(87, 87, 87, 0.38);
		}
		/* Handle */
	&::-webkit-scrollbar-thumb {
		border-radius : 7px;
			background:rgba(112, 112, 112, 0.38);
		}/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: rgba(112, 112, 112, 1);
		}

			/* SLIDER  slider range */
		input[type=range]{
			-webkit-appearance: none;
		}

	input[type=range]::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 4px;
    display: block;
      background-color: ${COLORS.bgBlock6};
	}
	
	input[type=range]::-webkit-slider-thumb {
		     -webkit-appearance: none;
      appearance: none;
		 appearance: none;

      background-color: ${COLORS.primary};
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 3px;
      width: 10px;
      height: 24px;
      /* margin-left: -5px; */
      /* top: 50%; */
      margin-top: -8px;
      box-shadow: 0 3px 1px 0
          hsla(0, calc(var(--saturation-factor, 1) * 0%), 0%, 0.05),
        0 2px 2px 0 hsla(0, calc(var(--saturation-factor, 1) * 0%), 0%, 0.1),
        0 3px 3px 0 hsla(0, calc(var(--saturation-factor, 1) * 0%), 0%, 0.05);
	}

	

	input[type=range]:focus::-webkit-slider-runnable-track {
      background-color: ${COLORS.bgBlock6};
	}
	/*  */




	}


	html {
		height : 100%;
	}
	body {
		
		background: #121212;
		font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
		height : 100%;
		
		#root{
		height : 100%;
		}

		a{
			color :white;
			text-decoration: underline;
		}
		.bold{
			font-weight : bold;
		}

		

		.disabled-focus{
			&::focus {
				outline : none
			}
		}

	

	}


		
	/* Custom toaster */

	.toast-wrapper {
		border-radius: 15px;
		padding: 20px;
		box-shadow: -16px 20px 100px 0px #00000040;
		border : 2px solid transparent;

		&:hover{

		border: 2px solid #828282
		}
	}

	.toast-body {
		width: 100%;
		text-overflow: ellipsis;
		white-space: normal;
		overflow: hidden;
	}

`;
export default GlobalStyle;
