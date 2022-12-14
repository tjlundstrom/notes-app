import * as React from 'react';
import styled from '@emotion/styled';

const classesPrefix = 'main-window';

const classes = {
    primary: `${classesPrefix}-primary`,
};

const StyledDiv = styled("div")(({ theme }) => {
    return {
        [`&.${classes.primary}`]: {
            display: 'flex',
            alignItems: 'flex-end',
            flex: 1,
            backgroundColor: 'blue'
        }
    }
});

const MainWindow = () => {
    return (
        <StyledDiv className={classes.primary}>
            <div>Main Window</div>
            <div>Test</div>
        </StyledDiv>
    )
}

export default MainWindow;