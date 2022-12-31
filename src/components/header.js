import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";
import logo from "../images/Avatar.jpeg"
import './header.css'

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render(){
        return(
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
            {/*<KyoHeader scroll={this.state.hasScrolled}>*/}
                <KyoHeaderGroup>
                    <KyoLink to="/">
                        <KyoAvatar />
                        {/*<img src={logo} width="40"/>*/}
                    </KyoLink>
                    <KyoLink to="/courses">Code</KyoLink>
                    <KyoLink to="/downloads">Media</KyoLink>
                    <KyoLink to="/workshops">Project</KyoLink>
                    <KyoLink to="https://github.com/Jiayuan9">
                        <KyoButton>More</KyoButton>
                    </KyoLink>
                </KyoHeaderGroup>
            {/*</KyoHeader>*/}
            </div>
        )
    }
}

export default Header

// const KyoHeader = styled.div`
//   position: fixed;
//   width: 100%;
//   padding: 50px 0;
//   z-index: 100;
//   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
//
//
//   @media(max-width: 640px){
//     padding: 15px 0;
//
//     a:nth-child(4){
//       display: none;
//     }
//   }
// `

const KyoHeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5,auto);
  align-items: center;
  justify-items: center;
  @media(max-width: 640px){
    grid-template-columns: repeat(4,auto);
  }
`

const KyoLink = styled(Link)`
  color: white;
  font-weight: 700;
  font-size: 20px;
`

const KyoAvatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: url(${logo});
  background-position: center;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const KyoButton = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  background: #56ccf2;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition:1s cubic-bezier(0.2,0.8,0.2,1);
  :hover{
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
    transform: translateY(-3px);
    
  }
`
