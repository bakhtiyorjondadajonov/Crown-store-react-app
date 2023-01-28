
import styled,{css} from "styled-components";

export const BackgroundImage=styled.div`
     position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 6s cubic-bezier(0.075, 0.82, 0.165, 1);
   
   background-image:${({imageUrl})=>`url(${imageUrl})`};



`
export const DirectoryBody=styled.div`
height: 90px;
padding: 0 25px;
border: 1px solid #000;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 5;
background-color: white;
opacity: 0.7;
position: absolute;
& h2{
text-transform: uppercase ;
}
`
export const Directory=styled.div`
 overflow: hidden;
min-width: 30%;
 height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #000;
margin: 0 7.5px 15px;
position: relative;
&:hover{
    cursor: pointer;
    & ${BackgroundImage}{
        transform: scale(1.2);
    }
    & ${DirectoryBody}{
        opacity: 0.9;
    }
        }

`
