import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const NavigateLink = styled(NavLink)`
    text-decoration: none;
    width: 100px;
    height: 30px;
    font-size: 17px;
    text-align: center;
    color: #fff;
    background-color: #a5a2a2;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 5px;
    border: none;
    padding-top: 2px;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &.active {
    box-shadow: 0px 0px 17px 5px rgba(92, 90, 90, 0.47);
    background-color: #686464;
  }
    
    :hover,
    :focus {
      background-color: #918d8d;
      }
`

export const AuthDiv = styled.div`
    display: flex;
    gap: 20px;
`
