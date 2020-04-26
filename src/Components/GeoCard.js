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

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const cardStyle = {
        margin: '17px'
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dataDetail = props.dataDetail
    const selectedCountry = props.selectedCountry
    console.log(props)
    return (

        <Card className={classes.root} style={cardStyle}>

            <CardContent>
                <h2>Geography</h2>
                <Divider />
                <PublicIcon aria-label="introduction" style={iconStyle}> </PublicIcon>




                <IconButton 
                    style = {carrotStyle}
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
                        <p>{dataDetail.countries[selectedCountry.toLowerCase()].data.geography.location}</p>
                    </Typography>

                    <Typography paragraph><h4>Geographic Coordinates</h4></Typography>
                    <Typography paragraph>
                        <p>Latitude: {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.geographic_coordinates.latitude.degrees}  {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.geographic_coordinates.latitude.minutes} {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.geographic_coordinates.latitude.hemisphere}</p>
                        <p>Longitude: {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.geographic_coordinates.longitude.degrees}  {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.geographic_coordinates.longitude.minutes} {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.geographic_coordinates.longitude.hemisphere}</p>
                    </Typography>

                    <Typography paragraph><h4>Map References</h4></Typography>
                    <Typography paragraph>
                        <p>{dataDetail.countries[selectedCountry.toLowerCase()].data.geography.map_references}</p>
                    </Typography>

                    <Typography paragraph><h4>Area</h4></Typography>
                    <Typography paragraph>
                        <p>Comparative: {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.comparative}</p>
                        <p>Total: {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.total.value} {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.total.units}</p>
                        <p>Land: {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.land.value} {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.land.units}</p>
                        <p>Water: {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.water.value} {dataDetail.countries[selectedCountry.toLowerCase()].data.geography.area.water.units}</p>
                    </Typography>
                     
                    <Typography paragraph><h4>Location</h4></Typography>
                    <Typography paragraph>
                        <p>{dataDetail.countries[selectedCountry.toLowerCase()].data.geography.location}</p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}