import * as React from 'react';
import styled from '@emotion/styled';

const classesPrefix = 'menu';

const classes = {
    primary: `${classesPrefix}-primary`,
    bar: `${classesPrefix}-bar`,
};

const StyledDiv = styled("div")(({ theme }) => {
    return {
        [`&.${classes.primary}`]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexShrink: 0,
            backgroundColor: 'orange'
        },
        [`& .${classes.bar}`]: {
            height: "100%",
            width: "20px",
            backgroundColor: "bisque",
            position: "relative",
            left: "100%",
            cursor: "ew-resize"
        }
    }
});

const DEFAULT_WIDTH = 300;
const MIN_WIDTH= 50;
const MAX_WDITH=500;

const Menu = () => {
    const [menuWidth, setMenuWidth] = React.useState(DEFAULT_WIDTH);

    const handleMouseDown = e => {
        document.addEventListener("mouseup", handleMouseUp, true);
        document.addEventListener("mousemove", handleMouseMove, true);
    }
    
    const handleMouseUp = e => {
        document.removeEventListener("mouseup", handleMouseUp, true);
        document.removeEventListener("mousemove", handleMouseMove, true);
    }
    
    const handleMouseMove = React.useCallback(e => {
        const newWidth = e.clientX - document.body.offsetLeft;
        if (newWidth >= MIN_WIDTH && newWidth <= MAX_WDITH) {
            setMenuWidth(newWidth);
            console.log(newWidth);
        }
    }, []);

    return (
        <StyledDiv className={classes.primary} style={{width: menuWidth}}>
            <div onMouseDown={e => handleMouseDown(e)} className={classes.bar}>

            </div>
        </StyledDiv>
    )
}

export default Menu;