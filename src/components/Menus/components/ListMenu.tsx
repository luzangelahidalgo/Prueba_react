import {
  Button,
  Grow,
  Popper,
  ClickAwayListener,
  MenuList,
  Paper,
  MenuItem,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IRoute } from "../../../routes/types/IRouter";
import useMenu from "../Hooks/useMenu";
import { NavLink } from "react-router-dom";

interface PropsMenu {
  routes: IRoute[];
  title: string;
}

const ListMenu = ({ routes, title }: PropsMenu) => {
  const { handleToggle, handleClose, handleListKeyDown, anchorRef, open } =
    useMenu();
  return (
    <>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{
          textDecoration: "none",
          color: "white",
          marginLeft: "10px",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 400,
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {title}
      </Button>
      <Popper
        sx={{ color: "white", position: "absolute", zIndex: '4' }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                sx={{
                  p: 0,
                  mt: 2,
                }}
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {routes.map(({ to, name }) => (
                    <MenuItem
                      key={to}
                      sx={{
                        p: 0,
                        ":hover": {
                          backgroundColor: "#2fa4e7",
                        },
                      }}
                    >
                      <NavLink
                        to={to}
                        style={{
                          // if hover color white
                          color: "black",
                          textDecoration: "none",
                          zIndex: "1",
                          width: "100%",
                        }}
                        onClick={handleClose}
                      >
                        <Box
                          sx={{
                            fontSize: "14px",
                            padding: "3px 20px",
                            ":hover": {
                              color: "#fff",
                            },
                          }}
                        >{name}</Box>
                      </NavLink>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default ListMenu;
