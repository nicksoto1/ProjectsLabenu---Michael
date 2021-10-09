import styled from 'styled-components'
//Styled-NavBar
export const HeaderContainer  = styled.header`

display: flex;
justify-content: space-between;
padding: 10px;
align-items: center;
flex-wrap: wrap;
background-color: rgb(0, 0, 0);
color: white;
`

export const Menu = styled.ul`
  display:flex;
  list-style: none;
margin-right:3rem;

`;

export const Lista = styled.li`
  margin-right:1rem;

`;
// export const NavBarStyle = styled.div`
//      font-family: 'Allerta', sans-serif;
//      color: white;
//      display: flex;
//      justify-content: space-between;
//      height: 45px;
//  `
//export const NavBarIcons = styled.div`
//     display: flex;
//     cursor: pointer;
// `
//export const Icons = styled.p`
//     padding-right: 60px;
//     :hover {
//         text-decoration: underline;
//     }
// `
//export const Logo = styled.h4`
//     padding-left: 3vw;
// `
//export const Line = styled.hr`
//     border: 0.2px solid;
//     border-style: outset;
// `
//Styled-TripsPage
export const ListTrips = styled.div`
     font-family: 'Allerta', sans-serif;
     background-color: #69868C;
     width: 100vw;
     height: 100vh;
     color: white;
 `
export const ActualPage = styled.h2`
     margin-left: 4vw;
 `
export const Trips = styled.div`
     margin-left: 8vw;
     padding-bottom: 2vw;
     font-size: small;
     width: 30vw;
 `//Styled-Home
export const Home = styled.div`
     font-family: 'Allerta', sans-serif;
     color: white;
     background-color: #69868C;
     width: 100vw;
     height: 100vh;
   
 `
export const CTA = styled.div`
 position: absolute;
 width: 651px;
 height: 311px;
 left: 10%;
 top: 200px;
`
export const Button = styled.button`
 font-family: 'Allerta', sans-serif;
 color: white;
 width: 264px;
 height: 31px;
 background: rgba(171, 31, 31, 0.93);
 border-radius: 100px;
 display: block;
 margin-top: 20px;
 :hover {
     background: #A84700;
     }
`
//Styled-FormPage
export const Form = styled.div`
 font-family: 'Allerta', sans-serif;
 color: white;
 background-color: #69868C;
 width: 100vw;
 height: 100vh;
`
export const Inputs = styled.form` 
 font-size: small;
 padding-left: 10vw;
 display: block;
`
export const Label = styled.label`
 display: block;
 padding: 1vh;
`
//Styled-LoginPage
export const Login = styled.div`
 font-family: 'Allerta', sans-serif;
 color: white;
 background-color: #69868C;
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
`
export const LoginForm = styled.div` 
 font-size: small;
 padding-left: 10vw;
 display: block;
`
export const LoginButton = styled.button`
 display: block;
 font-family: 'Allerta', sans-serif;
 color: white;
 width: 150px;
 height: 31px;
 background: rgba(171, 31, 31, 0.93);
 border-radius: 100px;
 margin-top: 2vw;
`
//Styled-AdmPage
export const AdmPageStyle = styled.div`
 font-family: 'Allerta', sans-serif;
 color: white;
 background-color: #69868C;
 width: 100vw;
 height: 100vh;
`
export const ButtonContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 8vw;
`
export const Logout = styled.button`
 font-family: 'Allerta', sans-serif;
 color: white;
 width: 264px;
 height: 31px;
 background: rgba(171, 31, 31, 0.93);
 border-radius: 100px;
 margin-top: 12vh;
 margin-left: 8vw;
`
//Styled-CreatePage
export const PageStyle = styled.div`
 font-family: 'Allerta', sans-serif;
 color: white;
 background-color: #69868C;
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
`
export const BackButton = styled.button`
 font-family: 'Allerta', sans-serif;
 color: white;
 width: 150px;
 height: 31px;
 background: rgba(171, 31, 31, 0.93);
 border-radius: 100px;
 margin-left: 10vw;
 margin-top: 2vw;
 display: block;
`
//Styled-TripDetails
export const DecideButton = styled.button`
 font-family: 'Allerta', sans-serif;
 color: white;
 width: 10vw;
 height: 5vh;
 background: rgba(171, 31, 31, 0.93);
 border-radius: 100px;
 margin-left: 10vw;
 margin-top: 2vw;
 display: inline;
 `

//LoginPage
//ListTripPage
export const Titulo = styled.h3`
display:flex;
justify-content:center;
`
//LoginPage
export const Container = styled.div`
display:flex;
position:absolute;
top:3rem;
left:36rem;
flex-direction:column;
align-items:center;
justify-content :center;
margin-top:10rem;
`

//AdmDetailsPage
export const Line = styled.hr`
     border: 0.2px solid;
     border-style: outset;
     `