import React from 'react'

// icons
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { AiOutlineWhatsApp, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { RiArrowUpSLine } from 'react-icons/ri'

// styles
import '../assets/styles/footer.css'

function Footer() {
  return (
    // FOOTER
    <footer>
        <div className="content">
        <div className="copy">
            <AiOutlineCopyrightCircle/> 2022 <span>Gabriel</span>. Todos os Direitos Reservados
        </div>
        <div className="social">
            <a href="https://linkedin.com/in/webperformer"><FiLinkedin className='fab'/></a>
            <a href="https://github.com/WebPerformer"><FiGithub className='fab'/></a>
            <a href="https://api.whatsapp.com/send?phone=5511915657659"><AiOutlineWhatsApp className='fab'/></a>
            <a href="#">
            <div className="up"><RiArrowUpSLine/></div>
            </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer