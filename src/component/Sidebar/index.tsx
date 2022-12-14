import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Modal,
} from "@mui/material";
import { CustomWidthTooltipWhite } from "../UI-components/CustomWidthTooltipWhite";
import { CustomWidthTooltip } from "../UI-components/CustomWidthTooltip";

import { useSelector, useDispatch } from "react-redux";
import { loginSelectors, loginActions } from "../../redux/slice/login";
import { User } from "../../model/User";
import {
  MdEditCalendar,
  MdOutlineMessage,
  MdOutlinePowerSettingsNew,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdInsertChartOutlined,
  MdStorefront,
} from "react-icons/md";
import { FaRobot, FaNewspaper } from "react-icons/fa";
import { BsShieldFillPlus, BsFillKeyFill } from "react-icons/bs";
import { RiFolderUserLine, RiBillLine } from "react-icons/ri";
import { TiFlowChildren } from "react-icons/ti";
import { TbAlertCircle } from "react-icons/tb";
import { GiPencilRuler } from "react-icons/gi";
import { IoMdNuclear } from "react-icons/io";

import Profile from "./Modal/Profile";

import singlelogo from "../../assets/img/singlelogo.png";
import avatar from "../../assets/img/avatar.jpg";
import style from "./sidebar.module.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const user: User = useSelector(loginSelectors.selectAccount);

  const [activeIndex, setActiveIndex] = useState(["Blueprints"]);
  const [activeItem, setActiveItem] = useState("");

  const [openProfile, setOpenProfile] = useState(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);

  const sidebarNavItems = [
    {
      field: "GENERAL",
      field_child: [
        {
          display: "Blueprints",
          icon: <FaNewspaper></FaNewspaper>,
          children: [
            {
              display: "Extended sidebar",
              to: `/calendar`,
            },
            {
              display: "Accent header",
              to: `/file`,
            },
            {
              display: "Accent sidebar",
              to: `/job`,
            },
            {
              display: "Boxed sidebar",
              to: `/mail`,
            },
            {
              display: "Collapsed sidebar",
              to: `/messenger`,
            },
            {
              display: "Bottom navigation",
              to: `/project`,
            },
            {
              display: "Top navigation",
              to: `/project`,
            },
          ],
        },
        {
          display: t("SIDEBAR.DASHBOARD"),
          icon: <FaRobot></FaRobot>,
          children: [
            {
              display: t("SIDEBAR.REPORTS"),
              to: `/report`,
            },
            {
              display: "Expenses",
              to: `/Expenses`,
            },
            {
              display: t("SIDEBAR.PRODUCTS"),
              to: `/product`,
            },
            {
              display: "Statistics",
              to: `/Statistics`,
            },
            {
              display: "Automation",
              to: `/Automation`,
            },
            {
              display: "Analytics",
              to: `/Analytics`,
            },
            {
              display: "Banking",
              to: `/Banking`,
            },
            {
              display: t("SIDEBAR.CRYPTO"),
              to: `/crypto`,
            },
            {
              display: "Finance",
              to: `/Finance`,
            },
            {
              display: "Fitness",
              to: `/Fitness`,
            },
          ],
        },
        {
          display: "Data Display",
          icon: <BsShieldFillPlus></BsShieldFillPlus>,
          children: [
            {
              display: "Charts large",
              to: `/calendar`,
            },
            {
              display: "Charts small",
              to: `/file`,
            },
            {
              display: "Component cards",
              to: `/job`,
            },
            {
              display: "Grid",
              to: `/mail`,
            },

            {
              display: "Icon cards",
              to: `/messenger`,
            },

            {
              display: "Image cards",
              to: `/project`,
            },
            {
              display: "Lists large",
              to: `/project`,
            },
            {
              display: "Navigation",
              to: `/project`,
            },
            {
              display: "Profile cards",
              to: `/project`,
            },
            {
              display: "Progress circular",
              to: `/project`,
            },
            {
              display: "Progress horizontal",
              to: `/project`,
            },
            {
              display: "Sparklines large",
              to: `/project`,
            },
            {
              display: "Sparklines small",
              to: `/project`,
            },
            {
              display: "Statistics",
              to: `/project`,
            },
          ],
        },
        {
          display: t("SIDEBAR.APPLICATION"),
          icon: <MdInsertChartOutlined></MdInsertChartOutlined>,
          children: [
            {
              display: "Calendar",
              to: `/calendar`,
            },
            {
              display: "File Manager",
              to: `/file`,
            },
            {
              display: "Job Platform",
              to: `/job`,
            },
            {
              display: "Mailbox",
              to: `/mail`,
            },

            {
              display: "Messenger",
              to: `/messenger`,
            },

            {
              display: "Projects Board",
              to: `/project`,
            },
          ],
        },
      ],
    },

    {
      field: "MANAGEMENT",
      field_child: [
        {
          display: "Users",
          icon: <RiFolderUserLine></RiFolderUserLine>,
          children: [
            {
              display: "List",
              to: `/calendar`,
            },
            {
              display: "User Profile",
              to: `/file`,
            },
          ],
        },
        {
          display: "Projects",
          icon: <TiFlowChildren></TiFlowChildren>,
        },
        {
          display: "Commerce",
          icon: <MdStorefront></MdStorefront>,
          children: [
            {
              display: "Shop",
              to: `/report`,
            },
            {
              display: "List",
              to: `/Expenses`,
            },
            {
              display: "Details",
              to: `/product`,
            },
            {
              display: "Create",
              to: `/addProduct`,
            },
          ],
        },
        {
          display: "Invoices",
          icon: <RiBillLine></RiBillLine>,
          children: [
            {
              display: "List",
              to: `/calendar`,
            },
            {
              display: "Details",
              to: `/file`,
            },
          ],
        },
      ],
    },

    {
      field: "EXTRA PAGES",
      field_child: [
        {
          display: "Auth Pages",
          icon: <BsFillKeyFill></BsFillKeyFill>,
          children: [
            {
              display: "Login",
              to: `/calendar`,
            },
            {
              display: "Register",
              to: `/file`,
            },
            {
              display: "Recover Password",
              to: `/file`,
            },
          ],
        },
        {
          display: "Status",
          icon: <TbAlertCircle></TbAlertCircle>,
          children: [
            {
              display: "Error 404",
              to: `/calendar`,
            },
            {
              display: "Error 500",
              to: `/file`,
            },
            {
              display: "Maintanance",
              to: `/file`,
            },
            {
              display: "Comming Soon",
              to: `/file`,
            },
          ],
        },
      ],
    },

    {
      field: "FOUNDATION",
      field_child: [
        {
          display: "Overview",
          icon: <GiPencilRuler></GiPencilRuler>,
        },
        {
          display: "Documentation",
          icon: <IoMdNuclear></IoMdNuclear>,
        },
      ],
    },
  ];

  const signedItem = ["Accent header", "Expenses", "Data Display"];

  useEffect(() => {
    let address = "";
    sidebarNavItems.forEach((i) => {
      i.field_child.forEach((item) => {
        item?.children?.forEach((child) => {
          if (location.pathname.includes(child.to)) {
            address = child.display;
          }
        });
      });
    });

    setActiveItem(address);
  }, []);

  useEffect(() => {
    let noChildrenItem: string[] = [];
    let removeItem = "";
    sidebarNavItems.forEach((i) => {
      i.field_child.forEach((item) => {
        if (!item?.hasOwnProperty("children"))
          noChildrenItem.push(item.display);
      });
    });
    noChildrenItem.forEach((item) => {
      if (activeIndex.includes(item)) removeItem = item;
    });
    console.log(location.pathname);

    if (!location.pathname.includes(removeItem.toLowerCase())) {
      setActiveIndex(
        activeIndex.filter((activeItem) => activeItem !== removeItem)
      );
    }
  }, [location]);

  const handleActiveItem = (url: string, display: string) => {
    setActiveItem(display);
    if (url === "/mail" || url === "/addProduct") navigate(url);
    else navigate("/");
  };
  const handleNoChildrenItemClick = (display: string) => {
    if (!activeIndex.includes(display))
      setActiveIndex((oldArray) => [...oldArray, display]);
    else return;
    setActiveItem("");
    navigate(`/${display.toLowerCase()}`);
  };
  const signOut = () => {
    dispatch(loginActions.logout());
  };
  return (
    <Box className={style.sidebar}>
      <Box className={style.sidebar_body}>
        <CustomWidthTooltipWhite
          title="Tokyo React Typescript Admin Dashboard"
          arrow
          placement="top"
        >
          <img className={style.brand} src={singlelogo}></img>
        </CustomWidthTooltipWhite>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            marginTop: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
            position: "relative",
          }}
        >
          <img className={style.avatar} src={avatar}></img>
          <Typography
            variant="body1"
            color="white"
            marginTop="10px"
            fontSize="17px"
            fontWeight="700"
          >
            {user.email}
          </Typography>
          <Typography
            fontFamily={`"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`}
            variant="body1"
            color="rgba(255, 255, 255, 0.7)"
          >
            Lead Developer
          </Typography>

          <Box onClick={handleOpenProfile} className={style.pointerBox}>
            <MdKeyboardArrowUp
              color="#e5e6e8"
              style={{ transform: "translateY(2px)" }}
            ></MdKeyboardArrowUp>
            <MdKeyboardArrowDown
              color="#e5e6e8"
              style={{ transform: "translateY(-2px)" }}
            ></MdKeyboardArrowDown>
          </Box>

          <Modal
            open={openProfile}
            onClose={handleCloseProfile}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modalBackdrop"
          >
            <Profile signOut={signOut}></Profile>
          </Modal>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            marginTop: "30px",
          }}
        ></Box>
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          {sidebarNavItems.map((sideItem) => (
            <Box
              sx={{
                marginBottom: "30px",
              }}
            >
              <Box className={style.field_title}>{sideItem.field}</Box>

              {sideItem.field_child.map((item, index) => (
                <>
                  {item.children ? (
                    <Accordion
                      key={index}
                      defaultExpanded={activeIndex.includes(item.display)}
                      className={`${style.customAccordion}`}
                      onChange={(e, expanded) => {
                        if (expanded)
                          setActiveIndex((oldArray) => [
                            ...oldArray,
                            item.display,
                          ]);
                        else
                          setActiveIndex(
                            activeIndex.filter(
                              (activeItem) => activeItem !== item.display
                            )
                          );
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <MdKeyboardArrowDown
                            className={style.sidebar_expandIcon}
                          />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={`${style.sidebar_item} ${
                          activeIndex.includes(item.display) && style.active
                        } `}
                      >
                        <Box className={style.sidebar_icon}>{item.icon}</Box>
                        <Box className={style.sidebar_text}>{item.display}</Box>
                        {signedItem.includes(item.display) && (
                          <Box
                            sx={{
                              position: "absolute",
                              right: "35px",
                              top: "19px",
                            }}
                            className={style.purpledot}
                          ></Box>
                        )}
                      </AccordionSummary>

                      <AccordionDetails>
                        {item?.children?.map((child) => (
                          <Box
                            sx={{
                              paddingLeft: "30px",

                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className={`${style.accordion_item} ${
                              activeItem === child.display &&
                              style.active_accordion_item
                            }  `}
                            onClick={() =>
                              handleActiveItem(child.to, child.display)
                            }
                          >
                            <Box
                              sx={{
                                display: "flex",

                                alignItems: "center",
                              }}
                            >
                              <Box className={style.accordion_dot}></Box>
                              <Box className={style.accordion_text}>
                                {child.display}
                              </Box>
                            </Box>
                            {child.display === "Extended sidebar" && (
                              <CustomWidthTooltip
                                title="Added in version 3.1"
                                arrow
                                placement="right"
                              >
                                <Box className={style.versionIcon}>V3.0</Box>
                              </CustomWidthTooltip>
                            )}
                            {signedItem.includes(child.display) && (
                              <Box className={style.purpledot}></Box>
                            )}
                          </Box>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Box
                      sx={{
                        paddingLeft: "25px",
                        margin: "10px 0 10px 0",
                      }}
                      className={`${style.sidebar_item} ${
                        activeIndex.includes(item.display) && style.active
                      } `}
                      onClick={() => handleNoChildrenItemClick(item.display)}
                    >
                      <Box className={style.sidebar_icon}>{item.icon}</Box>
                      <Box
                        sx={{ transform: "translate3d(-5px, 0px, 0)" }}
                        className={style.sidebar_text}
                      >
                        {item.display}
                      </Box>
                      {signedItem.includes(item.display) && (
                        <Box
                          sx={{
                            position: "absolute",
                            right: "35px",
                            top: "19px",
                          }}
                          className={style.purpledot}
                        ></Box>
                      )}
                    </Box>
                  )}
                </>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={style.sidebar_footer}>
        <CustomWidthTooltipWhite title="Events Calendar" arrow placement="top">
          <Box className={style.sidebar_footer_item}>
            <MdEditCalendar fontSize="17px"></MdEditCalendar>
          </Box>
        </CustomWidthTooltipWhite>

        <CustomWidthTooltipWhite title="Messenger" arrow placement="top">
          <Box className={style.sidebar_footer_item}>
            <MdOutlineMessage fontSize="17px"></MdOutlineMessage>
            <Box className={style.greendot}></Box>
          </Box>
        </CustomWidthTooltipWhite>
        <CustomWidthTooltipWhite title="Logout" arrow placement="top">
          <Box
            onClick={() => dispatch(loginActions.logout())}
            className={style.sidebar_footer_item}
          >
            <MdOutlinePowerSettingsNew fontSize="17px"></MdOutlinePowerSettingsNew>
          </Box>
        </CustomWidthTooltipWhite>
      </Box>
    </Box>
  );
}
