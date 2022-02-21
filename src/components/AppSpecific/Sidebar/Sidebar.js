import React from 'react'
import Aside from './sidebar-components/aside';

export default function Sidebar({ collapsed, toggled, handleToggleSidebar }) {
    return (
        <Aside
            handleToggleSidebar={handleToggleSidebar}
            collapsed={collapsed}
            toggled={toggled}
        />
    )
}
