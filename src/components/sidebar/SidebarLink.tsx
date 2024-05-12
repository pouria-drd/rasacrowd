import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
    link: string;
    label: string;
    onClick: () => void;
    icon?: ReactNode;
    fadeDuration?: number;
}

const SidebarLink = (sidebarLinkProps: SidebarLinkProps) => {
    return (
        <NavLink
            to={sidebarLinkProps.link}
            onClick={sidebarLinkProps.onClick}
            className="rounded-lg px-2 py-4 w-full border-b">
            <div className="text-sm flex items-center justify-end gap-2 w-full">
                <span>{sidebarLinkProps.icon}</span>
                <p>{sidebarLinkProps.label}</p>
            </div>
        </NavLink>
    );
};

export default SidebarLink;
