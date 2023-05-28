import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { SIDEBAR_ROUTES } from "../../Routings/constant";
import useSidebarStyles from "./SidebarStyles";


function Sidebar() {
    const { wrapper, menuLink, menuLinkActive, menuHomeActive, icon, namePath } = useSidebarStyles()

    return (
        <div className={wrapper}>
            <NavLink to={'#'}
                className={menuHomeActive}
            >
                <FontAwesomeIcon icon={faHome} className={icon} />
                <p className={namePath}>Home</p>
            </NavLink>
            {
                SIDEBAR_ROUTES.map((route) => {
                    return (
                        <NavLink to={route.path}
                            className={({ isActive }) => isActive ? menuLinkActive : menuLink}
                            key={route.path}

                        >
                            <FontAwesomeIcon icon={route.icon} className={icon} />
                            <p className={namePath}>{route.name}</p>
                        </NavLink>
                    )
                })
            }

        </div>
    )
}

export default Sidebar
