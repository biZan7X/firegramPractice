import { createGlobalStyle } from "styled-components";

const DarkMode = createGlobalStyle`

    body{
        background: #0D1117;
		color: #1db954;

        label:hover{
            color : #0D1117;
        }

        .dark-mode{
            color: var(--primary);
        }

        .dark-mode:hover{
            background : white;
            color : var(--secondary);
        }
		
    }
`;

export default DarkMode;
