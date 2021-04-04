import React from 'react';
import { IconButton, Collapse, CardContent, Typography } from '@material-ui/core';
import './learnMore.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const LearnMore = ({ title }) => {
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [expanded, setExpanded] = React.useState(false);
    return (
        <div>
            <div className='learnMoreSize'>
                <IconButton className={expanded ? 'learnMore' : 'learn'}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {title}
                    </Typography>
                </CardContent>
            </Collapse>
        </div>
    );
}

export default LearnMore;