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
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import GroupIcon from '@material-ui/icons/Group';

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

const cardStyle = {
    margin: '17px',
}

const carrotStyle = {
    fontSize: '50px',
    color: "dodgerBlue",
    float: 'right'
}


export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dataDetail = props.dataDetail;
    const selectedCountry = props.selectedCountry;
    const people = dataDetail.countries[selectedCountry.toLowerCase()].data.people;
    const population = people.population;
    const nationality = people.nationality;
    const adultObesity = people.adult_obesity;
    const ageStructure = people.age_structure;
    const birthRate = people.birth_rate;
    const contraceptive = people.contraceptive_prevalence_rate;
    const deathRate = people.death_rate;
    const dependency = people.dependency_ratios.ratios;
    const drinkingWater = people.drinking_water_source;
    const edExpend = people.education_expenditures;
    const ethnicGroups = people.ethnic_groups;
    const bedDensity = people.hospital_bed_density;
    const infantMort = people.infant_mortality_rate;
    const languages = people.languages;
    const lifeExpectancy = people.life_expectancy_at_birth;
    const urban = people.major_urban_areas;
    const maternalMort = people.maternal_portality_rate;
    const medianAge = people.median_age;
    const motherMean = people.mothers_mean_age_at_first_birth;
    const netMigration = people.net_migration;
    const physicians = people.physicians_density;
    const popDistro = people.population_distribution;
    const popGrowth = people.population_growth_rate;
    const religions = people.religions;
    const sanitation = people.sanitation_facility_access;
    const schoolLife = people.school_life_expectancy;
    const sexRatio = people.sex_ratio;
    const fertility = people.total_fertility_rate;
    const skinnyKids = people.underweight_children;
    const urbanization = people.urbanization;
    const youthUnemployment = people.youth_unemployment;
    const hivAids = people.hiv_aids

    let ethnicityRender;
     ethnicGroups.ethnicity ? ethnicityRender = ethnicGroups.ethnicity.map((ethnicityDetail, index) => {
        return (
            <div>
                <ul>
        <li>{ethnicityDetail.name}: {ethnicityDetail.percent}%</li>
                </ul>
            </div>
        )
    }) : ethnicityRender = null

    let languageRender;
     languages ? languageRender = people.languages.language.map((languageDetail, index) => {
        return (
            <div>
                <ul>
        <li>{languageDetail.name}: {languageDetail.percent}%</li>
                </ul>
            </div>
        )
    }) : languageRender = null

    let religionRender;
     religions ? religionRender = religions.religion.map((religionDetail, index) => {
        return (
            <div>
                <ul>
        <li>{religionDetail.name}: {religionDetail.percent}%</li>
                </ul>
            </div>
        )
    }) : religionRender = null



    return (

        <Card className={classes.root} style={cardStyle}>

            <CardContent>
                <h2 >People and Society</h2>
                <Divider />
                <GroupIcon aria-label="people and society" style={iconStyle}> </GroupIcon>



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
                    
                    <div> { !population ? null :
                    <Typography paragraph><h4>Population as of {population.date}</h4>
                         <p>Total: {population.total}</p>
                        <p>Global Rank: {population.global_rank}</p>
                    </Typography>                  
                    }
                    </div>

                    <div> { !nationality ? null :                    
                    <Typography paragraph>
                        <h4>Nationality</h4>
                        <p>Noun: {people.nationality.noun}</p>
                        <p>Adjective: {people.nationality.adjective}</p>
                        </Typography>
                    }             
                    </div>

                    <div> { !ethnicGroups ? null :                    
                    <Typography paragraph>
                        <h4>Ethnic Groups as of {ethnicGroups.date}</h4>
                        <p>{ethnicityRender}</p>
                        </Typography>
                    }             
                    </div>

                    <div> { !languages ? null :                    
                    <Typography paragraph>
                        <h4>Languages:</h4>
                        <p>{languageRender}</p>
                        </Typography>
                    }             
                    </div>

                    <div> { !religions ? null :                    
                    <Typography paragraph>
                        <h4>Religions:</h4>
                        <p>{religionRender}</p>
                        </Typography>
                    }             
                    </div>

                    {/* FIX */}
                    {/* <div> { !ageStructure ? null :
                    <Typography paragraph><h4>Age Structure as of {ageStructure.date}</h4>
                         <p>0-14: {}% ({ageStructure.male} males/{ageStructure.female} females)</p>
                        <p>Global Rank: {population.global_rank}</p>
                    </Typography>                  
                    }
                    </div> */}

                    <div> { !dependency ? null :                    
                    <Typography paragraph>
                        <h4>Dependency Ratios:</h4>
                        <p>Elderly Dependency Ratio: {dependency.elderly_dependency_ratio.value} {dependency.elderly_dependency_ratio.units}</p>
                        <p>Potential Support Ratio: {dependency.potential_support_ratio.value} {dependency.potential_support_ratio.units}</p>
                        <p>Total Dependency Ratio: {dependency.total_dependency_ratio.value} {dependency.total_dependency_ratio.units}</p>
                        <p>Youth Dependency Ratio: {dependency.youth_dependency_ratio.value} {dependency.youth_dependency_ratio.units}</p>
                        </Typography>
                    }             
                    </div>

                </CardContent>
            </Collapse>
        </Card>
    );
}