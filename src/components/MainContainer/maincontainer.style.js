import styled from 'styled-components'

export const M = {}

M.MainWrapper = styled.div`
  display: flex;
  padding: 1em;
  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`

M.Main = styled.main`
  width: 75%;
  float: left;

  @media screen and (max-width: 1199px) {
    float: none;
    width: 100%;
    padding: 0;
  }
`

M.Aside = styled.aside`
  width: 25%;
  float: right;
  padding-left: 30px;

  @media screen and (max-width: 1199px) {
    float: none;
    width: 100%;
    padding: 0;
  }
`
M.MovieList = styled.div`
  display: block;
`
