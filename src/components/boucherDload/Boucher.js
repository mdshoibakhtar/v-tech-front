import React from 'react'

import DownloadPDF from "../../assets/pdf/comp-pdf.pdf"
import { AiOutlineFilePdf } from 'react-icons/ai';



function Boucher() {
    return (
        <div className='download-pdf' style={{ position: "fixed", top: "58%", right: 0, zIndex: "7" }}>
            <a
                href={DownloadPDF}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
                className="btn btn-info text-white"
            >
                <span><AiOutlineFilePdf />Broucher</span>
            </a>
        </div>
    );
}

export default Boucher
