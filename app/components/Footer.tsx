import Image from "next/image"
import Ferit from "./icons/ferait.png"
import EitaIcon from "./icons/EitaIcon"
import PhoneIcon from "./icons/PhoneIcon"
import WhatsAppIcon from "./icons/WhatsAppIcon"
import InstagramIcon from "./icons/InstagramIcon"

const Footer = () => {
    return (
        <footer className="bg-rasa-green-400 h-full px-4 pt-8 pb-4 font-vazir text-sm text-zinc-400">
            <div className="divide-y divide-gray-400
            flex flex-col items-center sm:items-start
            md:w-3/5 mx-auto">
                <div className="flex flex-col
                  w-fit gap-4">
                    <p className="cursor-default">
                        رسانه های اجتماعی رساکراد
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <a target="_blank" href="https://wa.me/+989964463019">
                                <WhatsAppIcon />
                            </a>
                            <a target="_blank" href="https://instagram.com/rasacrowd">
                                <InstagramIcon />
                            </a>
                            <a target="_blank" href="https://eitaa.com/rasacrowd">
                                <EitaIcon />
                            </a>
                        </div>

                        <a className="flex items-center justify-between" target="_blank" href="tel:+989964463019">
                            <PhoneIcon />

                            <p>
                                09964463019
                            </p>
                        </a>
                    </div>

                </div>

                <div className="flex items-center justify-between w-full mt-8 py-4">
                    <a href="https://ferait.ir" target="_blank">
                        <Image className="w-16" src={Ferit} alt="ferait" />
                    </a>

                    <a href="https://ferait.ir" target="_blank">
                        توسعه و فناوری فراییت
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer