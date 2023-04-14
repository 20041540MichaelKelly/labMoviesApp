import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { getGenres } from "../../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../spinner';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from '@mui/material/Rating';

const styles = {
    root: {
        maxWidth: 345,
    },
    media: { height: 300 },

    formControl: {
        margin: 1,
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
};

export default function FilterTvShowCard(props) {
    const { data, error, isLoading, isError } = useQuery("genres", getGenres);
    const [vote, setVote] = React.useState('');
    const isoCountryCodes = ["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba", "be", "bg", "bh", "bm", "bi", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]
    const listOfCountries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Channel Islands","Chile","China","Colombia","Comoros","Congo","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","DR Congo","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Faeroe Islands","Finland","France","French Guiana","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mayotte","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Réunion","Romania","Russia","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","State of Palestine","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Bahamas","Timor-Leste","Togo","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Western Sahara","Yemen","Zambia","Zimbabwe"]
    const listOfIso1CountryCodes = ["AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BH","BS","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"];
    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleUserImput = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e, props) => {
        handleUserImput(e, "title", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleUserImput(e, "genre", e.target.value);
    };

    const handleLanguageChange = (e) => {
        handleUserImput(e, "language", e.target.value);
    };

    const handleVoteChange = (e, props) => {
        handleUserImput(e, "vote", e.target.value);
        setVote(e.target.value);
    };

    return (
        <>
            <Card sx={styles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h1">
                        <FilterAltIcon fontSize="large" />
                        Filter the TV Shows.
                    </Typography>
                    <TextField
                        sx={styles.formControl}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        value={props.titleFilter}
                        variant="filled"
                        onChange={handleTextChange}
                    />
                    <FormControl sx={styles.formControl}>
                        <InputLabel id="genre-label">Genre</InputLabel>
                        <Select
                            labelId="genre-label"
                            id="genre-select"
                            variant="filled"
                            value={props.genreFilter}
                            onChange={handleGenreChange}
                        >
                            {genres.map((genre) => {
                                return (
                                    <MenuItem key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <FormControl sx={styles.formControl}>
                        <InputLabel sx={{ mt: 12 }} id="language-label">Language</InputLabel>
                        <Select
                            labelId="language-label"
                            id="language-select"
                            variant="filled"
                            value={props.languageFilter}
                            onChange={handleLanguageChange}
                            sx={{ mt: 4 }}
                        >
                            {isoCountryCodes.map((code) => {
                                return (
                                    <MenuItem key={code} value={code}>
                                        {code}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <FormControl sx={styles.formControl}>
                        <Typography sx={{ pt: 2 }} component="legend">Vote</Typography>
                        <Rating
                            name="simple-controlled"
                            value={vote}
                            max={10}
                            onChange={handleVoteChange}
                        />
                    </FormControl>
                </CardContent>
            </Card >
            <Card sx={styles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h1">
                        <SortIcon fontSize="large" />
                        Sort the TV Shows.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}