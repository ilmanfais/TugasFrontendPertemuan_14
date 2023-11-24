import styled from "styled-components";

function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <footer className="footer">
                    <h2 className="footer_title">Mobile Legends Hero App</h2>
                    <p className="footer_author">Created by IlmanFais</p>
                </footer>
            </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.div`
  /* Small Screen */
  .container {
      background: linear-gradient(90deg, rgba(52,150,63,1) 0%, rgba(0,0,0,1) 50%, rgba(52,150,63,1) 100%);
      color: #fff;
      padding: 1rem;
      text-align: center;
    }

  .footer__title{
      margin-bottom: 1rem;
    }

  .footer__author {
      margin-bottom: 1rem;
    }

  @media (min-width: 768px) {

    }

  @media (min-width: 992px) {
      
   }
`
export default Footer;
