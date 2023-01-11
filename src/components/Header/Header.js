import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const [user] = useAuthState(auth);
  const [Menu, setMenu] = useState(false);
  const [UserInfo, setUserInfo] = useState(false);

  const handelMenu = () => setMenu(!Menu);
  const handelUserInfo = () => setUserInfo(!UserInfo);

  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="bg-[#FF8F1B]">
      <Container>
        <div className=" lg:grid lg:grid-cols-10 items-center nav_overlay">
          <NavLink to="/" className=" lg:col-span-2 no-underline">
            <h2 className="mr-6 mt-2 cursor-pointer text-[30px] text-[#100c08] font-serif font-black">
              LOGIACA
            </h2>
          </NavLink>
          <div className={Menu ? "nav_bar actives" : " nav_bar"}>
            <div className="nav_list">
              <NavLink to="/" className="Nav_link">
                Home
              </NavLink>
              {user ? (
                <>
                  <NavLink to="/myproduct" className="Nav_link">
                    My Product
                  </NavLink>
                  <NavLink to="/manageInventory" className="Nav_link">
                    Manage Inventory
                  </NavLink>
                  <NavLink to="/addProduct" className="Nav_link">
                    Add Product
                  </NavLink>
                </>
              ) : (
                " "
              )}

              <NavLink to="/blog" className="Nav_link">
                Blog
              </NavLink>
              <NavLink to="/contact" className="Nav_link">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="lg:col-span-2 Menu_Button_item">
            <div className="lg:hidden Menu_Button">
              <span onClick={handelMenu}>
                {Menu ? <FaTimes /> : <GiHamburgerMenu />}
              </span>
            </div>
            {user ? (
              <>
                <span className="d-flex items-center justify-end">
                  {user?.photoURL ? (
                    <img
                      onClick={handelUserInfo}
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src={`${user?.photoURL}`}
                      alt={`${user.displayName.split(" ")[0]}`}
                    />
                  ) : (
                    <img
                      onClick={handelUserInfo}
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg "
                      alt={`${user.displayName}`}
                    />
                  )}
                </span>
                <div
                  className={UserInfo ? "user_data block" : "user_data hidden"}
                >
                  <span
                    onClick={logout}
                    className="flex items-center text-xl font-sans font-semibold cursor-pointer"
                  >
                    <AiOutlineLogout className="text-[26px] mr-2" />
                    {"LogOut"}
                  </span>
                </div>
              </>
            ) : (
              <NavLink to="/login" className="nav_login">
                <BiLogIn className=" text-[35px]" />
              </NavLink>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
