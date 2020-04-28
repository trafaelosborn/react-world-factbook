import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClassIcon from '@material-ui/icons/Class';
import Grid from '@material-ui/core/Grid';
import PublicIcon from '@material-ui/icons/Public'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const iconStyle = {
    fontSize: '50px',
    color: "dodgerBlue",
    marginTop: '10px'
}

const carrotStyle = {
    fontSize: '50px',
    color: "dodgerBlue",
    float: 'right'
}

export default function GeographyReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const cardStyle = {
        margin: '17px'
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dataDetail = props.dataDetail;
    const selectedCountry = props.selectedCountry;
    const geography = dataDetail.countries[selectedCountry.toLowerCase()].data.geography;
    const borderCountries = geography.land_boundaries.border_countries;
    const maritimeClaims = geography.maritime_claims;
    const area = geography.area;
    
    // console.log(maritimeClaims)

    //Maritime Claims//
    let contiguousRender;
    maritimeClaims ? contiguousRender = geography.maritime_claims.contiguous_zone.value + " " + geography.maritime_claims.contiguous_zone.units : contiguousRender = "none"

    let continentalShelf; 
    if (maritimeClaims) {continentalShelf = geography.maritime_claims.continental_shelf};
    let continentalRender;
    continentalShelf ? continentalRender = geography.maritime_claims.continental_shelf.value + " " + geography.maritime_claims.continental_shelf.units : continentalRender = "none"

    let econZone; 
    if (maritimeClaims) {econZone = geography.maritime_claims.exclusive_economic_zone}
    let econRender;
    econZone ? econRender = geography.maritime_claims.continental_shelf.value + " " + geography.maritime_claims.continental_shelf.units : econRender = "none"

    let territorialSea; 
    if(maritimeClaims) {territorialSea = geography.maritime_claims.territorial_sea}
    let seaRender;
    territorialSea ? seaRender = geography.maritime_claims.territorial_sea.value + " " + geography.maritime_claims.territorial_sea.units : seaRender = "none"

    //Border//
    let borderRender;
    borderCountries ? borderRender = borderCountries.map((borderDetail, index) => {
        return (
            <div>
                <ul>
                    <li>{borderDetail.country}: {borderDetail.border_length.value} {borderDetail.border_length.units}</li>
                </ul>
            </div>
        )
    }) : borderRender = "none"

    //area
    let land;
    if (area) {land = area.land};
    let landRender
    land ? landRender = geography.area.land.value + "" + geography.area.land.units : landRender = "none"

    let water;
    if (area) {water = area.water};
    let waterRender
    water ? waterRender = geography.area.water.value+" "+geography.area.water.units : waterRender = "none"

    return (

        <Card className={classes.root} style={cardStyle}>

            <CardContent>
                <h2>Geography</h2>
                <Divider />
                <PublicIcon aria-label="introduction" style={iconStyle}> </PublicIcon>




                <IconButton
                    style={carrotStyle}
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>

            </CardContent>




            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><h4>Location</h4></Typography>
                    <Typography paragraph>
                        <p>{geography.location}</p>
                    </Typography>

                    <Typography paragraph><h4>Geographic Coordinates</h4></Typography>
                    <Typography paragraph>
                        <p>Latitude: {geography.geographic_coordinates.latitude.degrees}  {geography.geographic_coordinates.latitude.minutes} {geography.geographic_coordinates.latitude.hemisphere}</p>
                        <p>Longitude: {geography.geographic_coordinates.longitude.degrees}  {geography.geographic_coordinates.longitude.minutes} {geography.geographic_coordinates.longitude.hemisphere}</p>
                    </Typography>

                    <Typography paragraph><h4>Map References</h4></Typography>
                    <Typography paragraph>
                        <p>{geography.map_references}</p>
                    </Typography>

                    <Typography paragraph><h4>Area</h4></Typography>
                    <Typography paragraph>
                        <p>Comparative: {geography.area.comparative}</p>
                        <p>Total: {geography.area.total.value} {geography.area.total.units}</p>
                <p>Land: {landRender}</p>
                        <p>Water: </p>
                    </Typography>

                    <Typography paragraph><h4>Location</h4></Typography>
                    <Typography paragraph>
                        <p>{geography.location}</p>
                    </Typography>
                    <Typography paragraph><h4>Land Boundaries</h4></Typography>
                    <Typography paragraph>
                        <p>Total: {geography.land_boundaries.total.value} {geography.land_boundaries.total.units}</p>
                    </Typography>
                    <Typography paragraph>
                        <p>Border Countries: {borderRender}</p>
                    </Typography>
                    <Typography paragraph><h4>Coastline:</h4></Typography>
                    <Typography paragraph>

                        <p>{geography.coastline.value} {geography.coastline.units}</p>
                    </Typography>
                    <Typography paragraph><h4>Maritime Claims:</h4></Typography>
                    <Typography paragraph>
                        <p>Contiguous Zone: {contiguousRender}</p>
                        <p>Continental Shelf: {continentalRender}</p>
                        <p>Exclusive Economic Zone: {econRender}</p>
                        <p>Territorial Sea: {seaRender}</p>
                    </Typography>
                    <Typography paragraph><h4>Climate:</h4></Typography>
                <Typography paragraph>{geography.climate}</Typography>
                <Typography paragraph><h4>Terrain:</h4></Typography>
                <Typography paragraph>{geography.terrain}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}