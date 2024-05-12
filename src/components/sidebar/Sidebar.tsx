import SidebarLinkGroup from "./SidebarLinkGroup";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <div
            className={`bg-black/50 fixed inset-0 font-peyda text-rasa-blue-350
            flex items-center justify-end z-[100] 
            sm:hidden transition-opacity ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}>
            <div
                className={`bg-rasa-gray-50 w-[60vw] max-w-60 h-full z-[100]
                flex flex-col items-center justify-between
                transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <div
                    className="
                    flex flex-col items-center justify-start gap-2
                    h-full w-full px-4 pt-12">
                    <SidebarLinkGroup onClick={onClose} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
