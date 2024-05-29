import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className=" justify-center">
            <div className="flex justify-center py-5" >
                <LuInstagram />
                <FaXTwitter />
                <FaGithub />
                <FaMedium />
                <FaLinkedin />

            </div>
            <div className="flex justify-center">
                <p className="pb-5">Made by Sagar Sangwan</p>
                {/* <p className="py-5"></p> */}

            </div>
        </div>
    )
}

export default Footer
