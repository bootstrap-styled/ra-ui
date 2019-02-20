import React from 'react';
import compose from 'recompose/compose';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import withWidth from '@material-ui/core/withWidth';
import IconButton from '@material-ui/core/IconButton';
import ContentCreate from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import { NumberField } from 'react-admin';
import { linkToRecord } from 'ra-core';

// const styles = {
//     root: {
//         margin: '-2px',
//     },
//     gridList: {
//         width: '100%',
//         margin: 0,
//     },
//     tileBar: {
//         background:
//             'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
//     },
//     price: {
//         display: 'inline',
//         fontSize: '1em',
//     },
//     link: {
//         color: '#fff',
//     },
// };

const getColsForWidth = width => {
    if (width === 'xs') return 2;
    if (width === 'sm') return 3;
    if (width === 'md') return 4;
    if (width === 'lg') return 5;
    return 6;
};

const GridList = ({ ids, data, basePath, width }) => (
    <div>
        <MuiGridList
            cellHeight={180}
            cols={getColsForWidth(width)}
        >
            {ids.map(id => (
                <GridListTile key={id}>
                    <img src={data[id].thumbnail} alt="" />
                    <GridListTileBar
                        title={data[id].reference}
                        subtitle={
                            <span>
                                {data[id].width}x{data[id].height},{' '}
                                <NumberField
                                    source="price"
                                    record={data[id]}
                                    color="inherit"
                                    options={{
                                        style: 'currency',
                                        currency: 'USD',
                                    }}
                                />
                            </span>
                        }
                        actionIcon={
                            <IconButton
                                to={linkToRecord(basePath, data[id].id)}
                                component={Link}
                            >
                                <ContentCreate />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </MuiGridList>
    </div>
);

const enhance = compose(
    withWidth(),
);

export default enhance(GridList);
