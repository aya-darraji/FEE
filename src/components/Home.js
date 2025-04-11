import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, Link, MenuItem, Typography } from "@material-ui/core";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import deals from "../assets/deals.png";
import RecentInOxus from "./home-component/recent";
import ExploreCar from "./exploreCar";
import Brands from './home-component/brands';
import SignUp from './home-component/signUp';
import LatestNews from './home-component/latestNews';
import CheckOut from './home-component/CheckOut';
import SedanInOxus from './home-component/sedanInOxus';
import SUVInOxus from './home-component/suvInOxus';
import LuxuryInOxus from './home-component/luxuryInOxus';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { InventoryContext } from "../Context/InventoryContext/inventoryContext";
import { WholeContext } from "../App";


  
const useStyles = makeStyles((theme) => ({
   formControlBtn: {
      margin: theme.spacing(3),
      minWidth: 170,
      minHeight: 50,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
   diffPaper: {
      margin: theme.spacing(2),
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
   },
}));
// Définir les keyframes CSS dans une balise style globale
const styles = {
   fadeInUp: {
     animation: "fadeInUp 1s ease-out forwards",
     opacity: 0,
   },
   fadeInUpDelayed: {
     animation: "fadeInUp 1.5s ease-out forwards",
     opacity: 0,
   },
   keyframes: `
     @keyframes fadeInUp {
       from {
         opacity: 0;
         transform: translateY(30px);
       }
       to {
         opacity: 1;
         transform: translateY(0);
       }
     }
   `,
 };

const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 3 },
   { width: 1260, itemsToShow: 3 },
];

export default function Home() {
   const classes = useStyles();
   const myStyle = {
      height: "100",
      width: "100",
   };


   const [ make, setMake ] = useState('Toyota');
   const [ model, setModel ] = useState('RAV4');
   const [ trim, setTrim ] = useState('XLE'); 
   const [ year, setYear ] = useState(2024);
      // console.log(make, model, trim, year);
   const {setOpenAdvSch} = useContext(WholeContext)

   const settings = {
      infinite: true,
      lazyload: true,
      speed: 300,
      slideToShow: 3,
      centerMode: true,
      centerPadding: 0,
   }

   return (
      <React.Fragment>
      <InventoryContext.Provider 
            value={{
               make, setMake, 
               model, setModel,
               trim, setTrim,
               year, setYear,
            }}>
         <Navbar />
        <Navbar />
        <>
  {/* Injecter les keyframes dans le head */}
  <style>{styles.keyframes}</style>

  <Box
    bgcolor="primary.main"
    style={{
      height: "600px",
      marginTop: "60px",
      color: "#fff",
      backgroundImage: `url('https://ideogram.ai/g/x6mmaqQmR5Sf3ci8CeUY7g/2'), url('https://ideogram.ai/g/x6mmaqQmR5Sf3ci8CeUY7g/0')`,
      backgroundPosition: "left center, right center",
      backgroundSize: "50% 100%, 50% 100%", // Assurez-vous que chaque image occupe 50% de la largeur
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={10} sm={10}>
          {/* Titre avec animation */}
          <Typography
            variant="h2"
            align="center"
            fontWeight="fontWeightBold"
            pt={3}
            sx={styles.fadeInUp}
          >
            <br />
            Find the car of your dreams in just a few clicks!
            <br />
            <br />
          </Typography>

          {/* Paragraphe avec animation plus lente */}
          <Typography
            variant="body2"
            align="center"
            style={{
              ...styles.fadeInUpDelayed,
              fontSize: "18px",
              lineHeight: "1.8",
              marginTop: "8px",
            }}
          >
            Welcome to our online car sales platform your go-to destination to discover a wide range of new and used vehicles. Whether you're looking for a budget-friendly city car, a family SUV, or a luxury vehicle, we've got exactly what you need. Compare models, explore options, and contact sellers with ease.
            Our platform also allows agencies to easily showcase all their vehicles and simplify the sales process through a QR code system, providing quick access to all vehicle information.
            Sell with confidence, thanks to reliable listings and personalized support every step of the way.
          </Typography>
        </Grid>
      </Grid>

      <Box>
        <ExploreCar />
      </Box>
      <Box p={5}></Box>
      <Box p={5}></Box>
    </Container>
  </Box>
</>


         <Box p={2} mt={7}>
            <Container>
               <Paper elevation={2}>
                  <Grid container>
                     <Grid item xs={12} sm={12}>
                        <Typography>
                           <Box pl={5} pt={2} fontSize="h5.fontSize">
                              Find Your Car
                              <Box fontSize="subtitle1.fontSize">(Advanced Search)</Box>
                           </Box>
                        </Typography>
                     </Grid>
                     <Grid item xs={12} sm>
                     <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Make</InputLabel>
                        <Select
                        value={make}
                        onChange={(make) => { setMake(make.target.value) }}
                        label="Make"
                     >
                        <MenuItem value={"Alfa Romeo"}>Alfa Romeo</MenuItem>
                        <MenuItem value={"Audi"}>Audi</MenuItem>
                        <MenuItem value={"BAIC"}>BAIC</MenuItem>
                        <MenuItem value={"BMW"}>BMW</MenuItem>
                        <MenuItem value={"BYD"}>BYD</MenuItem>
                        <MenuItem value={"Chery"}>Chery</MenuItem>
                        <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
                        <MenuItem value={"Citroën"}>Citroën</MenuItem>
                        <MenuItem value={"Dacia"}>Dacia</MenuItem>
                        <MenuItem value={"DFSK"}>DFSK</MenuItem>
                        <MenuItem value={"Fiat"}>Fiat</MenuItem>
                        <MenuItem value={"Ford"}>Ford</MenuItem>
                        <MenuItem value={"Geely"}>Geely</MenuItem>
                        <MenuItem value={"Great Wall"}>Great Wall</MenuItem>
                        <MenuItem value={"Honda"}>Honda</MenuItem>
                        <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
                        <MenuItem value={"Isuzu"}>Isuzu</MenuItem>
                        <MenuItem value={"Jac"}>Jac</MenuItem>
                        <MenuItem value={"Jeep"}>Jeep</MenuItem>
                        <MenuItem value={"Kia"}>Kia</MenuItem>
                        <MenuItem value={"Lada"}>Lada</MenuItem>
                        <MenuItem value={"Land Rover"}>Land Rover</MenuItem>
                        <MenuItem value={"Mazda"}>Mazda</MenuItem>
                        <MenuItem value={"Mercedes-Benz"}>Mercedes-Benz</MenuItem>
                        <MenuItem value={"Mini"}>Mini</MenuItem>
                        <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
                        <MenuItem value={"Nissan"}>Nissan</MenuItem>
                        <MenuItem value={"Opel"}>Opel</MenuItem>
                        <MenuItem value={"Peugeot"}>Peugeot</MenuItem>
                        <MenuItem value={"Porsche"}>Porsche</MenuItem>
                        <MenuItem value={"Renault"}>Renault</MenuItem>
                        <MenuItem value={"Seat"}>Seat</MenuItem>
                        <MenuItem value={"Skoda"}>Skoda</MenuItem>
                        <MenuItem value={"Subaru"}>Subaru</MenuItem>
                        <MenuItem value={"Suzuki"}>Suzuki</MenuItem>
                        <MenuItem value={"Tata"}>Tata</MenuItem>
                        <MenuItem value={"Toyota"}>Toyota</MenuItem>
                        <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
                        <MenuItem value={"Volvo"}>Volvo</MenuItem>
                        <MenuItem value={"Autre"}>Autre</MenuItem>
                     </Select>

                     </FormControl>
                     </Grid>
                     <Grid item xs={12} sm>
                     <FormControl variant="outlined" className={classes.formControl}>
                     <InputLabel>Model</InputLabel>
                     <Select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        label="Model"
                     >
                        {/* Hyundai */}
                        <MenuItem value="Grand i10">Grand i10</MenuItem>
                        <MenuItem value="i20">i20</MenuItem>
                        <MenuItem value="Santa Fe">Santa Fe</MenuItem>
                        <MenuItem value="Palisade">Palisade</MenuItem>

                        {/* Kia */}
                        <MenuItem value="Picanto">Picanto</MenuItem>
                        <MenuItem value="Rio">Rio</MenuItem>
                        <MenuItem value="Stonic">Stonic</MenuItem>

                        {/* Toyota */}
                        <MenuItem value="Agya">Agya</MenuItem>
                        <MenuItem value="Hiace">Hiace</MenuItem>
                        <MenuItem value="RAV4">RAV4</MenuItem>

                        {/* Peugeot */}
                        <MenuItem value="208">208</MenuItem>
                        <MenuItem value="Partner">Partner</MenuItem>
                        <MenuItem value="Landtrek">Landtrek</MenuItem>

                        {/* Renault */}
                        <MenuItem value="Clio">Clio</MenuItem>
                        <MenuItem value="Kwid">Kwid</MenuItem>
                        <MenuItem value="Express Van">Express Van</MenuItem>

                        {/* Suzuki */}
                        <MenuItem value="Celerio">Celerio</MenuItem>
                        <MenuItem value="Swift">Swift</MenuItem>
                        <MenuItem value="Dzire">Dzire</MenuItem>

                        {/* Isuzu */}
                        <MenuItem value="D-Max">D-MaxD-Max,</MenuItem>

                        {/* Mitsubishi */}
                        <MenuItem value="Mirage">Mirage</MenuItem>
                        <MenuItem value="Attrage">Attrage</MenuItem>
                        <MenuItem value="Eclipse Cross">Eclipse Cross</MenuItem>

                        {/* Fiat */}
                        <MenuItem value="Fiorino">Fiorino</MenuItem>
                        <MenuItem value="Panda">Panda</MenuItem>

                        {/* Volkswagen */}
                        <MenuItem value="Virtus">Virtus</MenuItem>

                        {/* Mahindra */}
                        <MenuItem value="KUV 100">KUV 100</MenuItem>
                        <MenuItem value="XUV 300">XUV 300</MenuItem>

                        {/* Skoda */}
                        <MenuItem value="Fabia">Fabia</MenuItem>
                        <MenuItem value="Kamiq">Kamiq</MenuItem>

                        {/* Seat */}
                        <MenuItem value="Ibiza">Ibiza</MenuItem>
                        <MenuItem value="Arona">Arona</MenuItem>

                        {/* Chery */}
                        <MenuItem value="Tiggo 1X">Tiggo 1X</MenuItem>
                        <MenuItem value="QQ">QQ</MenuItem>
                        <MenuItem value="Tiggo">Tiggo</MenuItem>

                        {/* Honda */}
                        <MenuItem value="City">City</MenuItem>
                        <MenuItem value="CR-V">CR-V</MenuItem>

                        {/* Nissan */}
                        <MenuItem value="Sunny">Sunny</MenuItem>
                        <MenuItem value="Qashqai">Qashqai</MenuItem>

                        {/* Ford */}
                        <MenuItem value="Focus">Focus</MenuItem>
                        <MenuItem value="Ranger">Ranger</MenuItem>

                        {/* Opel */}
                        <MenuItem value="Corsa">Corsa</MenuItem>
                        <MenuItem value="Astra">Astra</MenuItem>

                        {/* Mercedes-Benz */}
                        <MenuItem value="Classe A">Classe A</MenuItem>
                        <MenuItem value="GLA">GLA</MenuItem>

                        {/* BMW */}
                        <MenuItem value="Série 1">Série 1</MenuItem>
                        <MenuItem value="Série 3">Série 3</MenuItem>

                        {/* Audi */}
                        <MenuItem value="A3">A3</MenuItem>
                        <MenuItem value="Q3">Q3</MenuItem>

                        {/* Porsche */}
                        <MenuItem value="Cayenne">Cayenne</MenuItem>
                        <MenuItem value="Macan">Macan</MenuItem>

                        {/* Volvo */}
                        <MenuItem value="XC40">XC40</MenuItem>
                        <MenuItem value="XC60">XC60</MenuItem>

                        {/* Land Rover */}
                        <MenuItem value="Discovery Sport">Discovery Sport</MenuItem>
                        <MenuItem value="Range Rover Evoque">Range Rover Evoque</MenuItem>

                        {/* Jeep */}
                        <MenuItem value="Renegade">Renegade</MenuItem>
                        <MenuItem value="Compass">Compass</MenuItem>

                        {/* Dacia */}
                        <MenuItem value="Sandero">Sandero</MenuItem>
                        <MenuItem value="Duster">Duster</MenuItem>

                        {/* Citroën */}
                        <MenuItem value="C3">C3</MenuItem>
                        <MenuItem value="C4">C4</MenuItem>

                        {/* Alfa Romeo */}
                        <MenuItem value="Giulia">Giulia</MenuItem>
                        <MenuItem value="Stelvio">Stelvio</MenuItem>

                        {/* BYD */}
                        <MenuItem value="F3">F3</MenuItem>
                        <MenuItem value="S6">S6</MenuItem>

                        {/* BAIC */}
                        <MenuItem value="X25">X25</MenuItem>
                        <MenuItem value="D20">D20</MenuItem>

                        {/* DFSK */}
                        <MenuItem value="Glory 580">Glory 580</MenuItem>
                        <MenuItem value="K01">K01</MenuItem>

                        {/* Geely */}
                        <MenuItem value="Emgrand 7">Emgrand 7</MenuItem>
                        <MenuItem value="Coolray">Coolray</MenuItem>

                        {/* Great Wall */}
                        <MenuItem value="Wingle 5">Wingle 5</MenuItem>
                        <MenuItem value="Haval H6">Haval H6</MenuItem>

                        {/* Jac */}
                        <MenuItem value="J4">J4</MenuItem>
                        <MenuItem value="S3">S3</MenuItem>

                        {/* Tata */}
                        <MenuItem value="Indica">Indica</MenuItem>
                        <MenuItem value="Safari">Safari</MenuItem>

                        {/* Lada */}
                        <MenuItem value="Niva">Niva</MenuItem>
                        <MenuItem value="Granta">Granta</MenuItem>

                        {/* Mini */}
                        <MenuItem value="Cooper">Cooper</MenuItem>
                        <MenuItem value="Countryman">Countryman</MenuItem>

                        {/* Subaru */}
                        <MenuItem value="Impreza">Impreza</MenuItem>
                        <MenuItem value="Forester">Forester</MenuItem>

                        {/* Chevrolet */}
                        <MenuItem value="Aveo">Aveo</MenuItem>
                        <MenuItem value="Spark">Spark</MenuItem>

                        {/* Mazda */}
                        <MenuItem value="Mazda 3">Mazda 3</MenuItem>
                        <MenuItem value="CX-5">CX-5</MenuItem>

                        {/* Autre */}
                        <MenuItem value="Autre">Autre modèle</MenuItem>
                     </Select>
                     </FormControl>

                     </Grid>
                     <Grid item xs={12} sm>
                     <FormControl variant="outlined" className={classes.formControl}>
                     <InputLabel>Finition</InputLabel>
                     <Select
                        value={trim}
                        onChange={(event) => setTrim(event.target.value)}
                        label="Finition"
                     >
                        XLE
                        <MenuItem value="XLE">XLE</MenuItem>
                        <MenuItem value="Base">Base</MenuItem>
                        <MenuItem value="Confort">Confort</MenuItem>
                        <MenuItem value="Luxe">Luxe</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Ambition">Ambition</MenuItem>
                        <MenuItem value="Trend">Trend</MenuItem>
                        <MenuItem value="Style">Style</MenuItem>
                        <MenuItem value="Elegance">Elegance</MenuItem>
                        <MenuItem value="Exclusive">Exclusive</MenuItem>
                        <MenuItem value="GT">GT</MenuItem>
                        <MenuItem value="GT-Line">GT-Line</MenuItem>
                        <MenuItem value="Sport">Sport</MenuItem>
                        <MenuItem value="R-Line">R-Line</MenuItem>
                        <MenuItem value="AMG">AMG</MenuItem>
                        <MenuItem value="M Sport">M Sport</MenuItem>
                        <MenuItem value="RS">RS</MenuItem>
                        <MenuItem value="ST-Line">ST-Line</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Executive">Executive</MenuItem>
                        <MenuItem value="Premium">Premium</MenuItem>
                        <MenuItem value="Prestige">Prestige</MenuItem>
                        <MenuItem value="Ultimate">Ultimate</MenuItem>
                        <MenuItem value="Populaire">Populaire</MenuItem>
                        <MenuItem value="Autre">Autre</MenuItem>
                     </Select>
                     </FormControl>

                     </Grid>
                     <Grid item xs={12} sm>
                     <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                        <Select
                           labelId="demo-simple-select-outlined-label"
                           id="demo-simple-select-outlined"
                           value={year}
                           onChange={(event) => setYear(event.target.value)}
                           label="Year"
                        >
                           <MenuItem value={2019}>2019</MenuItem>
                           <MenuItem value={2020}>2020</MenuItem>
                           <MenuItem value={2021}>2021</MenuItem>
                           <MenuItem value={2022}>2022</MenuItem>
                           <MenuItem value={2023}>2023</MenuItem>
                           <MenuItem value={2024}>2024</MenuItem>
                           <MenuItem value={2025}>2025</MenuItem>
                        </Select>
                     </FormControl>
                     </Grid>

                     
                        <Grid item xs={12} sm>
                           <NavLink to="/Inventory">
                           <Button
                              onClick={() => setOpenAdvSch(true)}
                              type='submit'
                              variant="contained" 
                              style={{height: 50, width: 150, padding: "2px", margin:"10px" }}
                              color="primary"  >
                              Search
                           </Button>
                           </NavLink>
                        
                        </Grid>
                     
                  </Grid>
               </Paper>
            </Container>
         </Box>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               What Makes Us Different ?
            </Box>
         </Typography>
         <Box m={2}>
            <Container>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                     <Paper elevation={3} className={classes.diffPaper}>
                        <Card className={classes.root}>
                           <div>
                              <CardMedia
                                 component="img"
                                 alt="Best Deals In Town"
                                 height="180"
                                 image={deals}
                                 title="Best Deals In Town"
                              />
                              <CardContent>
                                 <Typography gutterBottom align="center" variant="h5" component="h2">
                                    Best Deals In Town
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="textSecondary"
                                    component="p"
                                 >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </div>
                        </Card>
                     </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Paper elevation={3} className={classes.diffPaper}>
                        <Card className={classes.root}>
                           <div>
                              <CardMedia
                                 component="img"
                                 alt="Best Deals In Town"
                                 height="180"
                                 image={deals}
                                 title="Best Deals In Town"
                              />
                              <CardContent>
                                 <Typography gutterBottom align="center" variant="h5" component="h2">
                                    Exports Experts
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="textSecondary"
                                    component="p"
                                 >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </div>
                        </Card>
                     </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Paper elevation={3} className={classes.diffPaper}>
                        <Card className={classes.root}>
                           <div>
                              <CardMedia
                                 component="img"
                                 alt="Extensive Support"
                                 height="180"
                                 image={deals}
                                 title="Extensive Support"
                              />
                              <CardContent>
                                 <Typography gutterBottom align="center" variant="h5" component="h2">
                                    Extensive Support
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="textSecondary"
                                    component="p"
                                 >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </div>
                        </Card>
                     </Paper>
                  </Grid>
               </Grid>
            </Container>
         </Box>
         <Box>
            <Container>
               <Paper elevation={4} style={{ backgroundColor: '#ddd' }}>
                  <Box m={7} pt={4}>
                     <Typography gutterBottom align="center" variant="h5" component="h2">
                        About Us
                     </Typography>
                  </Box>
                  <Box m={4}>
                     <Typography
                        variant="body1"
                        align="center"
                        color="textSecondary"
                        component="p"
                     >
                      Our car sales platform offers a complete solution for buying and selling new vehicles. Agencies can easily publish,
                     manage, and update their listings. Each car is linked to a unique QR code, allowing customers to instantly access all relevant information such as technical specifications, price, availability, photos, and seller contact details. By simply scanning the code with a smartphone,
                     the full vehicle details page is displayed, making communication between buyer and seller much easier.
                     </Typography>
                  </Box>
                  <Box align="center" p={5}>
                     <Button variant="contained" color="primary">
                        Read More
                     </Button>
                  </Box>
               </Paper>
            </Container>
         </Box>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Recent in Autovault
            </Box>
         </Typography>
         <RecentInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box component={Link}
               fontWeight="fontWeightBold"
               underline="hover"
               color="#000"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>

         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Browse by brand
            </Box>
         </Typography>
         <Brands/>


         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Sedans in AutoVaul
            </Box>
         </Typography>
         <SedanInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box component={Link}
               fontWeight="fontWeightBold"
               underline="hover"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               SUV's in AutoVaul
            </Box>
         </Typography>
         <SUVInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box component={Link}
               fontWeight="fontWeightBold"
               underline="hover"
               color="#000"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Luxury in AutoVault
            </Box>
         </Typography>
         <LuxuryInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box
               fontWeight="fontWeightBold"
               underline="hover"
               color="#000"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>
         <SignUp />
         <LatestNews />
         <CheckOut/>
         <Footer />
         </InventoryContext.Provider>
      </React.Fragment>
   );
}
