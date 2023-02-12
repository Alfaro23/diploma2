import React from 'react';
import { GridColumnMenu, GridFilterMenuItem, HideGridColMenuItem } from '@mui/x-data-grid';

const CustomColumnMenu = (props) => {

    const {hideMenu, currentColumn, open} = props;


    return (
        <GridColumnMenu 
            hideMenu={hideMenu}
            currentColumn={currentColumn}
            open={open}
        >
            <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
            <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
        </GridColumnMenu>
    )
}

export default CustomColumnMenu