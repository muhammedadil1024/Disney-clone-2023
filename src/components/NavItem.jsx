

const NavItem = ({ name, Icon }) => {
    return (
        <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-[9px] mb-2">
            <Icon />
            <h2>{name}</h2>
        </div>
    );
};

export default NavItem