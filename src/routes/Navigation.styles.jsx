import styled from "styled-components";
import {Link} from "react-router-dom"
export const NavContainer=styled.div`
    width: 100%;
    display: flex;
    height: 70px;
    align-items: center;
    margin-bottom: 25px;
  justify-content: space-between;
`
export const NavLogo=styled(Link)`
    height: 100%;
     width: 70px;
     padding: 25px;
     display: grid;
     justify-content: center;
     align-items: center;
`
export const NavLinks=styled.div`
     width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const NavLink=styled(Link)`
     padding: 10px 15px;
    cursor: pointer;
`