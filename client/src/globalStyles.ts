import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin : 0;
		padding : 0;
		box-sizing : border-box;
		font-size : 18px;
      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
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
	}

`;
export default GlobalStyle;
