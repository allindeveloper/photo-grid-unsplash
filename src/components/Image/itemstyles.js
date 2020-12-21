import styled from "styled-components"

export const Item = styled.figure`
  width: 100%;
  margin-top: auto;
  margin-left: auto;
  position: relative;

  > img {
    width: 100%;
    height: auto;
    transition: all 0.1s;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius:.5rem;
    cursor: zoom-in;
    filter: brightness(80%);
  }
`



export const ItemBottomContainer = styled.div`
  height: 52px;
  width: 100%;
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 9;
  bottom: 0;
  margin-bottom: 5px;
`
export const ItemName = styled.span`
  display: flex;
  align-self: center;
  margin-left: 16px;
  text-align: left;
  color: #eee;
  font-weight: 800;
`

export const ItemUser = styled.div`
  display: block;
  flex-direction: row;
`

export const ItemUserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: 16px;
`
export const ItemLocation = styled.span`
display: flex;
  align-self: center;
  margin-left: 16px;
  text-align: left;
  color: #DDE2E9;
  font-weight: 600;
`

