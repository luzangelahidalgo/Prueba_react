import React from "react"
import {
  MenuItem,
  Box,
  ListItem,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IRoute } from "../../../routes/types/IRouter";
import { NavLink } from "react-router-dom";

interface PropsMenu {
  routes: IRoute[];
  title: string;
  menuExpanded: boolean;
  setMenuExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  closeAllMenus: () => void;
}

const ListMenuResponsive = ({
	routes,
	title,
	menuExpanded,
	setMenuExpanded,
	closeAllMenus
}: PropsMenu) => {
	return (
		<>
			<React.Fragment>
				<ListItem
					button
					onClick={() => {
						setMenuExpanded(!menuExpanded)
					}}
					sx={{
						color: "white",
						p: "0px 16px",
						"&:hover": {
							backgroundColor: "#178acc"
						}
					}}
				>
					<ListItemText
						primary={
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									maxHeight: "25px"
								}}
							>
								<Box
									sx={{
										color: "white",
										fontSize: "14px"
									}}
								>
									{title}
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center"
									}}
								>
									{menuExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
								</Box>
							</Box>
						}
					/>
				</ListItem>
				<Collapse in={menuExpanded} sx={{zIndex: 2}} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{routes.map(({to, name}) => (
							<MenuItem
								key={to}
								sx={{
									color: "white",
									minHeight: "10px",
									p: 0,
									"&:hover": {
										backgroundColor: "#178acc"
									}
								}}
								onClick={() => {
									closeAllMenus()
								}}
							>
								<NavLink
									to={to}
									style={{
										textDecoration: "none",
										zIndex: "1",
										color: "white",
										fontSize: "14px",
										padding: "5px 0px 5px 25px",
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										width: "100%"
									}}
								>
									<Box>{name}</Box>
								</NavLink>
							</MenuItem>
						))}
					</List>
				</Collapse>
			</React.Fragment>
		</>
	)
}

export default ListMenuResponsive
