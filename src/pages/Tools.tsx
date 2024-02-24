import { Outlet } from "react-router-dom"
import ToolsComponent from "../components/ToolsComponent"


const Tools = () => {

    return (
        <>
        <ToolsComponent />
        <Outlet />
        </>
    )
}

export default Tools