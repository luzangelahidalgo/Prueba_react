import * as React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import { IRoute } from "../../routes/types/IRouter";
import { Tooltip, MenuItem, Box, Container, IconButton, List, Collapse } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/slices";
import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "../../hooks";
import useMenuResponsive from "./Hooks/useMenuResponsive";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Color from "../../Themes/Color";
import ListMenuResponsive from "./components/ListMenuResponsive";
import Logo from "../../assets/ussd_banner_sm_3_0.png";
import useGetLoginData from "../../hooks/useGetLoginData";
import { useMutation } from "@tanstack/react-query";
import PostServices from "../../services/PostServices";
import { doLogout } from "../../services/actions";

interface Props {
  menuMantenedores: IRoute[];
  menuConfiguraciones: IRoute[];
}

const darkTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: Color.primary
		}
	}
})

const ResponsiveAppBar = ({}: Props) => {
/* 	const dispatch = useAppDispatch()
	let navigate = useNavigate()
	const {isAuthenticated} = useCheckAuth()
	
		const handleLogout = () => {
			console.log(currentUser);
			PostServices(doLogout(
				{
					user: currentUser?.token
				}
			)).then(data =>{
				dispatch(logout())
				navigate("/login")
			});
		
		} */
	
	const {
		menuExpanded,
		menuMantenedoresExpanded,
		menuConfiguracionesExpanded,
		handleMenuExpanded,
		handleMenuMantenedoresExpanded,
		handleMenuConfiguracionesExpanded,
		closeAllMenus
	} = useMenuResponsive()


	const AuthMenuItems = [
		{
			id: 1,
			Component: (
				<NavLink
					to={"/home"}
					style={{textDecoration: "none", color: "white", fontSize: "14px"}}
					onClick={closeAllMenus}
				>
					<MenuItem
						sx={{
							"&:hover": {
								backgroundColor: "#178acc"
							}
						}}
					>
						 Movistar
					</MenuItem>
				</NavLink>
			)
		},
		{
			id: 2,
			Component: (
				<ListMenuResponsive
					routes={menuMantenedores}
					title="Mantenedores"
					menuExpanded={menuMantenedoresExpanded}
					setMenuExpanded={handleMenuMantenedoresExpanded}
					closeAllMenus={closeAllMenus}
				/>
			)
		},
		{
			id: 3,
			Component: (
				<Box>
					<ListMenuResponsive
						routes={menuConfiguraciones}
						title="Configuraciones"
						menuExpanded={menuConfiguracionesExpanded}
						setMenuExpanded={handleMenuConfiguracionesExpanded}
						closeAllMenus={closeAllMenus}
					/>
				</Box>
			)
		}		
	]

	return (
		<Box
			sx={{
				display: {sm: "block", md: "none"}
			}}
		>
			<Container maxWidth="lg">
				<ThemeProvider theme={darkTheme}>
					<Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								height: "100%",
								bgcolor: Color.primary,
								padding: "0 15px",
								margin: "0px - 15px",
								borderRadius: menuExpanded ? "4px 4px 0px 0px" : "4px"
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center",
									height: "100%",
									bgcolor: "transparent",
									ml: 1
								}}
							>
								<NavLink
									to={"/home"}
									style={{
										textDecoration: "none",
										color: "white",
										fontSize: "14px"
									}}
								>
									<img
										src={Logo}
										alt="Logo"
										width="37.99"
										height="37.99"
									/>
								</NavLink>
								<Box sx={{color: "white", fontSize: "14px", p: "15px"}}>{"|"}</Box>
							</Box>
						</Box>
							<Collapse
								in={menuExpanded}
								sx={{
									borderTop: "1px solid #178acc"
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										width: "100%",
										backgroundColor: Color.primary,
										borderRadius: "0px 0px 4px 4px"
									}}
								>
									<List
										sx={{
											width: "100%",
											bgcolor: "transparent",
											position: "relative",
											overflow: "hidden",
											maxHeight: "auto"
										}}
									>
										{AuthMenuItems.map((item) => (
											<Box
												key={item.id}
												sx={{
													minHeight: "10px"
												}}
											>
												{item.Component}
											</Box>
										))}
									</List>
								</Box>
							</Collapse>
					</Box>
				</ThemeProvider>
			</Container>
		</Box>
	)
}
export default ResponsiveAppBar
